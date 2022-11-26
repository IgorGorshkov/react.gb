import React, { useCallback } from "react";
import { useEffect, useRef, useState } from "react";

export const ExampleForm = ({ onSubmit, render }) => {
  const [value, setValue] = useState("");

  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(value);
    setValue("");
    inputRef.current?.focus();
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    console.log("did mount", inputRef);
    inputRef.current?.focus();

    return () => {
      console.log("will unmount");
    };
  }, []);

  return <form onSubmit={handleSubmit}>{render({ value, handleChange })}</form>;
};

const Child1 = React.memo(() => {
  console.log("Child1 render");
  return <h3>HELLO!</h3>;
});

const Child2 = React.memo(({ count }) => {
  console.log("Child2 render");
  return <div>{count}</div>;
});

const Child3 = React.memo(({ onClick }) => {
  console.log("Child3 render");
  return <button onClick={onClick}>Click</button>;
});

export const Parent = () => {
  const [count, setCount] = useState(0);

  const updateCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  console.log("Parent render");
  return (
    <>
      <Child1 />
      <Child2 count={count} />
      <Child3 onClick={updateCount} />
    </>
  );
};

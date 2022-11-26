import { useEffect, useRef, useState } from "react";

import { Form } from "./Form";
import "./Form.styles.css";

export const FormContainer = ({ onSubmit }) => {
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
    inputRef.current?.focus();
  }, []);

  return (
    <Form
      value={value}
      inputRef={inputRef}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

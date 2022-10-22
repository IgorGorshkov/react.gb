import { Link } from "react-router-dom";
import s from "./SideBar.module.css";

function SideBar() {
  return (
    <div className={s.div}>
      <Link className={s.link} to={"/"}>
        Главная
      </Link>
      <Link className={s.link} to={"/profile"}>
        Профиль
      </Link>
      <Link className={s.link} to={"/chats"}>
        Чаты
      </Link>
    </div>
  );
}

export default SideBar;

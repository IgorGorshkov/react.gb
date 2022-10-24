import "./App.css";
import SideBar from "../component/SideBar/SideBar";
import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import NotFound from "../pages/NotFound";
import ProfilePage from "../pages/ProfilePage";
import ChatPage from "../pages/ChatPage";

function App() {
  return (
    <div className="wrapper">
      <SideBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="chats" element={<ChatPage />}>
          <Route path=":chatId" element={<ChatPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

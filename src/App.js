import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import Member from "./views/Member";
import VIPRoomUseRecord from "./views/VIPRoomUseRecord";

import Login from "./views/Login/";
import Signup from "./views/Signup/";
import NotFound from "./views/NotFound/";
import MemberUser from "./views/MemberUser";


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="member" element={<Member />} />
        <Route path="member/:memberId" element={<MemberUser />} />
        <Route path="viproomuserecord" element={<VIPRoomUseRecord />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;

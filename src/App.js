import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import Member from "./views/Member";
import VIPRoomUseRecord from "./views/VIPRoomUseRecord";

import Login from "./views/Login/";
import NotFound from "./views/NotFound/";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/member" element={<Member />} />
        <Route path="/viproomuserecord" element={<VIPRoomUseRecord />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;

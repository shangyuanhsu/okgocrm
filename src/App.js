import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import Member from "./views/Member";
import VIPRoomUseRecord from "./views/VIPRoomUseRecord";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./views/Login/";
import NotFound from "./views/NotFound/";

const App = () => {
  return (
    <div className="App">
      <div>
        <Header />
        <Footer />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/member" element={<Member />} />
          <Route path="/viproomuserecord" element={<VIPRoomUseRecord />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;

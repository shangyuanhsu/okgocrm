import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage/index.js";
import Member from "./views/Member/index.js";
import VIPRoomUseRecord from "./views/VIPRoomUseRecord/index.js";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
        </Routes>
      </main>
    </div>
  );
};

export default App;

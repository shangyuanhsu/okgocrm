// import "./Member.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Member = () => {
  return (
    <div className="Member allSection">
      <div>
        <Header />
        <Footer />
      </div>
      <main>
        <h2>Member</h2>
        <div>
          <span>Search Member :</span>
          <span>
            <input type="text" />
            <span className="material-symbols-outlined">
              search
            </span>
          </span>
        </div>
        <Link to="/member/1" >MEMBER 1</Link>

      </main>
    </div>
  );
};

export default Member;

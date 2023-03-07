import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const MemberUser = () => {
  return (
    <div className="MemberUser allSection">
      <div>
        <Header />
        <Footer />
      </div>
      <main>
        <h2><Link to="/member">Member</Link> {'>'} Sherry Hsu</h2>
      </main>
    </div>
  );
};

export default MemberUser;

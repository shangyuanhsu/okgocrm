import "./HomePage.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const HomePage = () => {
  return (
    <div className="HomePage allSection">
      <div>
        <Header />
        <Footer />
      </div>
      <main>
        <h2>Home</h2>
      </main>
    </div>
  );
};

export default HomePage;

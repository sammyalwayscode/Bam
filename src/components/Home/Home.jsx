import Footer from "../Footer";
import Header from "../Header/Header";
import HeroPage from "./HeroPage";
import Interview from "./Interview";
import MenClub from "./MenClub";
import Community from "./News/Community";
import Latest from "./News/Latest";
import Womenlub from "./Womenlub";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroPage />
      <Latest />
      <Community />
      <Interview />
      <MenClub />
      <Womenlub />
      <Footer />
    </div>
  );
};

export default Home;

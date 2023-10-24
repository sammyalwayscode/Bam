import Header from "../Header/Header";
import HeroPage from "./HeroPage";
import Interview from "./Interview";
import Community from "./News/Community";
import Latest from "./News/Latest";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroPage />
      <Latest />
      <Community />
      <Interview />
    </div>
  );
};

export default Home;

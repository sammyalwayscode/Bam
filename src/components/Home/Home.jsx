import HeroPage from "./HeroPage";
import Interview from "./Interview";
import MenClub from "./MenClub";
import Community from "./News/Community";
import Latest from "./News/Latest";
import Womenlub from "./Womenlub";

const Home = () => {
  return (
    <div>
      <HeroPage />
      <Latest />
      <Community />
      <Interview />
      <MenClub />
      <Womenlub />
    </div>
  );
};

export default Home;

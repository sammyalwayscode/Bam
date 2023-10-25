import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import CardDetail from "./components/Details/CardDetail";
import Header from "../../app/src/components/Header/Header";
import Footer from "../../app/src/components/Footer";
import PostNews from "./components/Post/PostNews";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<CardDetail />} />
          <Route path="/newpost" element={<PostNews />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

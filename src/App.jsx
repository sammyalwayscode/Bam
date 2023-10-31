import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import CardDetail from "./components/Details/CardDetail";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer";
import PostNews from "./components/Post/PostNews";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<CardDetail />} />
          <Route path="/newpost" element={<PostNews />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

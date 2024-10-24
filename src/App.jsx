import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import ErrorPage from "./Pages/ErrorPage";
import AddBlog from "./Pages/AddBlog";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}>
        <Route path="/" element={<Hero></Hero>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/Blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/addBlog" element={<AddBlog></AddBlog>}></Route>
      </Route>
      <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
    </Routes>
  );
};
export default App;

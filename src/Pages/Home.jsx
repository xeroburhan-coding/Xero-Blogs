import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};
export default Home;

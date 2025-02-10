import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Shared/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-screen-2xl mx-auto bg-base-100 font-primary pl-5 pr-7 py-2">
      <section>
        <Navbar></Navbar>
      </section>
      <Outlet className=""></Outlet>
      <section>Footer</section>
    </div>
  );
};

export default MainLayout;

import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <section>Navbar</section>
      <Outlet></Outlet>
      <section>Footer</section>
    </div>
  );
};

export default MainLayout;

import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="conatiner min-h-screen max-w-7xl mx-auto py-8 px-4">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;

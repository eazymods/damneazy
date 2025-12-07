import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const Main = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/home" || location.pathname === "/";

  return (
    <div className="relative min-h-screen bg-eazy-black overflow-x-hidden">
      {/* Noise overlay for texture */}
      <div className="noise"></div>
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative">
        <Outlet />
      </main>
      
      {/* Footer - hidden on homepage */}
      {!isHomePage && <Footer />}
    </div>
  );
};

export default Main;

import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="relative min-h-screen bg-eazy-black overflow-x-hidden">
      <main className="relative">
        <Outlet />
      </main>
    </div>
  );
};

export default Main;

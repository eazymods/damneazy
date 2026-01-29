import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Loading from "../components/common/Loading";
import SplashScreen from "../components/splash/SplashScreen";

const Main = lazy(() => import("../layouts/Main"));
const Home = lazy(() => import("../pages/Home"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Main />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/home",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/boot",
    element: <SplashScreen />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

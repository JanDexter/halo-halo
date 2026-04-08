import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "*",
    Component: () => (
      <div className="flex items-center justify-center min-h-screen bg-[#f4f1ea] font-serif italic text-4xl text-[#3a352f]">
        Page Not Found / Volume 04
      </div>
    ),
  },
]);

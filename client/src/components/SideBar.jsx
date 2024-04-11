import { Link, useLocation } from "react-router-dom";
import LogoutButton from "./LogoutButton";
const SideBar = () => {
  const location = useLocation();

  return (
    <div className="bg-[#626b86] h-screen">
      <div className="px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]">
        <h1 className="text-white text-[20px] loading-[24px] font-semibold cursor-pointer">
          <Link to="/">Admin Panel</Link>
        </h1>
      </div>
      <button
        className={`flex items-center justify-center gap-[15px] py-[20px] w-full px-[15px] border-b-[1px] border-[#EDEDED]/[0.3] ${
          location.pathname === "/admin-upload" ? "bg-gray-600" : ""
        }`}
      >
        <Link
          to="/admin-upload"
          className="m-auto text-[14px] leading-[20px] font-bold text-white"
        >
          Single Report Generation
        </Link>
      </button>
      <button
        className={`flex items-center justify-center gap-[15px] py-[20px] w-full px-[15px] border-b-[1px] border-[#EDEDED]/[0.3] ${
          location.pathname === "/admin-MultipleFolder" ? "bg-gray-600" : ""
        }`}
      >
        <Link
          to="/admin-MultipleFolder"
          className="m-auto text-[14px] leading-[20px] font-bold text-white"
        >
          Multiple Report Generation
        </Link>
      </button>
      <button
        className={`flex items-center justify-center gap-[15px] py-[20px] w-full px-[15px] border-b-[1px] border-[#EDEDED]/[0.3] ${
          location.pathname === "/admin-send-report-saves" ? "bg-gray-600" : ""
        }`}
      >
        <Link
          to="/admin-send-report-saves"
          className="m-auto text-[14px] leading-[20px] font-bold text-white"
        >
          User Send Reports
        </Link>
      </button>
      <button
        className={`flex items-center justify-center gap-[15px] py-[20px] w-full px-[15px] border-b-[1px] border-[#EDEDED]/[0.3] ${
          location.pathname === "/admin-saves" ? "bg-gray-600" : ""
        }`}
      >
        <Link
          to="/admin-saves"
          className="m-auto text-[14px] leading-[20px] font-bold text-white"
        >
          Admin Saves
        </Link>
      </button>
      <button
        className={`flex items-center justify-center gap-[15px] py-[20px] w-full px-[15px] border-b-[1px] border-[#EDEDED]/[0.3] ${
          location.pathname === "/admin-multipleSaves" ? "bg-gray-600" : ""
        }`}
      >
        <Link
          to="/admin-multipleSaves"
          className="m-auto text-[14px] leading-[20px] font-bold text-white"
        >
          Multiple Saves
        </Link>
      </button>
      <div className="flex justify-center items-center mt-20">
        <Link to={'/'}>
        <LogoutButton />
        </Link>
      </div>
    </div>
  );
};

export default SideBar;

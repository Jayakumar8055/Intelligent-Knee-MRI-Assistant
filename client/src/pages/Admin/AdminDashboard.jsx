import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "../../components/SideBar";
const AdminDashboard = ({ currentUser }) => {
  const navigate = useNavigate();
  return currentUser === "admin" ? (
    <div className="flex">
      <div className="basis-[15%] h-[100vh] bg-[#626b86]">
        <SideBar />
      </div>
      <div className="basis-[85%] border">
        <Outlet />
      </div>
    </div>
  ) : (
    navigate("/unauthorized")
  );
};

export default AdminDashboard;

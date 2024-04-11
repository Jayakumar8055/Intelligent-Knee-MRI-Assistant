import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import HomePage from "./pages/HomePage";
import UserDashboard from "./pages/User/UserDashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import { useAuth } from "./context/auth";
import Unauthorized from "./pages/Unauthorized";
import AdminUploads from "./pages/Admin/AdminPages/AdminUploads";
import UserUploads from "./pages/User/UserPages/UserUploads";
import UserSaves from "./pages/User/UserPages/UserSaves";
import Admin_SendReport_Saves from "./pages/Admin/AdminPages/Admin_SendReport_Saves";
import AdminSaves from "./pages/Admin/AdminPages/AdminSaves";
import MultipleFolder from "./components/FileUploader/MultipleFolder";
import MultipleSaves from './pages/Admin/AdminPages/MultipleSaves'
import UserLogin from "./pages/UserLogin";
function App() {
  const [auth] = useAuth();
  const currentUser = auth?.user?.role;

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/forget-password" element={<ForgetPassword />} />

        <Route element={<UserDashboard currentUser={currentUser} />}>
          <Route path="/user-upload" element={<UserUploads />} />
          <Route path="user-saves" element={<UserSaves />}/>
        </Route>

        <Route element={<AdminDashboard currentUser={currentUser} />}>
          {/* <Route path="/admin" element={<Admin />}/> */}
          <Route path="/admin-upload" element={<AdminUploads />} />
          <Route path="/admin-send-report-saves" element={<Admin_SendReport_Saves />}/>
          <Route path="/admin-saves" element={<AdminSaves />}/>
          <Route path="/admin-MultipleFolder" element={<MultipleFolder />}/>
          <Route path="/admin-multipleSaves" element={<MultipleSaves />}/>
        </Route>

        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </>
  );
}

export default App;

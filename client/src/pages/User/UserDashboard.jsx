import { Outlet, useNavigate } from "react-router-dom"
const UserDashboard = ({currentUser}) => {
  const navigate = useNavigate();
  return (
      currentUser === "user" ? 
      (
        <>
        <Outlet />
        </>
        
      ) : (navigate('/unauthorized'))
  )
}

export default UserDashboard    
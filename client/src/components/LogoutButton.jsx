import { useAuth } from "../context/auth";

const LogoutButton = () => {
    const [auth, setAuth] = useAuth();

    const Logout = () => {
        setAuth({
          user: null,
          token: "",
        });
        localStorage.removeItem("auth");
      };

  return (
    <button onClick={() => Logout()} className="btn">Logout</button>
  )
}

export default LogoutButton
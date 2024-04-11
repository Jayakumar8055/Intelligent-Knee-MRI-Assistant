import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [auth, setAuth] = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post("http://127.0.0.1:5000/api/login", {
        email,
        password,
      });

      if (res && res.data) {
        const { user, access_token: token } = res.data;

        setAuth({
          ...auth,
          user: {
            email: user.email,
            role: user.role,
            name: user.name,
          },
          token,
        });
        console.log("Logged in");
        console.log(res.data.message);

        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(from, { replace: true });
        setLoading(false)
      } else {
        console.log(res.data.message);
        setLoading(false);
      }
    } catch (error) {
        setLoading(false)
        console.log(error);
    }
  };
  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login
          </h2>
        </div>

        <div
          className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
          onSubmit={handleSubmit}
        >
          <form className="space-y-6">
            <div>
              <label
                name="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  name="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    to={"/forget-password"}
                    className="font-semibold text-[#1264ac] hover:text-indigo-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {loading ? (
              <div>Loading</div>
            ) : (
              <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#1264ac] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
            )}
            {/* <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div> */}
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Dont have an account?{" "}
            <Link
              to={"/register"}
              className="font-semibold leading-6 text-[#1264ac] hover:text-indigo-500"
            >
              register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

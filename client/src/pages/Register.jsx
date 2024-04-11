import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [hospitalName, setHospitalName] = useState("");

  // const [user, setUser] = useState(false);
  // const [admin, setAdmin] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleAdminSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await axios.post("http://127.0.0.1:5000/api/admin_register", {
        hospitalName,
        name,
        mobile,
        email,
        password,
        role,
      });

      if (res && res.data) {
        console.log("success");
        toast.success(res.data.message);
        setLoading(false);
        navigate("/login");
      } else {
        console.log(res.data.message);
        toast.success("Failed to register");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // const handleUserSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     setLoading(true);
  //     const res = await axios.post("http://127.0.0.1:5000/api/user_register", {
  //       name,
  //       mobile,
  //       email,
  //       password,
  //       role,
  //     });

  //     if (res && res.data) {
  //       console.log("success");
  //       toast.success(res.data.message);
  //       setLoading(false);
  //       navigate("/login");
  //     } else {
  //       console.log(res.data.message);
  //       toast.success("Failed to register");
  //       setLoading(false);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register as Admin 
          </h2>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleAdminSubmit}>
              <div>
                <label
                  name="hospitalname"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Hospital Name
                </label>
                <div className="mt-2">
                  <input
                    id="hospitalname"
                    name="hospitalname"
                    type="name"
                    value={hospitalName}
                    onChange={(e) => setHospitalName(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  name="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Doctor Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  name="number"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mobile Number
                </label>
                <div className="mt-2">
                  <input
                    id="mobile"
                    name="mobile"
                    type="number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

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

              <div>
                <label
                  name="role"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Role
                </label>
                <div className="mt-2">
                  <input
                    id="role"
                    name="role"
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                    placeholder="Enter as 'admin'"
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {loading ? (
                <div>Loading...</div>
              ) : (
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Submit
                  </button>
                </div>
              )}
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

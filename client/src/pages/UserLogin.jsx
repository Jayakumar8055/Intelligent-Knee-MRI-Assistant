import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

const UserLogin = () => {
  const [abha, setAbha] = useState("");
  const [otp, setOtp] = useState("");

  const [loading, setLoading] = useState(false);
  const [sentEmail, setSentEmail] = useState(false);

  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setSentEmail(false);
      const emailRes = await axios.post(
        "lt-server/api/ABHA-login",
        {
          abha,
        }
      );
      if (emailRes && emailRes.data) {
        console.log("Email sent");
        setLoading(false);
        setSentEmail(true);
      } else {
        console.log(emailRes.data.message);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleOTPSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const verifyOtpRes = await axios.post(
        "lt-server/api/ABHA-verify",
        {
          abha,
          otp,
        }
      );
      if (verifyOtpRes && verifyOtpRes.data) {
        const { user, access_token: token } = verifyOtpRes.data;
        setAuth({
          ...auth,
          user: {
            email: user.email,
            role: user.role,
            name: user.name,
          },
          token,
        });
        localStorage.setItem("auth", JSON.stringify(verifyOtpRes.data));
        console.log("Login successful");
        navigate("/");
        setLoading(false);
      } else {
        setLoading(false);
        console.log(verifyOtpRes.data.message);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login with ABHA Number
          </h2>
        </div>

        <div
          className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
          onSubmit={handleEmailSubmit}
        >
          <form className="space-y-6">
            <div>
              <label
                name="abha"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                ABHA Number
              </label>
              <div className="mt-2">
                <input
                  id="abha"
                  name="abha"
                  type="number"
                  value={abha}
                  onChange={(e) => setAbha(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {loading ? (
              <div>Loading...</div>
            ) : sentEmail ? (
              <></>
            ) : (
              <>
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-[#1264ac] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get OTP
                  </button>
                </div>
                <p className="mt-10 text-center text-sm text-gray-500">
                  Are you Admin?{" "}
                  <Link
                    to={"/login"}
                    className="font-semibold leading-6 text-[#1264ac] hover:text-indigo-500"
                  >
                    Login
                  </Link>
                </p>
              </>
            )}
          </form>
        </div>

        {sentEmail ? (
          <div
            className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
            onSubmit={handleOTPSubmit}
          >
            <form className="space-y-6">
              <div>
                <label
                  name="otp"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  OTP
                </label>
                <div className="mt-2">
                  <input
                    id="otp"
                    name="otp"
                    type="number"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
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
                    className="flex w-full justify-center rounded-md bg-[#1264ac] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Login
                  </button>
                </div>
              )}
            </form>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default UserLogin;

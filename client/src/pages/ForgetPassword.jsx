import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [new_password, setNew_Password] = useState("");

  const [loading, setLoading] = useState(false);
  const [sentEmail, setSentEmail] = useState(false);

  const navigate = useNavigate();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setSentEmail(false);
      const emailRes = await axios.post(
        "http://127.0.0.1:5000/api/forget-password",
        { email }
      );
      if (emailRes && emailRes.data) {
        console.log("Email sent");
      } else {
        console.log(emailRes.data.message);
      }
      setLoading(false);
      setSentEmail(true);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleOTPSubmit = async (e) => {
    e.preventDefault();
    try {
      const verifyOtpRes = await axios.post(
        "http://127.0.0.1:5000/api/verify-otp",
        {
          email,
          otp,
          new_password,
        }
      );
      if (verifyOtpRes && verifyOtpRes.data) {
        console.log("Reset password successful");
        navigate('/login')
      } else {
        console.log(verifyOtpRes.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Forget password
          </h2>
        </div>

        <div
          className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
          onSubmit={handleEmailSubmit}
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
            {loading ? (
              <div>Loading...</div>
            ) : (
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#1264ac] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get OTP
                </button>
              </div>
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

              <div>
                <label
                  name="new password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  New Password
                </label>
                <div className="mt-2">
                  <input
                    id="newPassword"
                    name="new password"
                    type="password"
                    value={new_password}
                    onChange={(e) => setNew_Password(e.target.value)}
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
                    Reset Password
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

export default ForgetPassword;

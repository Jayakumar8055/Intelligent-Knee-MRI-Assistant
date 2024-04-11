import { useState, useEffect } from "react";
import { useAuth } from "../../../context/auth";
import axios from "axios";
import { FaDownload } from "react-icons/fa6";

function UserSaves() {
  const [auth] = useAuth();
  const [metadata, setMetadata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userEmail = auth?.user?.email;
        const response = await axios.get(
          `http://127.0.0.1:5000/api/userSaves/metadata?email=${userEmail}`
        );
        setMetadata(response.data);
      } catch (error) {
        console.error("Error fetching metadata:", error);
      }
    };

    fetchData();
  }, []);

  const downloadPdf = async (filename, fileid) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/api/admin_report_sends?id=${fileid}`
      );
      const data = await response.blob();
      const url = window.URL.createObjectURL(data);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  return (
    <div>
      <h1>Your Reports</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-600 dark:text-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">
                Doctor Name
              </th>
              <th scope="col" className="px-6 py-3">
                Hospital Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Report
              </th>
            </tr>
          </thead>
          <tbody>
            {metadata.map((item, index) => (
              <tr
                key={index}
                className="odd:bg-white odd:dark:bg-gray-300 even:bg-gray-50 even:dark:bg-gray-400 border-b dark:border-gray-700"
              >
                <td className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap dark:text-black">
                  {item.DoctorName}
                </td>
                <td className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap dark:text-black">
                  {item.HospitalName}
                </td>
                <td className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap dark:text-black">
                  {item.DoctorEmail}
                </td>
                <td
                  className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap text-[20px] dark:text-black"
                  onClick={() => downloadPdf(item.filename, item._id)}
                >
                  <FaDownload className="w-10" />
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserSaves;
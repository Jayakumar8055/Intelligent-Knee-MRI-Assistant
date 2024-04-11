import { useState, useEffect } from "react";
import { useAuth } from "../../../context/auth";
import axios from "axios";
import { FaDownload } from "react-icons/fa6";
import { MdOutlineDeleteOutline } from "react-icons/md";

function MultipleSaves() {
  const [auth] = useAuth();
  const [metadata, setMetadata] = useState([]);
  const [search, setSearch] = useState("");
  const fetchData = async () => {
    try {
      const userEmail = auth?.user?.email;
      const response = await axios.get(
        `http://127.0.0.1:5000/api/adminMultipleFolder/metadata?email=${userEmail}`
      );
      setMetadata(response.data);
    } catch (error) {
      console.error("Error fetching metadata:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      let answer = window.prompt("Are You Sure want to delete this Report?");
      // if(!answer) return;
      if (answer && (answer.toLowerCase() === "yes")){
        const res = await axios.delete(
          `http://127.0.0.1:5000/api/adminMultipleFolderDelete/${id}`
        );
        console.log(res.data)
        fetchData()
      }
      else {
        console.log("Deletion cancelled or invalid input.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const downloadPdf = async (filename, fileid) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/api/adminMultipleFolder?id=${fileid}`
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

  // const filterMetaData = metadata.filter((item) => {
  //   if (item.PatientAbha && typeof item.PatientAbha === 'string') {
  //     return item.PatientAbha.includes(search);
  //   }
  //   return false;
  // });

  return (
    <div>
      <h1 className="text-[20px] text-center my-5 text-gray-700">Reports you saved</h1>
      {/* <div>
        <input
          className="block w-35% mx-5 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500"
          type="text"
          placeholder="Search by patient ABHA"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div> */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-600 dark:text-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">
                Patient ABHA
              </th>
              <th scope="col" className="px-6 py-3">
                Report
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
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
                  {item.PatientABHA}
                </td>
                <td
                  className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap text-[20px] dark:text-black"
                  onClick={() => downloadPdf(item.filename, item._id)}
                >
                  <FaDownload className="w-10" />
                </td>
                <td
                  className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap text-[25px] dark:text-black"
                  onClick={() => handleDelete(item._id)}
                >
                  <MdOutlineDeleteOutline />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MultipleSaves;

// import axios from "axios";
// import { useState } from "react";
// import { useAuth } from "../../context/auth";
// import { useNavigate } from "react-router-dom";

// const FileUploader = ({
//   patientId,
//   receiver_email,
//   receiver_name,
//   receiver_Mobile,
//   foundEmail,
// }) => {
//   const [uploadedFiles, setUploadedFiles] = useState([]);
//   const [predicted, setPredicted] = useState("");
//   const [auth] = useAuth();
//   const [loading, setLoading] = useState(false);
//   const [loadingSend, setLoadingSend] = useState(false);

//   const navigate = useNavigate();

//   console.log(foundEmail);

//   const onFolderInputChange = (e) => {
//     const files = Array.from(e.target.files);
//     setUploadedFiles(files);
//   };

//   console.log(receiver_email);
//   console.log(receiver_name);
//   console.log(patientId);
//   console.log(receiver_Mobile);

//   const adminSavedData = async () => {
//     console.log("Admin saved data")
//     const formData = new FormData();

//     uploadedFiles.forEach((file, index) => {
//       formData.append(`file_${index}`, file);
//     });
//     formData.append("SenderEmail", auth?.user?.email);
//     formData.append("PatientId", patientId);
//     formData.append("ReceiverEmail", receiver_email);
//     formData.append("ReceiverName", receiver_name);
//     formData.append("ReceiverMobile", receiver_Mobile);

//     try {
//       setLoading(true);
//       console.log(auth?.user?.email);
//       const response = await axios.post(
//         "http://127.0.0.1:5000/api/adminSavedData",
//         formData
//       );

//       if (response.status === 200) {
//         const result = response.data;
//         setPredicted(result);
//         setLoading(false);
//         navigate('/admin-saves')

//       } else {
//         setLoading(false);
//         console.error(`Error: ${response.status} - ${response.data}`);
//         return null;
//       }
//     } catch (error) {
//       setLoading(false);
//       console.error(`Error: ${error.message}`);
//       return null;
//     }
//   };

//   const adminSendToUserData = async () => {
//     const formData = new FormData();

//     uploadedFiles.forEach((file, index) => {
//       formData.append(`file_${index}`, file);
//     });
//     formData.append("SenderEmail", auth?.user?.email);
//     formData.append("PatientId", patientId);
//     formData.append("ReceiverEmail", receiver_email);
//     formData.append("ReceiverName", receiver_name);
//     formData.append("ReceiverMobile", receiver_Mobile);

//     try {
//       setLoadingSend(true);
//       console.log(auth?.user?.email);
//       const response = await axios.post(
//         "http://127.0.0.1:5000/api/adminSendToUserData",
//         formData
//       );

//       if (response.status === 200) {
//         const result = response.data;
//         setPredicted(result);
//         setLoadingSend(false);
//         navigate('/admin-send-report-saves')
//       } else {
//         setLoadingSend(false);
//         console.error(`Error: ${response.status} - ${response.data}`);
//         return null;
//       }
//     } catch (error) {
//       setLoadingSend(false);
//       console.error(`Error: ${error.message}`);
//       return null;
//     }
//   };

//   // const handleDelete = (index) => {
//   //   const newFiles = [...uploadedFiles];
//   //   newFiles.splice(index, 1);
//   //   setUploadedFiles(newFiles);
//   // };

//   return (
//     <div className="flex flex-col items-center">
//       <input
//         type="file"
//         onChange={onFolderInputChange}
//         webkitdirectory="true"
//         directory="true"
//       />

//       {uploadedFiles.length > 0 && (
//         <div className="text-center mb-5 mt-5">
//           <h3>Uploaded Files:</h3>
//           <ul>
//             {uploadedFiles.map((file, index) => (
//               <li key={index}>
//                 {file.name}
//                 {/* <button onClick={() => handleDelete(index)} className="mb-4">
//                   Delete
//                 </button> */}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {foundEmail ? (
//         <>
//           <button
//             onClick={() => adminSavedData()}
//             className="bg-gray-400 px-4 py-2 rounded my-5"
//           >
//             {loading ? "Loading...." : "Save the report"}
//           </button>
//           <button
//             onClick={() => adminSendToUserData()}
//             className="bg-gray-400 px-4 py-2 rounded my-5"
//           >
//             {loadingSend ? "Sending...." : "Send the report to patient"}
//           </button>
//         </>
//       ) : (
//         <button
//           onClick={() => adminSavedData()}
//           className="bg-red-400 px-4 py-2 rounded my-5"
//         >
//           {loading ? "Loading...." : "Save the report in your side"}
//         </button>
//       )}
//     </div>
//   );
// };

// export default FileUploader;





import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";

const FileUploader = ({
  patientId,
  receiver_email,
  receiver_name,
  receiver_Mobile,
  dob,
  gender,
  abha,
  foundAbha,
}) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [predicted, setPredicted] = useState("");
  const [auth] = useAuth();
  const [loading, setLoading] = useState(false);
  const [loadingSend, setLoadingSend] = useState(false);

  const navigate = useNavigate();

  console.log(foundAbha);

  const onFolderInputChange = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles(files);
  };

  console.log(receiver_email);
  console.log(receiver_name);
  console.log(patientId);
  console.log(receiver_Mobile);

  const adminSavedData = async () => {
    console.log("Admin saved data")
    const formData = new FormData();

    uploadedFiles.forEach((file, index) => {
      formData.append(`file_${index}`, file);
    });
    formData.append("SenderEmail", auth?.user?.email);
    formData.append("PatientId", patientId);
    formData.append("ReceiverEmail", receiver_email);
    formData.append("ReceiverName", receiver_name);
    formData.append("ReceiverMobile", receiver_Mobile);
    formData.append("ReceiverDob", dob);
    formData.append("ReceiverGender", gender);
    formData.append("ReceiverAbha", abha);
    try {
      setLoading(true);
      console.log(auth?.user?.email);
      const response = await axios.post(
        "http://127.0.0.1:5000/api/adminSavedData",
        formData
      );

      if (response.status === 200) {
        const result = response.data;
        setPredicted(result);
        setLoading(false);
        navigate('/admin-saves')

      } else {
        setLoading(false);
        console.error(`Error: ${response.status} - ${response.data}`);
        return null;
      }
    } catch (error) {
      setLoading(false);
      console.error(`Error: ${error.message}`);
      return null;
    }
  };

  const adminSendToUserData = async () => {
    const formData = new FormData();

    uploadedFiles.forEach((file, index) => {
      formData.append(`file_${index}`, file);
    });
    formData.append("SenderEmail", auth?.user?.email);
    formData.append("PatientId", patientId);
    formData.append("ReceiverEmail", receiver_email);
    formData.append("ReceiverName", receiver_name);
    formData.append("ReceiverMobile", receiver_Mobile);
    formData.append("ReceiverDob", dob);
    formData.append("ReceiverGender", gender);
    formData.append("ReceiverAbha", abha);
    
    try {
      setLoadingSend(true);
      console.log(auth?.user?.email);
      const response = await axios.post(
        "http://127.0.0.1:5000/api/adminSendToUserData",
        formData
      );

      if (response.status === 200) {
        const result = response.data;
        setPredicted(result);
        setLoadingSend(false);
        navigate('/admin-send-report-saves')
      } else {
        setLoadingSend(false);
        console.error(`Error: ${response.status} - ${response.data}`);
        return null;
      }
    } catch (error) {
      setLoadingSend(false);
      console.error(`Error: ${error.message}`);
      return null;
    }
  };


  return (
    <div className="flex flex-col items-center">
      <input
        type="file"
        onChange={onFolderInputChange}
        webkitdirectory="true"
        directory="true"
      />

      {uploadedFiles.length > 0 && (
        <div className="text-center mb-5 mt-5">
          <h3>Uploaded Files:</h3>
          <ul>
            {uploadedFiles.map((file, index) => (
              <li key={index}>
                {file.name}
                {/* <button onClick={() => handleDelete(index)} className="mb-4">
                  Delete
                </button> */}
              </li>
            ))}
          </ul>
        </div>
      )}

      {foundAbha ? (
        <>
          <button
            onClick={() => adminSavedData()}
            className="bg-gray-400 px-4 py-2 rounded my-5"
          >
            {loading ? "Loading...." : "Save the report"}
          </button>
          <button
            onClick={() => adminSendToUserData()}
            className="bg-gray-400 px-4 py-2 rounded my-5"
          >
            {loadingSend ? "Loading...." : "Send the report to patient"}
          </button>
        </>
      ) : (
        <button
          onClick={() => adminSavedData()}
          className="bg-red-400 px-4 py-2 rounded my-5"
        >
          {loading ? "Loading...." : "Save the report in your side"}
        </button>
      )}
    </div>
  );
};

export default FileUploader;

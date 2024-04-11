import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";

const MultipleFolder = () => {
  const [uploadedFiles, setUploadedFiles] = useState({});
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState(null); // Initialize response state with null
  const navigate = useNavigate();

  const [auth] = useAuth();

  const onFolderInputChange = (e) => {
    const files = Array.from(e.target.files);
    const uploadedFilesWithFolders = files.reduce((acc, file) => {
      const relativePath = file.webkitRelativePath;
      const [mainFolder, subfolder] = relativePath.split("/");
      if (!acc[mainFolder]) {
        acc[mainFolder] = [];
      }
      acc[mainFolder].push({ file, subfolder });
      return acc;
    }, {});
    setUploadedFiles(uploadedFilesWithFolders);
  };


  
  
  
  // correct working
  const predictData = async () => {
    const formData = new FormData();
  


    // Iterate through uploadedFiles object and append files and subfolders to formData
    Object.keys(uploadedFiles).forEach((mainFolder, mainFolderIndex) => {
      uploadedFiles[mainFolder].forEach(({ file, subfolder }, subFolderIndex) => {
        formData.append(`files[${mainFolderIndex}]`, file); // Append files without subfolder indices
        formData.append(`subfolders[${mainFolderIndex}]`, subfolder); // Append subfolder names without subfolder indices
      });
    });

    const email = auth?.user?.email;
    formData.append("AdminEmail", email);

    for (let pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }
  
    try {
      setLoading(true);
      const response = await axios.post("http://127.0.0.1:5000/api/multipleFolder", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });
  
      if (response.status === 200) {
        setRes(response.data); // Set the response data
        console.log(response.data); // Log the response data
        console.log("Success");
        navigate('/admin-multipleSaves')
      } else {
        console.error(`Error: ${response.status} - ${response.data}`);
      }
  
      setLoading(false);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      setLoading(false);
    }
  };

  
 
  

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[20px] text-center my-5 text-gray-700">
        Generate Multiple Patient Report
      </h1>
      <input type="file" className="mt-10 mx-auto mb-10" onChange={onFolderInputChange} webkitdirectory="true" directory="true" />

      {Object.keys(uploadedFiles).length > 0 && (
        <div className="text-center mb-5 mt-5">
          <h3>Uploaded Files:</h3>
          <ul>
            {Object.keys(uploadedFiles).map((mainFolder, index) => (
              <li key={index} className="mt-5 mb-8">
                <strong>Main Folder: {mainFolder}</strong>
                <ul>
                  {uploadedFiles[mainFolder].map(({ file, subfolder }, idx) => (
                    <li key={idx}>
                      Subfolder: {subfolder}, File: {file.name}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}

      {loading ? (
        <button className="bg-gray-400 px-4 py-2 rounded" disabled>
          Loading...
        </button>
      ) : (
        <button onClick={predictData} className="bg-red-400 px-4 py-2 rounded">
          Save
        </button>
      )}

      {/* Render response data */}
      {res && (
        <div className="response-container">
          <h3>Response:</h3>
          {/* Render response data based on its type */}
          {typeof res === 'object' ? (
            <pre>{JSON.stringify(res, null, 2)}</pre>
          ) : (
            <div>{res}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default MultipleFolder;
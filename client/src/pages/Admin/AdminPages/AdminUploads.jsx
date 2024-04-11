// import { useEffect, useState } from "react";
// import FileUploader from "../../../components/FileUploader/FileUploader";
// import axios from "axios";

// const AdminUploads = () => {
//   const [receiver_email, setReceiverEmail] = useState("");
//   const [receiver_name, setReceiverName] = useState("");
//   const [patientId, setPatientId] = useState("");
//   const [receiver_Mobile, setReceiverMobile] = useState("");
//   const [foundEmail, setFoundEmail] = useState(false);
//   const [notFoundEmail, setNotFoundEmail] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const handleSave = async (e) => {
//     e.preventDefault();
//     // console.log(receiver_email);
//     // console.log(receiver_name);
//     // console.log(patientId);
//   };

//   const handleFindUserDetails = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await axios.post(
//         "http://127.0.0.1:5000/api/check_user_details",
//         { receiver_email }
//       );
//       if (res.data.found) {
//         const { user_details } = res.data;
//         setReceiverName(user_details.userName);
//         setReceiverMobile(user_details.mobile);
//         setFoundEmail(true);
//       } else {
//         setReceiverName("");
//         setReceiverMobile("");
//         setNotFoundEmail(true);
//         setFoundEmail(false);
//       }
//     } catch (error) {
//       console.log(error);
//       setFoundEmail(false);
//     }
//     setLoading(false);
//   };
//   return (
//     <section>
//       <div>AdminUploads</div>
//       <div></div>
//       <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//         <form className="space-y-6" onSubmit={handleFindUserDetails}>
//           <div className="mb-7">
//             <label
//               name="email"
//               className="block text-sm font-medium leading-6 text-gray-900"
//             >
//               Patient Email
//             </label>
//             <div className="mt-2">
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 value={receiver_email}
//                 onChange={(e) => setReceiverEmail(e.target.value)}
//                 required
//                 className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>
//           {foundEmail ? (
//             <></>
//           ) : (
//             <button
//               className="flex items-center align-middle bg-gray-400 px-4 py-2 rounded mx-auto"
//               disabled={loading}
//             >
//               {loading
//                 ? "Loading..."
//                 : notFoundEmail
//                 ? "Email not Found. Enter the details"
//                 : "Find the patient"}
//             </button>
//           )}
//         </form>

//         {foundEmail ? (
//           <>
//             <form className="space-y-6" onSubmit={handleSave}>
//               <div>
//                 <div className="mb-7">
//                   <label
//                     name="patientId"
//                     className="block text-sm font-medium leading-6 text-gray-900"
//                   >
//                     Patient Id
//                   </label>
//                   <div className="mt-2">
//                     <input
//                       id="patientId"
//                       name="Patient Id"
//                       type="name"
//                       value={patientId || ""}
//                       onChange={(e) => setPatientId(e.target.value)}
//                       required
//                       className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                     />
//                   </div>
//                 </div>
//                 <div className="mb-7">
//                   <label
//                     name="email"
//                     className="block text-sm font-medium leading-6 text-gray-900"
//                   >
//                     Patient Name
//                   </label>
//                   <div className="mt-2">
//                     <input
//                       id="receiverName"
//                       name="receiver name"
//                       type="name"
//                       value={receiver_name || ""}
//                       onChange={(e) => setReceiverName(e.target.value)}
//                       // disabled
//                       required
//                       className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                     />
//                   </div>
//                 </div>

//                 <div className="mb-7">
//                   <label
//                     name="email"
//                     className="block text-sm font-medium leading-6 text-gray-900"
//                   >
//                     Patient Mobile
//                   </label>
//                   <div className="mt-2">
//                     <input
//                       id="receiverMobile"
//                       name="receiver mobile"
//                       type="number"
//                       value={receiver_Mobile || ""}
//                       onChange={(e) => setReceiverMobile(e.target.value)}
//                       // disabled
//                       required
//                       className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                     />
//                   </div>
//                 </div>

//                 <FileUploader
//                   patientId={patientId}
//                   receiver_email={receiver_email}
//                   receiver_name={receiver_name}
//                   receiver_Mobile={receiver_Mobile}
//                   foundEmail={foundEmail}
//                 />
//               </div>
//             </form>
//           </>
//         ) : (
//           <></>
//         )}

//         {notFoundEmail ? (
//           <>
//             <form className="space-y-6" onSubmit={handleSave}>
//               <div>
//                 <div className="mb-7">
//                   <label
//                     name="patientId"
//                     className="block text-sm font-medium leading-6 text-gray-900"
//                   >
//                     Patient Id
//                   </label>
//                   <div className="mt-2">
//                     <input
//                       id="patientId"
//                       name="Patient Id"
//                       type="name"
//                       value={patientId}
//                       onChange={(e) => setPatientId(e.target.value)}
//                       required
//                       className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                     />
//                   </div>
//                 </div>
//                 <div className="mb-7">
//                   <label
//                     name="email"
//                     className="block text-sm font-medium leading-6 text-gray-900"
//                   >
//                     Patient Name
//                   </label>
//                   <div className="mt-2">
//                     <input
//                       id="receiverName"
//                       name="receiver name"
//                       type="name"
//                       value={receiver_name}
//                       onChange={(e) => setReceiverName(e.target.value)}
//                       // disabled
//                       required
//                       className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                     />
//                   </div>
//                 </div>

//                 <div className="mb-7">
//                   <label
//                     name="email"
//                     className="block text-sm font-medium leading-6 text-gray-900"
//                   >
//                     Patient Mobile
//                   </label>
//                   <div className="mt-2">
//                     <input
//                       id="receiverMobile"
//                       name="receiver mobile"
//                       type="number"
//                       value={receiver_Mobile}
//                       onChange={(e) => setReceiverMobile(e.target.value)}
//                       // disabled
//                       required
//                       className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                     />
//                   </div>
//                 </div>

//                 <FileUploader
//                   patientId={patientId}
//                   receiver_email={receiver_email}
//                   receiver_name={receiver_name}
//                   receiver_Mobile={receiver_Mobile}
//                   foundEmail={foundEmail}
//                 />
//               </div>
//             </form>
//           </>
//         ) : (
//           <></>
//         )}
//       </div>
//     </section>
//   );
// };

// export default AdminUploads;











import { useState } from "react";
import FileUploader from "../../../components/FileUploader/FileUploader";
import axios from "axios";

const AdminUploads = () => {

  const [ abha, setAbha ] = useState("");

  const [receiver_email, setReceiverEmail] = useState("");
  const [receiver_name, setReceiverName] = useState("");
  const [patientId, setPatientId] = useState("");
  const [receiver_Mobile, setReceiverMobile] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [foundAbha, setFoundAbha] = useState(false);
  const [notFoundEmail, setNotFoundEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSave = async (e) => {
    e.preventDefault();
    // console.log(receiver_email);
    // console.log(receiver_name);
    // console.log(patientId);
  };
  console.log(foundAbha)
  const handleFindUserDetails = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "http://127.0.0.1:5000/api/check_user_details",
        { abha }
      );
      if (res.data.found) {
        const { user_details } = res.data;
        setReceiverName(user_details.userName);
        setReceiverMobile(user_details.mobile);
        setReceiverEmail(user_details.userEmail);
        setDob(user_details.dob)
        setGender(user_details.gender)
        setFoundAbha(true);
      } else {
        setReceiverName("");
        setReceiverMobile("");
        setGender("");
        setNotFoundEmail(true);
        setFoundAbha(false);
      }
    } catch (error) {
      console.log(error);
      setFoundAbha(false);
    }
    setLoading(false);
  };
  return (
    <section>
      <div className="text-[20px] text-center my-5 text-gray-700">AdminUploads</div>
      <div></div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleFindUserDetails}>
          <div className="mb-7">
            <label
              name="number"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Patient Abha Number
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
          {foundAbha ? (
            <></>
          ) : (
            <button
              className="flex items-center align-middle bg-gray-400 px-4 py-2 rounded mx-auto"
              disabled={loading}
            >
              {loading
                ? "Loading..."
                : notFoundEmail
                ? "Abha not Found. Enter the details"
                : "Find the patient"}
            </button>
          )}
        </form>

        {foundAbha ? (
          <>
            <form className="space-y-6" onSubmit={handleSave}>
              <div>
                <div className="mb-7">
                  <label
                    name="patientId"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Patient Id
                  </label>
                  <div className="mt-2">
                    <input
                      id="patientId"
                      name="Patient Id"
                      type="name"
                      value={patientId || ""}
                      onChange={(e) => setPatientId(e.target.value)}
                      required
                      className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="mb-7">
                  <label
                    name="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Patient Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="receiverName"
                      name="receiver name"
                      type="name"
                      value={receiver_name || ""}
                      onChange={(e) => setReceiverName(e.target.value)}
                      // disabled
                      required
                      className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="mb-7">
                  <label
                    name="number"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Patient Mobile
                  </label>
                  <div className="mt-2">
                    <input
                      id="receiverMobile"
                      name="receiver mobile"
                      type="number"
                      value={receiver_Mobile || ""}
                      onChange={(e) => setReceiverMobile(e.target.value)}
                      // disabled
                      required
                      className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="mb-7">
                  <label
                    name="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Patient Gender
                  </label>
                  <div className="mt-2">
                    <input
                      id="gender"
                      name="gender"
                      type="text"
                      value={gender || ""}
                      onChange={(e) => setGender(e.target.value)}
                      // disabled
                      required
                      className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <FileUploader
                  patientId={patientId}
                  receiver_email={receiver_email}
                  receiver_name={receiver_name}
                  receiver_Mobile={receiver_Mobile}
                  dob={dob}
                  gender={gender}
                  abha={abha}
                  foundAbha={foundAbha}
                />
              </div>
            </form>
          </>
        ) : (
          <></>
        )}

        {notFoundEmail ? (
          <>
            <form className="space-y-6" onSubmit={handleSave}>
              <div>
                <div className="mb-7">
                  <label
                    name="patientId"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Patient Id
                  </label>
                  <div className="mt-2">
                    <input
                      id="patientId"
                      name="Patient Id"
                      type="name"
                      value={patientId}
                      onChange={(e) => setPatientId(e.target.value)}
                      required
                      className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="mb-7">
                  <label
                    name="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Patient Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="receiverName"
                      name="receiver name"
                      type="name"
                      value={receiver_name}
                      onChange={(e) => setReceiverName(e.target.value)}
                      // disabled
                      required
                      className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="mb-7">
                  <label
                    name="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Patient Mobile
                  </label>
                  <div className="mt-2">
                    <input
                      id="receiverMobile"
                      name="receiver mobile"
                      type="number"
                      value={receiver_Mobile}
                      onChange={(e) => setReceiverMobile(e.target.value)}
                      // disabled
                      required
                      className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="mb-7">
                  <label
                    name="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Patient Gender
                  </label>
                  <div className="mt-2">
                    <input
                      id="gender"
                      name="gender"
                      type="text"
                      value={gender || ""}
                      onChange={(e) => setGender(e.target.value)}
                      // disabled
                      required
                      className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <FileUploader
                  patientId={patientId}
                  receiver_email={receiver_email}
                  receiver_name={receiver_name}
                  receiver_Mobile={receiver_Mobile}
                  dob={dob}
                  gender={gender}
                  abha={abha}
                  foundAbha={foundAbha}
                />
              </div>
            </form>
          </>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default AdminUploads;
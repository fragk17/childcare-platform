// // import React from 'react'
// // import Navbar_in from "../components/navbar_in";
// // import Footer from "../components/footer";
// // import BackButton from "../components/back_button";

// // const E_edit_bio = () => {
// //   return (
// //     <div className="flex flex-col min-h-screen">
// //       <BackButton />
// //       <Navbar_in />


// //       <Footer />
// //     </div>
// //   )
// // }

// // export default E_edit_bio


// import React, { useState } from "react";
// import Navbar_in from "../components/navbar_in";
// import Footer from "../components/footer";
// import BackButton from "../components/back_button";

// const E_edit_bio = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     surname: '',
//     age: '',
//     education: '',
//     experience: '',
//     gender: '',
//     cv: null,
//   });

//   const handleChange = (e) => {
//     const { id, value, files } = e.target;
//     setFormData({
//       ...formData,
//       [id]: files ? files[0] : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted with data:", formData);
//     // Reset form fields
//     setFormData({
//       name: '',
//       surname: '',
//       age: '',
//       education: '',
//       experience: '',
//       gender: '',
//       cv: null,
//     });
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <BackButton />
//       <Navbar_in />

//       <div className="container mx-auto p-8 py-20">
//         <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//           <h2 className="text-center text-2xl font-bold mb-4">Επεξεργασία Βιογραφικού</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Όνομα</label>
//               <input
//                 onChange={handleChange}
//                 value={formData.name}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none focus:shadow-outline"
//                 id="name"
//                 type="text"
//                 placeholder="Όνομα"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-bold mb-2" htmlFor="surname">Επίθετο</label>
//               <input
//                 onChange={handleChange}
//                 value={formData.surname}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none focus:shadow-outline"
//                 id="surname"
//                 type="text"
//                 placeholder="Επίθετο"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-bold mb-2" htmlFor="age">Ηλικία</label>
//               <input
//                 onChange={handleChange}
//                 value={formData.age}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none focus:shadow-outline"
//                 id="age"
//                 type="number"
//                 placeholder="Ηλικία"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-bold mb-2" htmlFor="education">Επίπεδο Σπουδών</label>
//               <div className="relative">
//                 <select
//                   onChange={handleChange}
//                   value={formData.education}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none focus:shadow-outline"
//                   id="education"
//                 >
//                   <option value="">Επιλέξτε</option>
//                   <option value="Bachelor">Bachelor</option>
//                   <option value="Master">Master</option>
//                   <option value="PhD">PhD</option>
//                 </select>
//                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                   <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
//                 </div>
//               </div>
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-bold mb-2" htmlFor="experience">Εμπειρία</label>
//               <div className="relative">
//                 <select
//                   onChange={handleChange}
//                   value={formData.experience}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none focus:shadow-outline"
//                   id="experience"
//                 >
//                   <option value="">Επιλέξτε</option>
//                   <option value="0-1">0-1 έτος</option>
//                   <option value="1-3">1-3 έτη</option>
//                   <option value="3+">3+ έτη</option>
//                 </select>
//                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                   <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
//                 </div>
//               </div>
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-bold mb-2" htmlFor="gender">Φύλο</label>
//               <div className="relative">
//                 <select
//                   onChange={handleChange}
//                   value={formData.gender}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none focus:shadow-outline"
//                   id="gender"
//                 >
//                   <option value="">Επιλέξτε</option>
//                   <option value="male">Άνδρας</option>
//                   <option value="female">Γυναίκα</option>
//                   <option value="other">Άλλο</option>
//                 </select>
//                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                   <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
//                 </div>
//               </div>
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-bold mb-2" htmlFor="cv">Συστατική Επιστολή:</label>
//               <input
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="cv"
//                 type="file"
//               />
//             </div>
//             <div className="flex items-center justify-between">
//               <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Αποθήκευση</button>
//             </div>
//           </form>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default E_edit_bio;

import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import Navbar_in from "../components/navbar_in";
import Footer from "../components/footer";
import BackButton from "../components/back_button";

const E_edit_bio = () => {
  const auth = getAuth();
  const db = getFirestore();
  const user = auth.currentUser;

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    age: "",
    education: "",
    experience: "",
    gender: "",
    cv: null,
  });

  // Fetch user data from Firestore
  useEffect(() => {
    if (user) {
      const fetchUserData = async () => {
        try {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setFormData({
              name: docSnap.data().firstname || "",
              surname: docSnap.data().lastname || "",
              age: docSnap.data().age || "",
              education: docSnap.data().education || "",
              experience: docSnap.data().experience || "",
              gender: docSnap.data().gender || "",
              cv: null,
            });
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
      fetchUserData();
    }
  }, [user, db]);

  // Handle input change
  const handleChange = (e) => {
    const { id, value, files } = e.target;
    setFormData({
      ...formData,
      [id]: files ? files[0] : value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, "users", user.uid), {
        age: formData.age,
        education: formData.education,
        experience: formData.experience,
        gender: formData.gender,
        // Include CV if needed
      }, { merge: true });

      console.log("Profile updated successfully");
      alert("Τα δεδομένα αποθηκεύτηκαν!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Σφάλμα κατά την αποθήκευση!");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <BackButton />
      <Navbar_in />

      <div className="container mx-auto p-8 py-20">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-center text-2xl font-bold mb-4">Επεξεργασία Βιογραφικού</h2>
          <form onSubmit={handleSubmit}>
            {/* Name (Read-Only) */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Όνομα</label>
              <input
                value={formData.name}
                readOnly
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 bg-gray-100 cursor-not-allowed"
                id="name"
                type="text"
              />
            </div>

            {/* Surname (Read-Only) */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="surname">Επίθετο</label>
              <input
                value={formData.surname}
                readOnly
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 bg-gray-100 cursor-not-allowed"
                id="surname"
                type="text"
              />
            </div>

            {/* Age */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="age">Ηλικία</label>
              <input
                onChange={handleChange}
                value={formData.age}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                id="age"
                type="number"
                placeholder="Ηλικία"
              />
            </div>

            {/* Education */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="education">Επίπεδο Σπουδών</label>
              <select
                onChange={handleChange}
                value={formData.education}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                id="education"
              >
                <option value="">Επιλέξτε</option>
                <option value="Bachelor">Bachelor</option>
                <option value="Master">Master</option>
                <option value="PhD">PhD</option>
              </select>
            </div>

            {/* Experience */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="experience">Εμπειρία</label>
              <select
                onChange={handleChange}
                value={formData.experience}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                id="experience"
              >
                <option value="">Επιλέξτε</option>
                <option value="0-1">0-1 έτος</option>
                <option value="1-3">1-3 έτη</option>
                <option value="3+">3+ έτη</option>
              </select>
            </div>

            {/* Gender */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="gender">Φύλο</label>
              <select
                onChange={handleChange}
                value={formData.gender}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                id="gender"
              >
                <option value="">Επιλέξτε</option>
                <option value="male">Άνδρας</option>
                <option value="female">Γυναίκα</option>
                <option value="other">Άλλο</option>
              </select>
            </div>

            {/* CV Upload */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="cv">Συστατική Επιστολή:</label>
              <input
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                id="cv"
                type="file"
              />
            </div>

            {/* Submit Button */}
            <div className="flex items-center  justify-center">
              <button type="submit" className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
                Αποθήκευση
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default E_edit_bio;








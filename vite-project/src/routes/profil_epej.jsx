import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar_in from "../components/navbar_in";
import Footer from "../components/footer";
import BackButton from "../components/back_button";
import image from "../assets/ima.jpg";

const Profil_Epej = () => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(image);
  const [formData, setFormData] = useState({
    dateOfBirth: "03/04/2004",
    address: "Περικλέους 13, Περιστέρι",
    amka: "03040401269",
    idNumber: "AN077834",
    phone: "+30 6977979200",
    email: "mariapap@gmail.com",
    aboutMe: "Τα πάω πολύ καλά με τα παιδιά και είμαι ευγενικός!",
  });
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const [aboutMe, setAboutMe] = useState(location.state?.aboutMe || "");

  const handleSaveClick = () => {
    setShowModal(true);
    
  };


  const closeModalAndRedirect = () => {
    navigate("/profil", { state: formData });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <BackButton />
      <Navbar_in />
      <div className="flex-grow p-8">
        <h1 className="text-2xl font-bold text-center mb-6">EΠΕΞΕΡΓΑΣΙΑ ΠΡΟΦΙΛ</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Side */}
          <div className="flex flex-col items-start pl-8">
            {/* Profile Picture */}
            <div className="relative w-32 h-32 border-2 border-black rounded-full flex items-center justify-center bg-gray-100 mb-4">
              <label className="absolute inset-0 cursor-pointer flex items-center justify-center">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <span className="text-gray-500">Upload Image</span>
                )}
              </label>
            </div>

            {/* Name */}
            <p className="text-lg font-semibold mb-2">ΜΑΡΙΑ ΠΑΠΑΔΟΥΛΗ</p>

            {/* Role */}
            <p className="text-gray-600 mb-4">Επαγγελματίας</p>

            {/* Date of Birth */}
            <div className="w-full mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="dateOfBirth"
              >
                Ημερομηνία Γέννησης
              </label>
              <input
                id="dateOfBirth"
                type="text"
                value={formData.dateOfBirth}
                readOnly
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-100 cursor-not-allowed"
              />
            </div>

            {/* Address */}
            <div className="w-full mb-6">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="address"
              >
                Διεύθυνση Κατοικίας
              </label>
              <input
                id="address"
                type="text"
                value={formData.address}
                readOnly
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-100 cursor-not-allowed"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-start pr-8 mt-12">
            {/* AMKA */}
            <div className="w-full mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="amka">
                ΑΜΚΑ
              </label>
              <input
                id="amka"
                type="text"
                value={formData.amka}
                readOnly
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-100 cursor-not-allowed"
              />
            </div>

            {/* ID Number */}
            <div className="w-full mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="idNumber"
              >
                ΑΔΤ
              </label>
              <input
                id="idNumber"
                type="text"
                value={formData.idNumber}
                readOnly
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-100 cursor-not-allowed"
              />
            </div>

            {/* Phone */}
            <div className="w-full mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="phone"
              >
                Τηλέφωνο
              </label>
              <input
                id="phone"
                type="text"
                value={formData.phone}
                readOnly
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-100 cursor-not-allowed"
              />
            </div>

            {/* Email */}
            <div className="w-full mb-6">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="text"
                value={formData.email}
                readOnly
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-100 cursor-not-allowed"
              />
            </div>
          </div>
        </div>

        {/* About Me */}
        <div className="mt-6 flex flex-col items-center">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="aboutMe"
          >
            Σχετικά με εμένα
          </label>
          <textarea
            id="aboutMe"
            name="aboutMe"
            value={aboutMe}
            onChange={(e) => setAboutMe(e.target.value)}
            placeholder="Εισαγωγή κειμένου"
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 bg-white"
            style={{ width: "90%", height: "80px", resize: "none" }}
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-center space-x-4">
          <button
            className="bg-gray-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => navigate("/profil")}
          >
            Ακύρωση
          </button>
          <button
            className="bg-green-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleSaveClick}
          >
            Αποθήκευση
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded shadow-lg p-8 text-center relative w-96">
            <div className="text-green-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-12 h-12 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m0 0a9 9 0 11-6 6"
                />
              </svg>
            </div>
            <p className="text-lg font-bold">Αποθηκεύτηκε με επιτυχία!</p>
            <button
              className="mt-4 bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
              onClick={closeModalAndRedirect}
            >
              Κλείσιμο
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Profil_Epej;

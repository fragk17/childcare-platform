import React, { useState } from "react";
import Navbar_in from "../components/navbar_in";
import Footer from "../components/footer";
import BackButton from "../components/back_button";
import image from "../assets/ima.jpg";
import { Link, useLocation } from "react-router-dom";

const Profil = () => {
  const location = useLocation();
  const [profileImage, setProfileImage] = useState(image);
  
  const [aboutMe, setAboutMe] = useState(location.state?.aboutMe || "Τα πάω πολύ καλά με τα παιδιά και είμαι ευγενικός!");

  const [formData] = useState({
    dateOfBirth: "03/04/2004",
    address: "Περικλέους 13, Περιστέρι",
    amka: "03040401269",
    idNumber: "AN077834",
    phone: "+30 6977979200",
    email: "mariapap@gmail.com",
  });

  

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <BackButton />
      <Navbar_in />
      <div className="flex-grow p-8">
        <h1 className="text-2xl font-bold text-center mb-6">ΠΡΟΦΙΛ</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Side */}
          <div className="flex flex-col items-start pl-8">
            {/* Profile Picture */}
            <div className="relative w-32 h-32 border-2 border-black rounded-full flex items-center justify-center bg-gray-100 mb-4">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <span className="text-gray-500">No Image</span>
                )}

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

        {/* Bottom Section */}
        <div className="flex flex-col items-center mt-8">
          <div className="text-center w-full">
            <label
              className="block text-gray-700 font-bold mb-4"
              htmlFor="aboutMe"
            >
              Γράψε μερικά λόγια σχετικά με εσένα (τα οποία θα μπορούν να δουν οι γονείς που ενδιαφέρονται)
            </label>
            <textarea
              id="aboutMe"
              readOnly
              placeholder="Εισαγωγή κειμένου"
              value={aboutMe}
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 bg-gray-100 cursor-not-allowed"
              style={{
                width: "400px",
                height: "100px",
                resize: "none",
                margin: "0 auto",
              }}
            ></textarea>
          </div>
          <div className="mt-4">
            <Link to="/profil_epej" state={{ aboutMe }}>
              <button className="bg-gray-600 text-white font-bold py-2 px-4 rounded">
                Επεξεργασία
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profil;

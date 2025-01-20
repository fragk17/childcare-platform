import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore"; // Firestore methods
import Navbar_in from "../components/navbar_in";
import Footer from "../components/footer";
import image from "../assets/ima.jpg";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Typography from "@mui/material/Typography";
import { FIREBASE_DB } from "../config/firebase";

const Profil_Epej = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { uid } = location.state || {};

  const [profileImage, setProfileImage] = useState(image);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    dateOfBirth: "",
    address: "",
    amka: "",
    idNumber: "",
    phone: "",
    aboutMe: "", // Add aboutMe to formData
  });

  const [originalFormData, setOriginalFormData] = useState({}); // For discarding changes
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDoc = doc(FIREBASE_DB, "users", uid);
        const userSnap = await getDoc(userDoc);

        if (userSnap.exists()) {
          const data = userSnap.data();
          const userData = {
            name: `${data.firstname} ${data.lastname}`,
            role: data.role === "parent" ? "ΓΟΝΕΑΣ" : "ΕΠΑΓΓΕΛΜΑΤΙΑΣ",
            email: data.email,
            dateOfBirth: data.dateOfBirth || "",
            address: data.address || "",
            amka: data.amka || "",
            idNumber: data.idNumber || "",
            phone: data.phone || "",
            aboutMe: data.aboutMe || "", // Fetch aboutMe
          };
          setFormData(userData);
          setOriginalFormData(userData);
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (uid) {
      fetchUserData();
    } else {
      navigate("/login");
    }
  }, [uid, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveClick = async () => {
    try {
      const userDoc = doc(FIREBASE_DB, "users", uid);
      await updateDoc(userDoc, {
        dateOfBirth: formData.dateOfBirth,
        address: formData.address,
        amka: formData.amka,
        idNumber: formData.idNumber,
        phone: formData.phone,
        aboutMe: formData.aboutMe, // Save aboutMe
      });
      setSuccessModalOpen(true);
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  const handleCloseSuccessModal = () => {
    setSuccessModalOpen(false);
    navigate("/profil", { state: { uid, aboutMe: formData.aboutMe } });
  };

  const handleCancelClick = () => {
    setFormData(originalFormData);
    navigate(-1);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar_in />
      <div className="flex-grow p-8">
        <h1 className="text-2xl font-bold text-center mb-6">EΠΕΞΕΡΓΑΣΙΑ ΠΡΟΦΙΛ</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Side */}
          <div className="flex flex-col items-start pl-8">
            {/* Profile Picture */}
            <div className="relative w-32 h-32 border-2 border-black rounded-full flex items-center justify-center bg-gray-100 mb-4">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            {/* Name */}
            <p className="text-lg font-semibold mb-2">{formData.name}</p>

            {/* Role */}
            <p className="text-gray-600 mb-4">{formData.role}</p>

            {/* Date of Birth */}
            <div className="w-full mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="dateOfBirth">
                Ημερομηνία Γέννησης
              </label>
              <input
                id="dateOfBirth"
                name="dateOfBirth"
                type="text"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white"
              />
            </div>

            {/* Address */}
            <div className="w-full mb-6">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
                Διεύθυνση Κατοικίας
              </label>
              <input
                id="address"
                name="address"
                type="text"
                value={formData.address}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white"
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
                name="amka"
                type="text"
                value={formData.amka}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white"
              />
            </div>

            {/* ID Number */}
            <div className="w-full mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="idNumber">
                ΑΔΤ
              </label>
              <input
                id="idNumber"
                name="idNumber"
                type="text"
                value={formData.idNumber}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white"
              />
            </div>

            {/* Phone */}
            <div className="w-full mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                Τηλέφωνο
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white"
              />
            </div>

            {/* Email */}
            <div className="w-full mb-6">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="text"
                value={formData.email}
                readOnly
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-100 cursor-not-allowed"
              />
            </div>
          </div>
        </div>

        {/* About Me */}
        <div className="flex flex-col items-center mt-8">
          <div className="text-center w-full">
            <label className="block text-gray-700 font-bold mb-4" htmlFor="aboutMe">
              Σχετικά με εμένα
            </label>
            <textarea
              id="aboutMe"
              name="aboutMe"
              value={formData.aboutMe}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 bg-white"
              style={{ width: "400px", height: "100px", resize: "none", margin: "0 auto" }}
            ></textarea>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-center space-x-4">
          <button
            className="bg-red-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleCancelClick}
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

      {/* Success Modal */}
      <Modal open={successModalOpen} onClose={handleCloseSuccessModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            textAlign: "center",
          }}
        >
          <CheckCircleIcon sx={{ fontSize: 60, color: "green", mb: 2 }} />
          <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
            Αποθηκεύτηκε με επιτυχία!
          </Typography>
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            onClick={handleCloseSuccessModal}
          >
            Κλείσιμο
          </button>
        </Box>
      </Modal>

      <Footer />
    </div>
  );
};

export default Profil_Epej;

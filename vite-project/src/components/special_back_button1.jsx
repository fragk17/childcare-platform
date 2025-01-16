import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FIREBASE_DB, FIREBASE_AUTH } from "../config/firebase"; // Adjust the import paths as needed
import { doc, getDoc } from "firebase/firestore";

const SpecialBackButton1 = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState(null);

  useEffect(() => {
    const fetchUserRole = async () => {
      const currentUser = FIREBASE_AUTH.currentUser;
      if (currentUser) {
        try {
          const userDoc = doc(FIREBASE_DB, "users", currentUser.uid); // Assuming "users" is the Firestore collection
          const userSnapshot = await getDoc(userDoc);

          if (userSnapshot.exists()) {
            const userData = userSnapshot.data();
            setRole(userData.role); // Assuming "role" is the field in Firestore
          } else {
            console.error("User data does not exist.");
          }
        } catch (error) {
          console.error("Error fetching user role:", error);
        }
      } else {
        console.error("User is not authenticated.");
      }
    };

    fetchUserRole();
  }, []);

  const handleBack = () => {
    if (role === "professional") {
      navigate("/e_arxiki"); // Navigate to e_arxiki for professionals
    } else {
      navigate("/g_arxiki"); // Navigate to g_arxiki for others
    }
  };

  return (
    <div className="absolute top-32 right-10">
      <button
        onClick={handleBack}
        className="bg-gray-500 text-white px-9 py-2 rounded-md shadow hover:bg-gray-500 transition"
        disabled={role === null} // Disable button until role is determined
      >
        Πίσω
      </button>
    </div>
  );
};

export default SpecialBackButton1;

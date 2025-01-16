// import React, { useState } from "react";
// import Navbar_in from "../components/navbar_in";
// import Footer from "../components/footer";
// import BackButton from "../components/back_button";
// import { Modal, Box, Typography, Button } from "@mui/material";
// import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Make sure to import this icon

// const E_istoriko_aggeliwn = () => {
//   const [historyItems, setHistoryItems] = useState([
//     { id: 1, status: "Προσχέδιο Αποθηκευμένη", date: "1/7/2024", time: "9:42" },
//     { id: 2, status: "Αναρτημένη", date: "22/5/2023", time: "9:45" },
//     { id: 3, status: "Αναρτημένη", date: "20/2/2023", time: "10:42" },
//     { id: 4, status: "Προσχέδιο Αποθηκευμένη", date: "11/7/2022", time: "13:25" },
//     { id: 5, status: "Αναρτημένη", date: "13/5/2022", time: "10:41" },
//   ]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [isfinalRejectPopupOpen, setIsfinalRejectPopupOpen] = useState(false);

//   const handleDelete = (item) => {
//     setSelectedItem(item);
//     setIsModalOpen(true);
//   };

//   const confirmDelete = () => {
//     setHistoryItems(historyItems.filter((item) => item.id !== selectedItem.id));
//     setIsModalOpen(false);
//     setIsfinalRejectPopupOpen(true); // Open the success popup
//   };

//   const handleClosefinalRejectPopup = () => {
//     setIsfinalRejectPopupOpen(false);
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <BackButton />
//       <Navbar_in />
      
//       <main className="flex-grow container mx-auto p-4">
//       <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
//         <h1 className="text-2xl font-bold mb-4 text-center">Ιστορικό Αγγελιών</h1>
//         <table className="w-full border-collapse border border-gray-300 text-center">
//           <thead>
//             <tr>
//               <th className="border border-gray-300 px-4 py-2">Κατάσταση</th>
//               <th className="border border-gray-300 px-4 py-2">Ημερομηνία</th>
//               <th className="border border-gray-300 px-4 py-2">Ώρα</th>
//               <th className="border border-gray-300 px-4 py-2">Ενέργειες</th>
//             </tr>
//           </thead>
//           <tbody>
//             {historyItems.map((item) => (
//               <tr key={item.id}>
//                 <td className="border border-gray-300 px-4 py-2">{item.status}</td>
//                 <td className="border border-gray-300 px-4 py-2">{item.date}</td>
//                 <td className="border border-gray-300 px-4 py-2">{item.time}</td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   <button
//                     className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2"
//                   >
//                     Επεξεργασία
//                   </button>
//                   <button
//                     className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                     onClick={() => handleDelete(item)}
//                   >
//                     Διαγραφή
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         </div>
//       </main>

//       {/* Delete Confirmation Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white rounded-md text-center shadow-lg w-96 p-6">
//             <h2 className="text-lg font-bold text-gray-800">
//               Είστε βέβαιοι ότι θέλετε να διαγράψετε την αγγελία;
//             </h2>
//             <p className="text-gray-600 mt-2">
//               Την οποία επεξεργαστήκατε τελευταία φορά στις {selectedItem?.date} στις {selectedItem?.time}
//             </p>
//             <div className="mt-4 flex justify-center space-x-4">
//               <button
//                 className="bg-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-400"
//                 onClick={() => setIsModalOpen(false)}
//               >
//                 Ακύρωση
//               </button>
//               <button
//                 className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                 onClick={confirmDelete}
//               >
//                 Διαγραφή
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Success Popup Modal */}
//       <Modal open={isfinalRejectPopupOpen} onClose={handleClosefinalRejectPopup}>
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: 400,
//             bgcolor: 'background.paper',
//             borderRadius: 2,
//             boxShadow: 24,
//             p: 4,
//             textAlign: 'center',
//           }}
//         >
//           <CheckCircleIcon
//             sx={{ fontSize: 60, color: 'grey', mb: 2 }}
//           />
//           <Typography variant="h4" style={{ fontWeight: 'bold' }} gutterBottom>
//             Η αγγελία διαγράφηκε επιτυχώς!
//           </Typography>
//           <button
//             className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
//             onClick={handleClosefinalRejectPopup}
//           >
//             Κλείσιμο
//           </button>
//         </Box>
//       </Modal>

//       <Footer />
//     </div>
//   );
// };

// export default E_istoriko_aggeliwn;



// import React, { useState, useEffect } from "react";
// import Navbar_in from "../components/navbar_in";
// import Footer from "../components/footer";
// import BackButton from "../components/back_button";
// import { Modal, Box, Typography, Button } from "@mui/material";
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import { collection, query, where, getDocs } from "firebase/firestore";
// import { FIREBASE_AUTH, FIREBASE_DB } from "../config/firebase"; // Correct Firebase imports

// const E_istoriko_aggeliwn = () => {
//   const [historyItems, setHistoryItems] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [isfinalRejectPopupOpen, setIsfinalRejectPopupOpen] = useState(false);

//   useEffect(() => {
//     const fetchUserAggelies = async () => {
//       const user = FIREBASE_AUTH.currentUser;
//       if (user) {
//         const q = query(collection(FIREBASE_DB, "aggelies"), where("uid", "==", user.uid));
//         const querySnapshot = await getDocs(q);
//         const userAggelies = querySnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setHistoryItems(userAggelies);
//       }
//     };

//     fetchUserAggelies();
//   }, []);

//   const handleDelete = (item) => {
//     setSelectedItem(item);
//     setIsModalOpen(true);
//   };

//   const confirmDelete = () => {
//     setHistoryItems(historyItems.filter((item) => item.id !== selectedItem.id));
//     setIsModalOpen(false);
//     setIsfinalRejectPopupOpen(true);
//   };

//   const handleClosefinalRejectPopup = () => {
//     setIsfinalRejectPopupOpen(false);
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <BackButton />
//       <Navbar_in />
      
//       <main className="flex-grow container mx-auto p-4">
//       <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
//         <h1 className="text-2xl font-bold mb-4 text-center">Ιστορικό Αγγελιών</h1>
//         <table className="w-full border-collapse border border-gray-300 text-center">
//           <thead>
//             <tr>
//               <th className="border border-gray-300 px-4 py-2">Κατάσταση</th>
//               <th className="border border-gray-300 px-4 py-2">Ημερομηνία</th>
//               <th className="border border-gray-300 px-4 py-2">Ώρα</th>
//               <th className="border border-gray-300 px-4 py-2">Ενέργειες</th>
//             </tr>
//           </thead>
//           <tbody>
//             {historyItems.map((item) => (
//               <tr key={item.id}>
//                 <td className="border border-gray-300 px-4 py-2">{item.status}</td>
//                 <td className="border border-gray-300 px-4 py-2">{item.date}</td>
//                 <td className="border border-gray-300 px-4 py-2">{item.time}</td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   <button
//                     className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2"
//                   >
//                     Επεξεργασία
//                   </button>
//                   <button
//                     className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                     onClick={() => handleDelete(item)}
//                   >
//                     Διαγραφή
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         </div>
//       </main>

//       {/* Delete Confirmation Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white rounded-md text-center shadow-lg w-96 p-6">
//             <h2 className="text-lg font-bold text-gray-800">
//               Είστε βέβαιοι ότι θέλετε να διαγράψετε την αγγελία;
//             </h2>
//             <p className="text-gray-600 mt-2">
//               Την οποία επεξεργαστήκατε τελευταία φορά στις {selectedItem?.date} στις {selectedItem?.time}
//             </p>
//             <div className="mt-4 flex justify-center space-x-4">
//               <button
//                 className="bg-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-400"
//                 onClick={() => setIsModalOpen(false)}
//               >
//                 Ακύρωση
//               </button>
//               <button
//                 className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                 onClick={confirmDelete}
//               >
//                 Διαγραφή
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Success Popup Modal */}
//       <Modal open={isfinalRejectPopupOpen} onClose={handleClosefinalRejectPopup}>
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: 400,
//             bgcolor: 'background.paper',
//             borderRadius: 2,
//             boxShadow: 24,
//             p: 4,
//             textAlign: 'center',
//           }}
//         >
//           <CheckCircleIcon
//             sx={{ fontSize: 60, color: 'grey', mb: 2 }}
//           />
//           <Typography variant="h4" style={{ fontWeight: 'bold' }} gutterBottom>
//             Η αγγελία διαγράφηκε επιτυχώς!
//           </Typography>
//           <button
//             className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
//             onClick={handleClosefinalRejectPopup}
//           >
//             Κλείσιμο
//           </button>
//         </Box>
//       </Modal>

//       <Footer />
//     </div>
//   );
// };

// export default E_istoriko_aggeliwn;





import React, { useState, useEffect } from "react";
import Navbar_in from "../components/navbar_in";
import Footer from "../components/footer";
import BackButton from "../components/back_button";
import { Modal, Box, Typography, Button } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { collection, query, where, getDocs, deleteDoc, doc } from "firebase/firestore";
import { FIREBASE_AUTH, FIREBASE_DB } from "../config/firebase"; // Correct Firebase imports

const E_istoriko_aggeliwn = () => {
  const [historyItems, setHistoryItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isfinalRejectPopupOpen, setIsfinalRejectPopupOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  useEffect(() => {
    const fetchUserAggelies = async () => {
      const user = FIREBASE_AUTH.currentUser;
      if (user) {
        const q = query(collection(FIREBASE_DB, "aggelies"), where("uid", "==", user.uid));
        const querySnapshot = await getDocs(q);
        const userAggelies = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setHistoryItems(userAggelies);
      }
    };

    fetchUserAggelies();
  }, []);

  const handleDelete = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const confirmDelete = async () => {
    if (selectedItem) {
      await deleteDoc(doc(FIREBASE_DB, "aggelies", selectedItem.id));
      setHistoryItems(historyItems.filter((item) => item.id !== selectedItem.id));
      setIsModalOpen(false);
      setIsfinalRejectPopupOpen(true);
    }
  };

  const handleClosefinalRejectPopup = () => {
    setIsfinalRejectPopupOpen(false);
  };

  const handleView = (item) => {
    setSelectedItem(item);
    setIsViewModalOpen(true);
  };

  const handleCloseViewModal = () => {
    setIsViewModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <BackButton />
      <Navbar_in />
      
      <main className="flex-grow container mx-auto p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Ιστορικό Αγγελιών</h1>
        <table className="w-full border-collapse border border-gray-300 text-center">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Κατάσταση</th>
              <th className="border border-gray-300 px-4 py-2">Ημερομηνία</th>
              <th className="border border-gray-300 px-4 py-2">Ώρα</th>
              <th className="border border-gray-300 px-4 py-2">Ενέργειες</th>
            </tr>
          </thead>
          <tbody>
            {historyItems.map((item) => (
              <tr key={item.id}>
                <td className="border border-gray-300 px-4 py-2">{item.isTemporary ? "Προσωρινή" : "Οριστική"}</td>
                <td className="border border-gray-300 px-4 py-2">{item.createdAt.toDate().toLocaleDateString()}</td>
                <td className="border border-gray-300 px-4 py-2">{item.createdAt.toDate().toLocaleTimeString()}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.isTemporary ? (
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2"
                      onClick={() => window.location.href = `/edit/${item.id}`} // Navigate to edit page
                    >
                      Επεξεργασία
                    </button>
                  ) : (
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 mr-2"
                      onClick={() => handleView(item)}
                    >
                      Προβολή
                    </button>
                  )}
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => handleDelete(item)}
                  >
                    Διαγραφή
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </main>

      {/* Delete Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-md text-center shadow-lg w-96 p-6">
            <h2 className="text-lg font-bold text-gray-800">
              Είστε βέβαιοι ότι θέλετε να διαγράψετε την αγγελία;
            </h2>
            <p className="text-gray-600 mt-2">
              Την οποία επεξεργαστήκατε τελευταία φορά στις {selectedItem?.createdAt.toDate().toLocaleDateString()} στις {selectedItem?.createdAt.toDate().toLocaleTimeString()}
            </p>
            <div className="mt-4 flex justify-center space-x-4">
              <button
                className="bg-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-400"
                onClick={() => setIsModalOpen(false)}
              >
                Ακύρωση
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                onClick={confirmDelete}
              >
                Διαγραφή
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Advertisement Modal */}
      {isViewModalOpen && (
        <Modal open={isViewModalOpen} onClose={handleCloseViewModal}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              borderRadius: 2,
              boxShadow: 24,
              p: 4,
              textAlign: 'center',
            }}
          >
            <Typography variant="h4" style={{ fontWeight: 'bold' }} gutterBottom>
              Λεπτομέρειες Αγγελίας
            </Typography>
            <Typography>Διαθεσιμότητα: {selectedItem?.availability}</Typography>
            <Typography>Χρόνος Απασχόλησης: {selectedItem?.employment}</Typography>
            <Typography>Τοποθεσία: {selectedItem?.location}</Typography>
            <Typography>Ειδίκευση: {selectedItem?.specialty}</Typography>
            <Typography>Ημέρες: {selectedItem?.days.join(', ')}</Typography>
            <Typography>Ώρες: {selectedItem?.hours.start} - {selectedItem?.hours.end}</Typography>
            <Button
              style={{
                textTransform: 'none',
              }}
              variant="contained"
              color="primary"
              onClick={handleCloseViewModal}
              sx={{ mt: 2 }}
            >
              Κλείσιμο
            </Button>
          </Box>
        </Modal>
      )}

      {/* Success Popup Modal */}
      <Modal open={isfinalRejectPopupOpen} onClose={handleClosefinalRejectPopup}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            textAlign: 'center',
          }}
        >
          <CheckCircleIcon
            sx={{ fontSize: 60, color: 'grey', mb: 2 }}
          />
          <Typography variant="h4" style={{ fontWeight: 'bold' }} gutterBottom>
            Η αγγελία διαγράφηκε επιτυχώς!
          </Typography>
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            onClick={handleClosefinalRejectPopup}
          >
            Κλείσιμο
          </button>
        </Box>
      </Modal>

      <Footer />
    </div>
  );
};

export default E_istoriko_aggeliwn;

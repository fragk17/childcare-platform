import React, { useState } from "react";
import Navbar_in from "../components/navbar_in";
import Footer from "../components/footer";
import BackButton from "../components/back_button";
import { Modal, Box, Typography, Button } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Requests = () => {
  const [activeTab, setActiveTab] = useState("incoming"); // 'incoming' or 'history'
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // 'view' or 'accept'
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isHistoryModalOpen, setHistoryModalOpen] = useState(false); // Separate modal for history
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [isAcceptModalOpen, setIsAcceptModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false); // New state for the info modal
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false); // Checkbox state
  const [isfinalSubmitPopupOpen, setIsfinalSubmitPopupOpen] = useState(false);
  const [isfinalRejectPopupOpen, setIsfinalRejectPopupOpen] = useState(false);

  const [requests, setRequests] = useState([
    {
      date: "11/5/2024",
      time: "9:40",
      duration: "Πλήρης",
      parentName: "Μάνος Μάνου",
    },
    {
      date: "11/5/2024",
      time: "9:45",
      duration: "Μερική",
      parentName: "Γιώργος Γιώργου",
    },
    {
      date: "11/5/2024",
      time: "10:42",
      duration: "Πλήρης",
      parentName: "Νίκος Νίκου",
    },
    {
      date: "11/5/2024",
      time: "13:25",
      duration: "Μερική",
      parentName: "Μαρία Μάρου",
    },
    {
      date: "11/5/2024",
      time: "15:34",
      duration: "Μερική",
      parentName: "Νίκος Νικ",
    },
    {
      date: "11/5/2024",
      time: "17:42",
      duration: "Πλήρης",
      parentName: "Γιάννης Αντετοκούμπο",
    },
    {
      date: "11/5/2024",
      time: "18:55",
      duration: "Πλήρης",
      parentName: "Κώστας Σλούκας",
    },
  ]);

  const [h_requests, setHRequests] = useState([
    {
      date: "11/5/2024",
      time: "9:42",
      duration: "Πλήρης",
      parentName: "Μάνος Μάνου",
    },
    {
      date: "11/5/2024",
      time: "9:45",
      duration: "Μερική",
      parentName: "Γιώργος Γιώργου",
    },
  ]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const openModal = (type, request) => {
    setModalType(type);
    setSelectedRequest(request);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedRequest(null);
    setIsCheckboxChecked(false);
  };

  const openHistoryModal = (request) => {
    setSelectedRequest(request);
    setHistoryModalOpen(true);
  };

  const closeHistoryModal = () => {
    setHistoryModalOpen(false);
    setSelectedRequest(null);
  };

  const handleAcceptClick = () => {
    if (!isCheckboxChecked) {
      setIsInfoModalOpen(true); // Open info modal if checkbox is not checked
    } else {
      setIsAcceptModalOpen(true); // Proceed with acceptance
    }
  };

  const closeInfoModal = () => {
    setIsInfoModalOpen(false);
  };

  const handlefinalSubmitPopup = () => {
    setIsAcceptModalOpen(false); 
    setHRequests([...h_requests, selectedRequest]); // Add the accepted request to h_requests
    removeRequest(selectedRequest);
    closeModal();
    setIsfinalSubmitPopupOpen(true);
  };

  const handleClosefinalPopup = () => {
    setIsfinalSubmitPopupOpen(false);
  };

  const handlefinalRejectPopup = () => {
    setIsConfirmationModalOpen(false);
    removeRequest(selectedRequest);
    closeModal();
    setIsfinalRejectPopupOpen(true);
  };

  const handleClosefinalRejectPopup = () => {
    setIsfinalRejectPopupOpen(false);
  };

  const removeRequest = (requestToRemove) => {
    setRequests(requests.filter(request => request !== requestToRemove));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <BackButton />
      <Navbar_in />
      <div className="min-h-screen p-6 py-20">
        <div className="bg-white shadow rounded-md">
          {/* Tab Selector */}
          <div className="flex border-b border-gray-300">
            <button
              onClick={() => handleTabClick("incoming")}
              className={`flex-1 text-center py-2 border-b-2 ${
                activeTab === "incoming"
                  ? "border-black text-black font-bold"
                  : "border-transparent text-gray-500"
              }`}
            >
              Εισερχόμενες Αιτήσεις
            </button>
            <button
              onClick={() => handleTabClick("history")}
              className={`flex-1 text-center py-2 border-b-2 ${
                activeTab === "history"
                  ? "border-black text-black font-bold"
                  : "border-transparent text-gray-500"
              }`}
            >
              Ιστορικό Αιτήσεων
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-4">
            {activeTab === "incoming" && (
              <div>
                <h1 className="text-xl font-bold text-gray-800 mb-4">Εισερχόμενες Αιτήσεις</h1>
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 p-2 text-left">Ημερομηνία</th>
                      <th className="border border-gray-300 p-2 text-left">Ώρα</th>
                      <th className="border border-gray-300 p-2 text-left">Χρόνος Απασχόλησης</th>
                      <th className="border border-gray-300 p-2 text-left">Όνομα Γονέα</th>
                      <th className="border border-gray-300 p-2 text-center">Προβολή Αίτησης</th>
                    </tr>
                  </thead>
                  <tbody>
                    {requests.map((request, index) => (
                      <tr key={index} className="hover:bg-gray-100">
                        <td className="border border-gray-300 p-2">{request.date}</td>
                        <td className="border border-gray-300 p-2">{request.time}</td>
                        <td className="border border-gray-300 p-2">{request.duration}</td>
                        <td className="border border-gray-300 p-2">{request.parentName}</td>
                        <td className="border border-gray-300 p-2 text-center">
                          <button
                            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                            onClick={() => openModal("view", request)}
                          >
                            Προβολή
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {activeTab === "history" && (
              <div>
                <h1 className="text-xl font-bold text-gray-800 mb-4">Ιστορικό Αιτήσεων</h1>
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 p-2 text-left">Ημερομηνία</th>
                      <th className="border border-gray-300 p-2 text-left">Ώρα</th>
                      <th className="border border-gray-300 p-2 text-left">Χρόνος Απασχόλησης</th>
                      <th className="border border-gray-300 p-2 text-left">Όνομα Γονέα</th>
                      <th className="border border-gray-300 p-2 text-center">Προβολή Αίτησης</th>
                    </tr>
                  </thead>
                  <tbody>
                    {h_requests.map((request, index) => (
                      <tr key={index} className="hover:bg-gray-100">
                        <td className="border border-gray-300 p-2">{request.date}</td>
                        <td className="border border-gray-300 p-2">{request.time}</td>
                        <td className="border border-gray-300 p-2">{request.duration}</td>
                        <td className="border border-gray-300 p-2">{request.parentName}</td>
                        <td className="border border-gray-300 p-2 text-center">
                          <button
                            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                            onClick={() => openHistoryModal(request)}
                          >
                            Προβολή
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-md text-center shadow-lg w-96 p-6">
            <h2 className="text-lg font-bold text-gray-800 ">
              Αίτηση Ενδιαφέροντος από {selectedRequest?.parentName}
            </h2>
            <p className="text-gray-600 mt-2">
              <strong>Χρόνος Απασχόλησης:</strong> {selectedRequest?.duration}
            </p>
            <p className="text-gray-600">
              <strong>Από:</strong> {selectedRequest?.date}
            </p>
            {modalType === "accept" ? (
              <>
                <div className="mt-4">
                  <label className="flex items-center text-gray-600">
                    <input
                      type="checkbox"
                      className="mr-2"
                      onChange={(e) => setIsCheckboxChecked(e.target.checked)}
                    />
                    Αποδέχομαι τους όρους συνεργασίας που ορίζονται από το Ιδιωτικό Συμφωνητικό
                  </label>
                </div>
                <div className="mt-6 flex justify-between">
                  <button
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                    onClick={() => openModal(null, selectedRequest)}
                  >
                    Ακύρωση
                  </button>
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    onClick={handleAcceptClick}
                  >
                    Αποδοχή Αίτησης
                  </button>
                </div>
              </>
            ) : (
              <div className="mt-6 flex justify-between">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => setIsConfirmationModalOpen(true)}
                >
                  Απόρριψη
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => openModal("accept", selectedRequest)}
                >
                  Συνέχεια
                </button>
                <button
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                  onClick={closeModal}
                >
                  Κλείσιμο
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {isAcceptModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-md text-center shadow-lg w-96 p-6">
            <p className="text-gray-800">
              Είστε βέβαιοι οτι θέλετε να αποδεχτείτε αυτή την αίτηση ;
            </p>
            <div className="mt-6 flex justify-center">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 mr-4"
                onClick={() => setIsAcceptModalOpen(false)}
              >
                Ακύρωση
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={() => {
                  console.log("Απόδοχή Αίτησης");
                  handlefinalSubmitPopup();
                }}
              >
                Αποδοχή
              </button>
            </div>
          </div>
        </div>
      )}

      {isConfirmationModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-md text-center shadow-lg w-96 p-6">
            <p className="text-gray-800">
              Είστε βέβαιοι οτι θέλετε να απορρίψετε αυτή την αίτηση ;
            </p>
            <div className="mt-6 flex justify-center">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mr-4"
                onClick={() => {
                  console.log("Απόρριψη Αίτησης");
                  handlefinalRejectPopup();
                }}
              >
                Αππόριψη
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => setIsConfirmationModalOpen(false)}
              >
                Ακύρωση
              </button>
            </div>
          </div>
        </div>
      )}

      {/* History Requests Modal */}
      {isHistoryModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-md text-center shadow-lg w-96 p-6">
            <h2 className="text-lg font-bold text-gray-800">
              Αίτηση Ενδιαφέροντος από {selectedRequest?.parentName}
            </h2>
            <p className="text-gray-600 mt-2">
              <strong>Χρόνος Απασχόλησης:</strong> {selectedRequest?.duration}
            </p>
            <p className="text-gray-600">
              <strong>Από:</strong> {selectedRequest?.date}
            </p>
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              onClick={closeHistoryModal}
            >
              Κλείσιμο
            </button>
          </div>
        </div>
      )}

      {/* Info Modal */}
      {isInfoModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-md text-center shadow-lg w-96 p-6">
            <div className="flex items-center justify-center mb-4">
              <span className="bg-gray-700 text-white rounded-full w-8 h-8 flex items-center justify-center">
                i
              </span>
            </div>
            <p className="text-gray-800">
              Πρέπει να αποδεχθείτε τους όρους αν θέλετε να συνεχίσετε!
            </p>
            <div className="mt-6 flex justify-center">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                onClick={closeInfoModal}
              >
                Κλείσιμο
              </button>
            </div>
          </div>
        </div>
      )}

      <Modal open={isfinalSubmitPopupOpen} onClose={handleClosefinalPopup}>
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
            Αποδεχθήκατε επιτυχώς την αίτηση!
          </Typography>
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            onClick={handleClosefinalPopup}
          >
            Κλείσιμο
          </button>
        </Box>
      </Modal>

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
            Η αίτηση απορρίφθηκε επιτυχώς!
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

export default Requests;



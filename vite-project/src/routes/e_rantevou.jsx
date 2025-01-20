import React, { useState } from 'react';
import Navbar_in from "../components/navbar_in";
import Footer from "../components/footer";
import BackButton from "../components/back_button";
import { Modal, Box, Typography, Button } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const E_rantevou = () => {
  const [activeTab, setActiveTab] = useState("active");
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [isAcceptModalOpen, setIsAcceptModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [isFinalSubmitPopupOpen, setIsFinalSubmitPopupOpen] = useState(false);
  const [isFinalRejectPopupOpen, setIsFinalRejectPopupOpen] = useState(false);

  const [activeAppointments, setActiveAppointments] = useState([
    {
      id: 1,
      date: "11/5/2024",
      time: "9:40",
      parentName: "Μάνος Μάνου",
      type: "δια ζώσης",
      address: "123 Main St"
    },
    {
      id: 2,
      date: "11/5/2024",
      time: "9:45",
      parentName: "Γιώργος Γιώργου",
      type: "διαδυκτικά",
      address: "Online"
    },
  ]);

  const [historyAppointments, setHistoryAppointments] = useState([
    {
      id: 101,
      date: "10/5/2024",
      time: "10:00",
      parentName: "Νίκος Νίκου",
      type: "δια ζώσης",
      address: "456 Elm St"
    },
  ]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const openModal = (type, appointment) => {
    setModalType(type);
    setSelectedAppointment(appointment);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedAppointment(null);
  };

  const handleAcceptClick = () => {
    setIsAcceptModalOpen(true);
  };


const handleFinalSubmitPopup = () => {
    setIsAcceptModalOpen(false);
    // Remove the accepted appointment from active appointments
    setActiveAppointments(activeAppointments.filter(appt => appt.id !== selectedAppointment.id));
    // Add the accepted appointment to history appointments
    setHistoryAppointments([...historyAppointments, selectedAppointment]);
    closeModal();
    setIsFinalSubmitPopupOpen(true);
  };

  const handleFinalRejectPopup = () => {
    setIsConfirmationModalOpen(false);
    setActiveAppointments(activeAppointments.filter(appt => appt.id !== selectedAppointment.id));
    closeModal();
    setIsFinalRejectPopupOpen(true);
  };

  const handleCloseFinalPopup = () => {
    setIsFinalSubmitPopupOpen(false);
  };

  const handleCloseFinalRejectPopup = () => {
    setIsFinalRejectPopupOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <BackButton />
      <Navbar_in />

      <div className="flex-grow p-6 py-20">
        <div className="bg-white shadow rounded-md">
          <div className="flex border-b border-gray-300">
            <button
              onClick={() => handleTabClick("active")}
              className={`flex-1 text-center py-2 border-b-2 ${
                activeTab === "active"
                  ? "border-black text-black font-bold"
                  : "border-transparent text-gray-500"
              }`}
            >
              Ενεργά Ραντεβού
            </button>
            <button
              onClick={() => handleTabClick("history")}
              className={`flex-1 text-center py-2 border-b-2 ${
                activeTab === "history"
                  ? "border-black text-black font-bold"
                  : "border-transparent text-gray-500"
              }`}
            >
              Ιστορικό Ραντεβού
            </button>
          </div>

          <div className="p-4">
            {activeTab === "active" && (
              <div>
                <h1 className="text-xl font-bold text-gray-800 mb-4">Ενεργά Ραντεβού</h1>
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 p-2 text-left">Ημερομηνία</th>
                      <th className="border border-gray-300 p-2 text-left">Ώρα</th>
                      <th className="border border-gray-300 p-2 text-left">Όνομα Γονέα</th>
                      <th className="border border-gray-300 p-2 text-left">Τύπος</th>
                      <th className="border border-gray-300 p-2 text-center">Δράση</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeAppointments.map((appointment) => (
                      <tr key={appointment.id} className="hover:bg-gray-100">
                        <td className="border border-gray-300 p-2">{appointment.date}</td>
                        <td className="border border-gray-300 p-2">{appointment.time}</td>
                        <td className="border border-gray-300 p-2">{appointment.parentName}</td>
                        <td className="border border-gray-300 p-2">{appointment.type}</td>
                        <td className="border border-gray-300 p-2 text-center">
                          <button
                            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2"
                            onClick={() => openModal("view", appointment)}
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
                <h1 className="text-xl font-bold text-gray-800 mb-4">Ιστορικό Ραντεβού</h1>
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 p-2 text-left">Ημερομηνία</th>
                      <th className="border border-gray-300 p-2 text-left">Ώρα</th>
                      <th className="border border-gray-300 p-2 text-left">Όνομα Γονέα</th>
                      <th className="border border-gray-300 p-2 text-left">Τύπος</th>
                      <th className="border border-gray-300 p-2 text-center">Δράση</th>
                    </tr>
                  </thead>
                  <tbody>
                    {historyAppointments.map((appointment) => (
                      <tr key={appointment.id} className="hover:bg-gray-100">
                        <td className="border border-gray-300 p-2">{appointment.date}</td>
                        <td className="border border-gray-300 p-2">{appointment.time}</td>
                        <td className="border border-gray-300 p-2">{appointment.parentName}</td>
                        <td className="border border-gray-300 p-2">{appointment.type}</td>
                        <td className="border border-gray-300 p-2 text-center">
                          <button
                            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                            onClick={() => openModal("view", appointment)}
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

      {/* Modal for Viewing and Accepting */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-md text-center shadow-lg w-96 p-6">
            <h2 className="text-lg font-bold text-gray-800">
              Αίτηση Ενδιαφέροντος από {selectedAppointment?.parentName}
            </h2>
            <p className="text-gray-600 mt-2">
              <strong>Ημερομηνία:</strong> {selectedAppointment?.date}
            </p>
            <p className="text-gray-600">
              <strong>Ώρα:</strong> {selectedAppointment?.time}
            </p>
            <p className="text-gray-600">
              <strong>Διεύθυνση:</strong> {selectedAppointment?.address}
            </p>
            {activeTab === "active" && modalType === "accept" ? (
              <div className="mt-6 flex justify-between">
                <button
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                  onClick={() => openModal(null, selectedAppointment)}
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
            ) : activeTab === "active" ? (
              <div className="mt-6 flex justify-between">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => setIsConfirmationModalOpen(true)}
                >
                  Απόρριψη
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => openModal("accept", selectedAppointment)}
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
            ) : (
              // For "Ιστορικό Ραντεβού" tab, only show the "Κλείσιμο" button
              <div className="mt-6 flex justify-center">
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


      {/* Accept Confirmation Modal */}
      {isAcceptModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-md text-center shadow-lg w-96 p-6">
            <p className="text-gray-800">
              Είστε βέβαιοι ότι θέλετε να αποδεχτείτε αυτή την αίτηση;
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
                onClick={handleFinalSubmitPopup}
              >
                Αποδοχή
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reject Confirmation Modal */}
      {isConfirmationModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-md text-center shadow-lg w-96 p-6">
            <p className="text-gray-800">
              Είστε βέβαιοι ότι θέλετε να απορρίψετε αυτή την αίτηση;
            </p>
            <div className="mt-6 flex justify-center">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mr-4"
                onClick={handleFinalRejectPopup}
              >
                Απόρριψη
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

      <Modal open={isFinalSubmitPopupOpen} onClose={handleCloseFinalPopup}>
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
            sx={{ fontSize: 60, color: 'green', mb: 2 }}
          />
          <Typography variant="h4" sx={{ fontWeight: 'bold' }} gutterBottom>
            Αποδεχθήκατε επιτυχώς την αίτηση!
          </Typography>
          <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                onClick={handleCloseFinalPopup}
              >
                Κλείσιμο
              </button>
        </Box>
      </Modal>

      <Modal open={isFinalRejectPopupOpen} onClose={handleCloseFinalRejectPopup}>
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
            sx={{ fontSize: 60, color: 'red', mb: 2 }}
          />
          <Typography variant="h4" sx={{ fontWeight: 'bold' }} gutterBottom>
            Η αίτηση απορρίφθηκε επιτυχώς!
          </Typography>
          <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                onClick={handleCloseFinalRejectPopup}
              >
                Κλείσιμο
              </button>
        </Box>
      </Modal>

      <Footer />
    </div>
  );
};

export default E_rantevou;

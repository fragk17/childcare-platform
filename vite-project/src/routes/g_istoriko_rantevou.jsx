import React, { useState } from 'react';
import Navbar_in from '../components/navbar_in';
import Footer from '../components/footer';
import BackButton from "../components/back_button";
import { Modal, Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const G_istoriko_rantevou = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, status: 'Προς Επιβεβαίωση', date: '1/7/2024', time: '9:42', location: 'Τμήμα Πληροφορικής και Τηλεπικοινωνιών, Ζωγράφου 161 22' },
    { id: 2, status: 'Προς Επιβεβαίωση', date: '22/5/2023', time: '9:45', location: 'Location 2' },
    { id: 3, status: 'Απορρίφθηκε', date: '20/2/2023', time: '10:42', location: 'Location 3' },
    { id: 4, status: 'Εγκρίθηκε', date: '11/7/2022', time: '13:25', location: 'Location 4' },
    { id: 5, status: 'Προεπεξεργαστημένο', date: '13/5/2022', time: '10:41', location: 'Location 5' },
  ]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isFinalRejectPopupOpen, setIsFinalRejectPopupOpen] = useState(false);

  const handleDelete = (appointment) => {
    setSelectedItem(appointment);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    setAppointments((prevAppointments) =>
      prevAppointments.filter((appt) => appt.id !== selectedItem.id)
    );
    setIsDeleteModalOpen(false);
    setSelectedItem(null);
    setIsFinalRejectPopupOpen(true);
  };

  const handleView = (appointment) => {
    setSelectedItem(appointment);
    setIsViewModalOpen(true);
  };

  const closeModal = () => {
    setIsDeleteModalOpen(false);
    setIsViewModalOpen(false);
    setSelectedItem(null);
  };

  const handleCloseFinalRejectPopup = () => {
    setIsFinalRejectPopupOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <BackButton />
      <Navbar_in />

      <div className="flex-grow p-4 py-20">
        <div className="bg-white shadow-md rounded-md p-6">
          <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">Ιστορικό Ραντεβού</h1>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 border border-gray-300">Κατάσταση</th>
                  <th className="px-4 py-2 border border-gray-300">Ημερομηνία</th>
                  <th className="px-4 py-2 border border-gray-300">Ώρα</th>
                  <th className="px-4 py-2 border border-gray-300">Ενέργειες</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment.id} className="text-center">
                    <td className="px-4 py-2 border border-gray-300">{appointment.status}</td>
                    <td className="px-4 py-2 border border-gray-300">{appointment.date}</td>
                    <td className="px-4 py-2 border border-gray-300">{appointment.time}</td>
                    <td className="px-4 py-2 border border-gray-300">
                      <button
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2"
                        onClick={() => handleView(appointment)}
                      >
                        Προβολή
                      </button>
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        onClick={() => handleDelete(appointment)}
                      >
                        Διαγραφή
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-md text-center shadow-lg w-96 p-6">
            <h2 className="text-lg font-bold text-gray-800">
              Είστε βέβαιοι ότι θέλετε να διαγράψετε το ραντεβού;
            </h2>
            <p className="text-gray-600 mt-2">
              Την ημερομηνία {selectedItem?.date} στις {selectedItem?.time}.
            </p>
            <div className="mt-4 flex justify-center space-x-4">
              <button
                className="bg-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-400"
                onClick={closeModal}
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

      {/* View Location Modal */}
      <Modal open={isViewModalOpen} onClose={closeModal}>
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
          <Typography variant="h6" gutterBottom>
            Η τοποθεσία/URL που θα γίνει το ραντεβού είναι η εξής:
          </Typography>
          <Typography variant="body1" className="text-gray-700 mb-4">
            {selectedItem?.location}
          </Typography>
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            onClick={closeModal}
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
            Το ραντεβού διαγράφηκε επιτυχώς!
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

export default G_istoriko_rantevou;
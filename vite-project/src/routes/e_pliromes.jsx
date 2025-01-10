import React, { useState } from "react";
import Navbar_in from "../components/navbar_in";
import Footer from "../components/footer";
import BackButton from "../components/back_button";
import { Modal, Box, Typography, Button ,Stack } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import qr from "../assets/qr.jpg"

const E_pliromes = () => {
  const [year, setYear] = useState(2024);
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [isSubmitPopupOpen, setIsSubmitPopupOpen] = useState(false);
  const [isfinalSubmitPopupOpen, setIsfinalSubmitPopupOpen] = useState(false);


  const months = [
    { name: "Ιανουάριος", status: "Επιβεβαιώθηκε" },
    { name: "Φεβρουάριος", status: "Επιβεβαιώθηκε" },
    { name: "Μάρτιος", status: "Επιβεβαιώθηκε" },
    { name: "Απρίλιος", status: "Επιβεβαιώθηκε" },
    { name: "Μάιος", status: "Επιβεβαιώθηκε" },
    { name: "Ιούνιος", status: "Επιβεβαιώθηκε" },
    { name: "Ιούλιος", status: "Επιβεβαιώθηκε" },
    { name: "Αύγουστος", status: "Αναμονή Επιβεβαίωσης" },
    { name: "Σεπτέμβριος", status: "" },
    { name: "Οκτώβριος", status: "" },
    { name: "Νοέμβριος", status: "" },
    { name: "Δεκέμβριος", status: "" },
  ];

  // Handle year selection
  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  // Open QR Modal
  const handleViewQR = (month) => {
    setSelectedMonth(month);
    setIsQRModalOpen(true);
  };

  // Close QR Modal
  const handleCloseQRModal = () => {
    setIsQRModalOpen(false);
    setSelectedMonth(null);
  };

  const handleSubmit = () => {
    setIsSubmitPopupOpen(true);
  };

  const handleCloseSubmitPopup = () => {
    setIsSubmitPopupOpen(false);
  };

  const handlefinalSubmitPopup = () => {
    setIsSubmitPopupOpen(false);
    setIsfinalSubmitPopupOpen(true);
  };

  const handleClosefinalPopup = () => {
    setIsfinalSubmitPopupOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
        <BackButton />
        <Navbar_in />

      <main className="flex-grow p-4">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-xl font-bold text-center mb-4">Πληρωμές</h1>

          {/* Year Dropdown */}
          <div className="text-center mb-4">
            <select
              className="border border-gray-300 rounded px-2 py-1"
              value={year}
              onChange={handleYearChange}
            >
              <option value={2023}>2023</option>
              <option value={2024}>2024</option>
            </select>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-700 text-white">
                  <th className="border border-gray-300 px-4 py-2">Κατάσταση</th>
                  <th className="border border-gray-300 px-4 py-2">Μήνας</th>
                  <th className="border border-gray-300 px-4 py-2">Προβολή QR</th>
                  <th className="border border-gray-300 px-4 py-2">Επιβεβαίωση</th>
                </tr>
              </thead>
              <tbody>
                {months.map((month, index) => (
                  <tr key={index} className="text-center">
                    {/* Status */}
                    <td className="border border-gray-300 px-4 py-2">
                      {month.status || "Σε Αναμονή"}
                    </td>

                    {/* Month */}
                    <td className="border border-gray-300 px-4 py-2">{month.name}</td>

                    {/* Conditionally render "Προβολή QR" button */}
                    {month.status !== "" ? (
                      <>
                        {/* QR Code Button */}
                        <td className="border border-gray-300 px-4 py-2">
                          <button
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            onClick={() => handleViewQR(month.name)}
                          >
                            Προβολή
                          </button>
                        </td>

                        {/* Confirm Button */}
                        <td className="border border-gray-300 px-4 py-2">
                          <button
                            className={`${
                              month.status === "Αναμονή Επιβεβαίωσης"
                                ? "bg-green-500 hover:bg-green-600"
                                : "bg-gray-500 cursor-not-allowed"
                            } text-white px-4 py-2 rounded`}
                            disabled={month.status !== "Αναμονή Επιβεβαίωσης"}
                            onClick={handleSubmit}
                          >
                            Επιβεβαίωση
                          </button>
                        </td>
                      </>
                    ) : (
                      <>
                        {/* Empty cells if status is blank */}
                        <td className="border border-gray-300 px-4 py-2"></td>
                        <td className="border border-gray-300 px-4 py-2"></td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* QR Code Modal */}
      <Modal open={isQRModalOpen} onClose={handleCloseQRModal}>
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
          <Typography variant="h6" gutterBottom>
            QR Code for {selectedMonth}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              my: 2,
            }}
          >
            <img alt="qr" src={qr} style={{ width: "200px", height: "200px" }}/>
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCloseQRModal}
            style={{ textTransform: "none" }}
          >
            Κλείσιμο
          </Button>
        </Box>
      </Modal>


      <Modal open={isSubmitPopupOpen} onClose={handleCloseSubmitPopup}>
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
                Είστε βέβαιοι ότι λάβατε το voucher πληρωμής;
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleCloseSubmitPopup}
                style={{ textTransform: 'none' }}
              >
                Ακύρωση
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    handlefinalSubmitPopup();
                  console.log('Form Submitted!');
                }}
                style={{ textTransform: 'none' }}
              >
                Επιβεβαίωση
              </Button>
            </Stack>
          </Box>
        </Modal>


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
                Ο γονέας θα ενημερωθεί ότι λάβατε το voucher πληρωμής επιτυχώς!
            </Typography>
            <Button
              style={{
                textTransform: 'none',
              }}
              variant="contained"
              color="primary"
              onClick={handleClosefinalPopup}
              sx={{ mt: 2 }}
            >
              Κλείσιμο
            </Button>
          </Box>
        </Modal>

      <Footer />
    </div>
  );
};

export default E_pliromes;
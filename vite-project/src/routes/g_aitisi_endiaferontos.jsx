// import React, { useState } from 'react';
// import Navbar_in from '../components/navbar_in';
// import Footer from '../components/footer';
// import BackButton from "../components/back_button";
// import {
//   Container,
//   Typography,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   FormControl,
//   FormLabel,
//   TextField,
//   Button,
//   Box,
//   Modal,
//   Stack,
// } from '@mui/material';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import Checkbox from '@mui/material/Checkbox';


// const G_Aitisi_Endiaferontos = () => {
//   const [employment, setEmployment] = useState('Πλήρης');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [termsAccepted, setTermsAccepted] = useState(false);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [isTemporarySavePopupOpen, setIsTemporarySavePopupOpen] = useState(false);
//   const [isSubmitConfirmationPopupOpen, setIsSubmitConfirmationPopupOpen] = useState(false);
//   const [isFinalSubmitPopupOpen, setIsFinalSubmitPopupOpen] = useState(false);
//   const [isInfoModalOpen, setIsInfoModalOpen] = useState(false); // New state for info modal

//   const handleTemporarySave = () => {
//     setIsTemporarySavePopupOpen(true);
//   };

//   const handleSubmitConfirmation = () => {
//     if (!termsAccepted) {
//       setIsInfoModalOpen(true); // Show the info modal
//     } else {
//       setIsSubmitConfirmationPopupOpen(true);
//     }
//   };

//   const handleFinalSubmit = () => {
//     setIsSubmitConfirmationPopupOpen(false);
//     setIsFinalSubmitPopupOpen(true);
//   };

//   const closeTemporarySavePopup = () => setIsTemporarySavePopupOpen(false);
//   const closeSubmitConfirmationPopup = () => setIsSubmitConfirmationPopupOpen(false);
//   const closeFinalSubmitPopup = () => setIsFinalSubmitPopupOpen(false);
//   const closeInfoModal = () => setIsInfoModalOpen(false); // Close the info modal

//   return (
//     <div>
//       <BackButton />
//       <Navbar_in />
//       <div className="px-10 py-10">
//         <Container
//           maxWidth="sm"
//           sx={{ py: 6, backgroundColor: 'white', boxShadow: 3, borderRadius: 2 }}
//         >
//           <Typography variant="h4" align="center" style={{ fontWeight: 'bold' }} gutterBottom>
//             Αίτηση Ενδιαφέροντος
//           </Typography>

//           <Box sx={{ mt: 4 }}>
//             <FormLabel>Όνομα Επαγγελματία</FormLabel>
//             <TextField
//               fullWidth
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               placeholder="Εισαγωγή Κειμένου"
//               sx={{ mt: 1 }}
//             />
//           </Box>

//           <Box sx={{ mt: 4 }}>
//             <FormLabel>Επίθετο Επαγγελματία</FormLabel>
//             <TextField
//               fullWidth
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//               placeholder="Εισαγωγή Κειμένου"
//               sx={{ mt: 1 }}
//             />
//           </Box>

//           <FormControl component="fieldset" sx={{ mt: 4 }}>
//             <FormLabel component="legend">Χρόνος Απασχόλησης</FormLabel>
//             <RadioGroup
//               row
//               value={employment}
//               onChange={(e) => setEmployment(e.target.value)}
//             >
//               <FormControlLabel value="Πλήρης" control={<Radio />} label="Πλήρης" />
//               <FormControlLabel value="Μερική" control={<Radio />} label="Μερική" />
//             </RadioGroup>
//           </FormControl>

//           <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
//             <Box flex={1}>
//               <FormLabel>Ημερομηνία Έναρξης</FormLabel>
//               <TextField
//                 type="date"
//                 fullWidth
//                 value={startDate}
//                 onChange={(e) => setStartDate(e.target.value)}
//                 sx={{ mt: 1 }}
//               />
//             </Box>
//             <Box flex={1}>
//               <FormLabel>Ημερομηνία Λήξης</FormLabel>
//               <TextField
//                 type="date"
//                 fullWidth
//                 value={endDate}
//                 onChange={(e) => setEndDate(e.target.value)}
//                 sx={{ mt: 1 }}
//               />
//             </Box>
//           </Box>

//           <Box sx={{ mt: 4 }}>
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={termsAccepted}
//                   onChange={(e) => setTermsAccepted(e.target.checked)}
//                 />
//               }
//               label="Αποδέχομαι τους όρους συνεργασίας που ορίζονται από το Ιδιωτικό Συμφωνητικό"
//             />
//           </Box>

//           <Box display="flex" justifyContent="space-between" mt={6}>
//             <Button
//               variant="contained"
//               color="secondary"
//               onClick={handleTemporarySave}
//               style={{ textTransform: 'none' }}
//             >
//               Προσωρινή Αποθήκευση
//             </Button>
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={handleSubmitConfirmation}
//               style={{ textTransform: 'none' }}
//             >
//               Υποβολή
//             </Button>
//           </Box>
//         </Container>
//       </div>

//       {/* Info Modal */}
//       {isInfoModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white rounded-md text-center shadow-lg w-96 p-6">
//             <div className="flex items-center justify-center mb-4">
//               <span className="bg-gray-700 text-white rounded-full w-8 h-8 flex items-center justify-center">
//                 i
//               </span>
//             </div>
//             <p className="text-gray-800">
//               Παρακαλώ αποδεχθείτε τους όρους συνεργασίας πριν την υποβολή.
//             </p>
//             <div className="mt-6 flex justify-center">
//               <button
//                 className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
//                 onClick={closeInfoModal}
//               >
//                 Κλείσιμο
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Temporary Save Popup Modal */}
//        <Modal open={isTemporarySavePopupOpen} onClose={closeTemporarySavePopup}>
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
//           <CheckCircleIcon sx={{ fontSize: 60, color: 'grey', mb: 2 }} />
//           <Typography variant="h4" style={{ fontWeight: 'bold' }} gutterBottom>
//             Η αίτηση αποθηκεύτηκε προσωρινά!
//           </Typography>
//           <Button variant="contained" color="primary" onClick={closeTemporarySavePopup} sx={{ mt: 2 }}>
//             Κλείσιμο
//           </Button>
//         </Box>
//       </Modal>

//       {/* Submit Confirmation Popup */}
//       <Modal open={isSubmitConfirmationPopupOpen} onClose={closeSubmitConfirmationPopup}>
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
//           <Typography variant="h4" style={{ fontWeight: 'bold' }} gutterBottom>
//             Είστε βέβαιοι ότι θέλετε να υποβάλετε;
//           </Typography>
//           <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
//             <Button variant="contained" color="secondary" onClick={closeSubmitConfirmationPopup}>
//               Ακύρωση
//             </Button>
//             <Button variant="contained" color="primary" onClick={handleFinalSubmit}>
//               Οριστική Υποβολή
//             </Button>
//           </Stack>
//         </Box>
//       </Modal>

//       {/* Final Submit Popup */}
//       <Modal open={isFinalSubmitPopupOpen} onClose={closeFinalSubmitPopup}>
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
//           <CheckCircleIcon sx={{ fontSize: 60, color: 'grey', mb: 2 }} />
//           <Typography variant="h4" style={{ fontWeight: 'bold' }} gutterBottom>
//             Η αίτηση σας υποβλήθηκε επιτυχώς!
//           </Typography>
//           <Button variant="contained" color="primary" onClick={closeFinalSubmitPopup} sx={{ mt: 2 }}>
//             Κλείσιμο
//           </Button>
//         </Box>
//       </Modal>

//       <Footer />
//     </div>
//   );
// };

// export default G_Aitisi_Endiaferontos;




import React, { useState } from 'react';
import Navbar_in from '../components/navbar_in';
import Footer from '../components/footer';
import BackButton from "../components/back_button";
import {
  Container,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  TextField,
  Button,
  Box,
  Modal,
  Stack,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Checkbox from '@mui/material/Checkbox';
import { addDoc, collection } from "firebase/firestore";
import { FIREBASE_AUTH, FIREBASE_DB } from "../config/firebase"; // Correct Firebase imports

const G_Aitisi_Endiaferontos = () => {
  const [employment, setEmployment] = useState('Πλήρης');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isTemporarySavePopupOpen, setIsTemporarySavePopupOpen] = useState(false);
  const [isSubmitConfirmationPopupOpen, setIsSubmitConfirmationPopupOpen] = useState(false);
  const [isFinalSubmitPopupOpen, setIsFinalSubmitPopupOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  const saveAitisi = async (isTemporary) => {
    const user = FIREBASE_AUTH.currentUser;
    if (user) {
      try {
        await addDoc(collection(FIREBASE_DB, "aitiseis"), {
          uid: user.uid,
          employment,
          startDate,
          endDate,
          termsAccepted,
          firstName,
          lastName,
          isTemporary,
          createdAt: new Date(),
        });
        if (isTemporary) {
          setIsTemporarySavePopupOpen(true);
        } else {
          setIsFinalSubmitPopupOpen(true);
        }
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    } else {
      console.log("No user is signed in.");
    }
  };

  const handleTemporarySave = () => {
    saveAitisi(true);
  };

  const handleSubmitConfirmation = () => {
    if (!termsAccepted) {
      setIsInfoModalOpen(true);
    } else {
      setIsSubmitConfirmationPopupOpen(true);
    }
  };

  const handleFinalSubmit = () => {
    saveAitisi(false);
    setIsSubmitConfirmationPopupOpen(false);
  };

  const closeTemporarySavePopup = () => setIsTemporarySavePopupOpen(false);
  const closeSubmitConfirmationPopup = () => setIsSubmitConfirmationPopupOpen(false);
  const closeFinalSubmitPopup = () => setIsFinalSubmitPopupOpen(false);
  const closeInfoModal = () => setIsInfoModalOpen(false);

  return (
    <div>
      <BackButton />
      <Navbar_in />
      <div className="px-10 py-10">
        <Container
          maxWidth="sm"
          sx={{ py: 6, backgroundColor: 'white', boxShadow: 3, borderRadius: 2 }}
        >
          <Typography variant="h4" align="center" style={{ fontWeight: 'bold' }} gutterBottom>
            Αίτηση Ενδιαφέροντος
          </Typography>

          <Box sx={{ mt: 4 }}>
            <FormLabel>Όνομα Επαγγελματία</FormLabel>
            <TextField
              fullWidth
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Εισαγωγή Κειμένου"
              sx={{ mt: 1 }}
            />
          </Box>

          <Box sx={{ mt: 4 }}>
            <FormLabel>Επίθετο Επαγγελματία</FormLabel>
            <TextField
              fullWidth
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Εισαγωγή Κειμένου"
              sx={{ mt: 1 }}
            />
          </Box>

          <FormControl component="fieldset" sx={{ mt: 4 }}>
            <FormLabel component="legend">Χρόνος Απασχόλησης</FormLabel>
            <RadioGroup
              row
              value={employment}
              onChange={(e) => setEmployment(e.target.value)}
            >
              <FormControlLabel value="Πλήρης" control={<Radio />} label="Πλήρης" />
              <FormControlLabel value="Μερική" control={<Radio />} label="Μερική" />
            </RadioGroup>
          </FormControl>

          <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
            <Box flex={1}>
              <FormLabel>Ημερομηνία Έναρξης</FormLabel>
              <TextField
                type="date"
                fullWidth
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                sx={{ mt: 1 }}
              />
            </Box>
            <Box flex={1}>
              <FormLabel>Ημερομηνία Λήξης</FormLabel>
              <TextField
                type="date"
                fullWidth
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                sx={{ mt: 1 }}
              />
            </Box>
          </Box>

          <Box sx={{ mt: 4 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                />
              }
              label="Αποδέχομαι τους όρους συνεργασίας που ορίζονται από το Ιδιωτικό Συμφωνητικό"
            />
          </Box>

          <Box display="flex" justifyContent="space-between" mt={6}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleTemporarySave}
              style={{ textTransform: 'none' }}
            >
              Προσωρινή Αποθήκευση
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmitConfirmation}
              style={{ textTransform: 'none' }}
            >
              Υποβολή
            </Button>
          </Box>
        </Container>
      </div>

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
              Παρακαλώ αποδεχθείτε τους όρους συνεργασίας πριν την υποβολή.
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

      {/* Temporary Save Popup Modal */}
      <Modal open={isTemporarySavePopupOpen} onClose={closeTemporarySavePopup}>
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
          <CheckCircleIcon sx={{ fontSize: 60, color: 'grey', mb: 2 }} />
          <Typography variant="h4" style={{ fontWeight: 'bold' }} gutterBottom>
            Η αίτηση αποθηκεύτηκε προσωρινά!
          </Typography>
          <Button variant="contained" color="primary" onClick={closeTemporarySavePopup} sx={{ mt: 2 }}>
            Κλείσιμο
          </Button>
        </Box>
      </Modal>

      {/* Submit Confirmation Popup */}
      <Modal open={isSubmitConfirmationPopupOpen} onClose={closeSubmitConfirmationPopup}>
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
            Είστε βέβαιοι ότι θέλετε να υποβάλετε;
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
            <Button variant="contained" color="secondary" onClick={closeSubmitConfirmationPopup}>
              Ακύρωση
            </Button>
            <Button variant="contained" color="primary" onClick={handleFinalSubmit}>
              Οριστική Υποβολή
            </Button>
          </Stack>
        </Box>
      </Modal>

      {/* Final Submit Popup */}
      <Modal open={isFinalSubmitPopupOpen} onClose={closeFinalSubmitPopup}>
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
          <CheckCircleIcon sx={{ fontSize: 60, color: 'grey', mb: 2 }} />
          <Typography variant="h4" style={{ fontWeight: 'bold' }} gutterBottom>
            Η αίτηση σας υποβλήθηκε επιτυχώς!
          </Typography>
          <Button variant="contained" color="primary" onClick={closeFinalSubmitPopup} sx={{ mt: 2 }}>
            Κλείσιμο
          </Button>
        </Box>
      </Modal>

      <Footer />
    </div>
  );
};

export default G_Aitisi_Endiaferontos;

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
  Select,
  MenuItem,
  Checkbox,
  TextField,
  Button,
  Box,
  Modal,
  Stack,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50',
    },
    secondary: {
      main: '#FF5722',
    },
  },
  typography: {
    button: {
      fontSize: '1.2rem',
    },
  },
});

const E_Dimiourgia_aggelias = () => {
  const [availability, setAvailability] = useState('Ναι');
  const [employment, setEmployment] = useState('Πλήρης');
  const [location, setLocation] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [days, setDays] = useState([]);
  const [hours, setHours] = useState({ start: '09:00', end: '20:00' });
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSubmitPopupOpen, setIsSubmitPopupOpen] = useState(false);
  const [isfinalSubmitPopupOpen, setIsfinalSubmitPopupOpen] = useState(false);

  const handleDayToggle = (day) => {
    if (days.includes(day)) {
      setDays(days.filter((d) => d !== day));
    } else {
      setDays([...days, day]);
    }
  };

  const handleTemporarySave = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
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
    <ThemeProvider theme={theme}>
      <div>
        <BackButton />
        <Navbar_in />
        <div className="px-10 py-10">
          <Container
            maxWidth="md"
            sx={{ py: 6, backgroundColor: 'white', boxShadow: 3, borderRadius: 2 }}
          >
            <Typography variant="h4" align="center" style={{ fontWeight: 'bold' }} gutterBottom>
              Δημιουργία Αγγελίας
            </Typography>

            <Stack className='justify-center' direction="row" spacing={20} pt={5} >
                <FormControl component="fieldset" sx={{ mt: 4 }}>
                <FormLabel component="legend">Διαθεσιμότητα</FormLabel>
                <RadioGroup
                    row
                    value={availability}
                    onChange={(e) => setAvailability(e.target.value)}
                >
                    <FormControlLabel value="Ναι" control={<Radio />} label="Ναι" />
                    <FormControlLabel value="Όχι" control={<Radio />} label="Όχι" />
                </RadioGroup>
                </FormControl>

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
            </Stack>


            <Box sx={{ mt: 4 }}>
              <FormLabel>Τοποθεσία Εργασίας</FormLabel>
              <Select
                fullWidth
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <MenuItem value="">Αναζήτηση</MenuItem>
                <MenuItem value="Athens">Αθήνα</MenuItem>
                <MenuItem value="Thessaloniki">Θεσσαλονίκη</MenuItem>
              </Select>
            </Box>

            <Box sx={{ mt: 4 }}>
              <FormLabel>Ειδίκευση</FormLabel>
              <Select
                fullWidth
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
              >
                <MenuItem value="">Επιλογή</MenuItem>
                <MenuItem value="teacher">Δάσκαλος</MenuItem>
                <MenuItem value="nurse">Νοσοκόμος</MenuItem>
              </Select>
            </Box>

            <Box sx={{ mt: 4 }}>
              <FormLabel>Διαθεσιμότητα (Ημέρες)</FormLabel>
              <Box display="flex" justifyContent="space-between">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                  <FormControlLabel
                    key={day}
                    control={
                      <Checkbox
                        checked={days.includes(day)}
                        onChange={() => handleDayToggle(day)}
                      />
                    }
                    label={day}
                  />
                ))}
              </Box>
            </Box>
            <FormLabel sx={{display: 'flex', justifyContent: 'center', mt: 6 }}>Διαθεσιμότητα (Ώρες)</FormLabel>
            <Box sx={{display: 'flex', justifyContent: 'center' }}>
              <Box display="flex" gap={2} alignItems="center">
                <TextField
                  type="time"
                  value={hours.start}
                  onChange={(e) => setHours({ ...hours, start: e.target.value })}
                />
                <Typography>έως</Typography>
                <TextField
                  type="time"
                  value={hours.end}
                  onChange={(e) => setHours({ ...hours, end: e.target.value })}
                />
              </Box>
            </Box>

            <Box display="flex" justifyContent="space-between" mt={6}>
              <Button variant="contained" color="secondary" onClick={handleTemporarySave} style={{textTransform: 'none',}}>
                Προσωρινή Αποθήκευση
              </Button>
              <Button variant="contained" color="primary" onClick={handleSubmit} style={{textTransform: 'none',}}>
                Υποβολή
              </Button>
            </Box>
          </Container>
        </div>

        {/* Temporary Save Popup Modal */}
        <Modal open={isPopupOpen} onClose={handleClosePopup}>
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
              Η αγγελία σας αποθηκεύτηκε προσωρινά!
            </Typography>
            <Button
              style={{
                textTransform: 'none',
              }}
              variant="contained"
              color="primary"
              onClick={handleClosePopup}
              sx={{ mt: 2 }}
            >
              Κλείσιμο
            </Button>
          </Box>
        </Modal>

        {/* Submit Popup Modal */}
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
              Είστε βέβαιοι ότι θέλετε να υποβάλετε οριστικά;
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
                Οριστική Υποβολή
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
                Η αγγελία σας δημιουργήθηκε επιτυχώς!
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
    </ThemeProvider>
  );
};

export default E_Dimiourgia_aggelias;



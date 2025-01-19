import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { FIREBASE_DB } from '../config/firebase'; // Firebase setup
import Navbar_in from '../components/navbar_in';
import Footer from '../components/footer';
import BackButton from '../components/back_button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function Proboli_profil() {
  const { id } = useParams(); // UID passed via URL
  const [userData, setUserData] = useState({});
  const [aggeliesData, setAggeliesData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState({
    date: '',
    time: '',
    method: '',
    url: '',
  });
  const [rating, setRating] = useState(Math.floor(Math.random() * 5) + 1); // Random rating from 1 to 5

  // Fetch user and aggelies data from Firebase
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user data
        const userDocRef = collection(FIREBASE_DB, 'users');
        const userQuery = query(userDocRef, where('__name__', '==', id));
        const userSnapshot = await getDocs(userQuery);

        if (!userSnapshot.empty) {
          setUserData(userSnapshot.docs[0].data());
        } else {
          console.error('User not found in users collection');
        }

        // Fetch aggelies data where uid matches the id
        const aggeliesRef = collection(FIREBASE_DB, 'aggelies');
        const aggeliesQuery = query(aggeliesRef, where('uid', '==', id));
        const aggeliesSnapshot = await getDocs(aggeliesQuery);

        if (!aggeliesSnapshot.empty) {
          setAggeliesData(aggeliesSnapshot.docs[0].data());
        } else {
          console.error('Data not found in aggelies collection');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleOpenModal = () => {
    const date = document.getElementById('appointment-date').value;
    const time = document.getElementById('appointment-time').value;
    const method = document.getElementById('appointment-method').value;
    const url = document.getElementById('appointment-url').value;

    if (!date || !time || !method) {
      alert('Παρακαλώ συμπληρώστε όλα τα πεδία!');
      return;
    }

    setSubmittedData({ date, time, method, url });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);

    document.getElementById('appointment-date').value = '';
    document.getElementById('appointment-time').value = '';
    document.getElementById('appointment-method').value = '';
    document.getElementById('appointment-url').value = '';

    setSubmittedData({
      date: '',
      time: '',
      method: '',
      url: '',
    });
  };

  if (isLoading) {
    return <div className="min-h-screen flex justify-center items-center">Φόρτωση...</div>;
  }

  const {
    firstname = '',
    lastname = '',
    experience = '',
    aboutMe = '',
  } = userData;

  const {
    availability = '',
    location = '',
    specialty = '',
    days = [],
    hours = { start: '', end: '' },
  } = aggeliesData;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar_in />

      <div className="flex flex-col items-center py-6">
        <BackButton />

        <div className="bg-white p-6 rounded-lg shadow-md w-11/12 max-w-3xl">
          <div className="flex items-center mb-4">
            <div className="mb-2 h-20 flex justify-center items-center">
              <FontAwesomeIcon icon={faUserCircle} size="3x" className="text-gray-500" />
            </div>
            <div className="ml-4">
              <p className="text-lg font-bold">
                Όνομα Επαγγελματία: {firstname} {lastname}
              </p>
              <p className="text-yellow-500 font-bold">Βαθμολογία: {rating} ★</p>
            </div>
          </div>

          <p><strong>Χρόνια Εμπειρίας :</strong> {experience}</p>
          <p>
            <strong>Άμεση Διαθεσιμότητα :</strong>{' '}
            {availability === 'ναι' ? 'Ναι' : availability === 'όχι' ? 'Όχι' : availability}
          </p>
          <p><strong>Περιοχή :</strong> {location}</p>
          <p><strong>Ειδίκευση:</strong> {specialty}</p>
          <p><strong>Μέρες :</strong> {days.length > 0 ? days.join(', ') : ''}</p>
          <p>
            <strong>Ώρες:</strong>{' '}
            {hours.start && hours.end ? `${hours.start} - ${hours.end}` : ''}
          </p>
          <p><strong>Σχετικά με εμένα :</strong> {aboutMe}</p>

          <div className="mt-6 border-t pt-4">
            <label className="block mb-2">Μέρα</label>
            <input
              id="appointment-date"
              type="date"
              className="w-full border rounded px-3 py-2"
            />

            <label className="block mt-4 mb-2">Ώρα</label>
            <input
              id="appointment-time"
              type="time"
              className="w-full border rounded px-3 py-2"
            />

            <label className="block mt-4 mb-2">Μέρος:</label>
            <select
              id="appointment-method"
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Επιλογή</option>
              <option value="Διαδυκτιακά">Διαδυκτιακά</option>
              <option value="Δια ζώσης">Δια ζώσης</option>
            </select>

            <label className="block mt-4 mb-2">URL/Διεύθυνση:</label>
            <input
              id="appointment-url"
              type="url"
              className="w-full border rounded px-3 py-2"
            />

            <button
              onClick={handleOpenModal}
              className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Προγραμματισμός Ραντεβού
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center">
            <FontAwesomeIcon
              icon={faCheckCircle}
              size="3x"
              className="text-green-500 mb-4"
            />
            <h2 className="text-lg font-semibold mb-4">Επιτυχής Προγραμματισμός Ραντεβού</h2>
            <p>
              Το ραντεβού σας έχει προγραμματιστεί για τις{' '}
              <strong>{submittedData.date}</strong> στις{' '}
              <strong>{submittedData.time}</strong>, {submittedData.method}.
            </p>
            {submittedData.url && (
              <p>
                <strong>Σύνδεσμος/Διεύθυνση:</strong> {submittedData.url}
              </p>
            )}
            <p>Μένει επιβεβαίωση του Επαγγελματία.</p>
            <button
              onClick={handleCloseModal}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Κλείσιμο
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Proboli_profil;

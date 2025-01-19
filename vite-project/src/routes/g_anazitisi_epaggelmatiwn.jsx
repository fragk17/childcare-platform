import React, { useState } from 'react';
import { FIREBASE_DB } from '../config/firebase'; // Firebase setup
import { collection, getDocs, query, where } from 'firebase/firestore';
import Navbar_in from '../components/navbar_in';
import Footer from '../components/footer';
import BackButton from '../components/back_button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const G_anazitisi_epaggelmatiwn = () => {
  const [filters, setFilters] = useState({
    location: '',
    employmentType: '',
    days: [],
    hours: [9, 20],
    availability: '',
    specialty: '',
    experience: '',
  });
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const locationMapping = {
    Αθήνα: 'Athens',
    Θεσσαλονίκη: 'Thessaloniki',
    Athens: 'Αθήνα',
    Thessaloniki: 'Θεσσαλονίκη',
  };

  const specialtyMapping = {
    'Πρώτες Βοήθειες': 'FirstAid',
    'CPR': 'CPR',
    'Πιστοποίηση Φροντίδας Παιδιών': 'ChildCareCertification',
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleHoursChange = (index, value) => {
    const updatedHours = [...filters.hours];
    updatedHours[index] = parseInt(value, 10);
    setFilters((prev) => ({ ...prev, hours: updatedHours }));
  };

  const handleDaysChange = (day) => {
    setFilters((prev) => ({
      ...prev,
      days: prev.days.includes(day)
        ? prev.days.filter((d) => d !== day)
        : [...prev.days, day],
    }));
  };

  const applyFilters = async () => {
    const aggeliesRef = collection(FIREBASE_DB, 'aggelies');
    const usersRef = collection(FIREBASE_DB, 'users');
    let userMap = new Map();

    // Fetch all users and map them by uid
    const userSnapshot = await getDocs(usersRef);
    userSnapshot.forEach((doc) => {
      const data = doc.data();
      userMap.set(doc.id, data); // Map uid to user data
    });

    let q = query(aggeliesRef);

    // Map Greek location to English before querying
    const selectedLocation = filters.location
      ? locationMapping[filters.location] || filters.location
      : '';

    // Map Greek specialty to English before querying
    const selectedSpecialty = filters.specialty
      ? specialtyMapping[filters.specialty] || filters.specialty
      : '';

    // Apply additional filters dynamically to aggelies
    if (selectedLocation) q = query(q, where('location', '==', selectedLocation));
    if (selectedSpecialty) q = query(q, where('specialty', '==', selectedSpecialty));
    if (filters.employmentType) q = query(q, where('employment', '==', filters.employmentType));
    if (filters.availability) q = query(q, where('isTemporary', '==', filters.availability === 'yes'));

    // Fetch data from aggelies
    const aggeliesSnapshot = await getDocs(q);
    const filteredResults = [];

    aggeliesSnapshot.forEach((doc) => {
      const data = doc.data();

      // Match aggelies with users based on uid
      const userData = userMap.get(data.uid);
      const matchDays =
        filters.days.length === 0 || filters.days.every((day) => data.days?.includes(day));
      const matchHours =
        filters.hours[0] <= parseInt(data.hours.end) &&
        filters.hours[1] >= parseInt(data.hours.start);

      if (userData && matchDays && matchHours) {
        // Merge users and aggelies data for display
        const combinedData = {
          ...data,
          ...userData,
          location: locationMapping[data.location] || data.location,
          specialty:
            Object.keys(specialtyMapping).find((key) => specialtyMapping[key] === data.specialty) ||
            data.specialty,
          experience: userData?.experience || 'N/A',
        };
        filteredResults.push({ id: doc.id, ...combinedData });
      }
    });

    setResults(filteredResults);
    setShowResults(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <BackButton />
      <Navbar_in />
      <main className="flex flex-grow">
        {/* Filters Section */}
        <aside className="w-1/4 bg-white p-4 border-r">
          <h2 className="text-xl font-semibold mb-4">Κριτήρια</h2>
          <button
            className="w-full mb-4 bg-gray-300 py-2 rounded"
            onClick={() => {
              setFilters({
                location: '',
                employmentType: '',
                days: [],
                hours: [9, 20],
                availability: '',
                specialty: '',
                experience: '',
              });
              setShowResults(false);
            }}
          >
            Εκκαθάριση
          </button>
          {/* Περιοχή Διαμονής */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Περιοχή Διαμονής</label>
            <select
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Επιλογή</option>
              <option value="Αθήνα">Αθήνα</option>
              <option value="Θεσσαλονίκη">Θεσσαλονίκη</option>
            </select>
          </div>
          {/* Ειδίκευση */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Ειδίκευση</label>
            <select
              name="specialty"
              value={filters.specialty}
              onChange={handleFilterChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Επιλογή</option>
              <option value="Πρώτες Βοήθειες">Πρώτες Βοήθειες</option>
              <option value="CPR">CPR</option>
              <option value="Πιστοποίηση Φροντίδας Παιδιών">Πιστοποίηση Φροντίδας Παιδιών</option>
            </select>
          </div>
          {/* Χρόνια Εμπειρίας */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Χρόνια Εμπειρίας</label>
            <select
              name="experience"
              value={filters.experience}
              onChange={handleFilterChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Επιλέξτε</option>
              <option value="0-1">0-1 έτος</option>
              <option value="1-3">1-3 έτη</option>
              <option value="3+">3+ έτη</option>
            </select>
          </div>
          {/* Απασχόληση */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Απασχόληση</label>
            <select
              name="employmentType"
              value={filters.employmentType}
              onChange={handleFilterChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Επιλογή</option>
              <option value="Πλήρης">Πλήρης</option>
              <option value="Μερική">Μερική</option>
            </select>
          </div>
          <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded" onClick={applyFilters}>
            Εφαρμογή
          </button>
        </aside>

        {/* Results Section */}
        {showResults && (
          <section className="w-3/4 p-4">
            <h2 className="text-xl font-semibold mb-4">Ιδανικοί Επαγγελματίες</h2>
            {results.length > 0 ? (
              <div className="grid grid-cols-3 gap-4">
                {results.map((result) => (
                  <div key={result.id} className="p-4 border rounded bg-white shadow">
                    <div className="mb-2 h-20 flex justify-center items-center">
                      <FontAwesomeIcon icon={faUserCircle} size="3x" className="text-gray-500" />
                    </div>
                    <p className="text-sm">Χρόνια Εμπειρίας: {result.experience}</p>
                    <p className="text-sm">Ειδίκευση: {result.specialty}</p>
                    <p className="text-sm">Τοποθεσία: {result.location}</p>
                    <p className="text-sm">
                      Διαθέσιμος: {result.isTemporary ? 'Ναι' : 'Όχι'}
                    </p>
                    <Link
                      to={`/g_anazitisi_epaggelmatiwn/proboli_profil/${result.uid}`}
                      state={{
                        id: result.uid,
                      }}
                      className="mt-2 inline-block bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      View Profile
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">Δεν βρέθηκαν αποτελέσματα.</p>
            )}
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default G_anazitisi_epaggelmatiwn;

import React, { useState } from 'react';
import Navbar_in from '../components/navbar_in';
import Footer from '../components/footer';
import BackButton from '../components/back_button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';


const G_anazitisi_epaggelmatiwn = () => {
  const [filters, setFilters] = useState({
    location: '',
    childAge: '',
    employmentType: '',
    days: [],
    hours: [9, 20],
    availability: '',
    specialty: '',
    experience: ''
  });
  const [results, setResults] = useState([]); // To store filtered results
  const [showResults, setShowResults] = useState(false); // To toggle results section visibility

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
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
        : [...prev.days, day]
    }));
  };

  const applyFilters = () => {

    const dummyData = [
        { id: 'Μαρία Μάνου', experience: '5+', availability: 'yes', employmentType: 'full', location: 'Αθήνα', specialty: 'Πρώτες Βοήθειες', days: ['Mon', 'Tue', 'Wed'], hours: [9, 17], aboutMe: 'Είμαι έμπειρη νηπιαγωγός με πάθος για τη φροντίδα των παιδιών.', rating: 4.5 },
        { id: 'Γιώργος Παπαδόπουλος', experience: '3-5', availability: 'no', employmentType: 'partial', location: 'Θεσσαλονίκη', specialty: 'CPR', days: ['Tue', 'Wed', 'Thu'], hours: [10, 15], aboutMe: 'Αγαπώ να δημιουργώ ασφαλές και χαρούμενο περιβάλλον για τα παιδιά.', rating: 4.0 },
        { id: 'Ελένη Κωνσταντίνου', experience: '1-3', availability: 'yes', employmentType: 'full', location: 'Αθήνα', specialty: 'Πιστοποίηση Φροντίδας Παιδιών', days: ['Fri', 'Sat', 'Sun'], hours: [8, 14], aboutMe: 'Είμαι αφοσιωμένη στη φροντίδα και την ανάπτυξη των παιδιών.', rating: 3.5 },
        { id: 'Νίκος Παπαδόπουλος', experience: '5+', availability: 'no', employmentType: 'partial', location: 'Θεσσαλονίκη', specialty: 'Πρώτες Βοήθειες', days: ['Mon', 'Tue'], hours: [14, 20], aboutMe: 'Έχω πολυετή εμπειρία στη διδασκαλία και τη φροντίδα παιδιών.', rating: 4.2 },
        { id: 'Άννα Παπαδοπούλου', experience: '0-1', availability: 'yes', employmentType: 'full', location: 'Θεσσαλονίκη', specialty: 'CPR', days: ['Sat', 'Sun'], hours: [9, 12], aboutMe: 'Είμαι νέα ψυχολόγος με αγάπη για την παιδική ψυχολογία.', rating: 3.8 },
        { id: 'Κώστας Νικολάου', experience: '3-5', availability: 'yes', employmentType: 'full', location: 'Αθήνα', specialty: 'Πιστοποίηση Φροντίδας Παιδιών', days: ['Mon', 'Tue', 'Thu'], hours: [8, 16], aboutMe: 'Αφοσιωμένος στη δημιουργία ενός υποστηρικτικού περιβάλλοντος για τα παιδιά.', rating: 4.7 },
        { id: 'Σοφία Καραγιάννη', experience: '2-4', availability: 'yes', employmentType: 'partial', location: 'Θεσσαλονίκη', specialty: 'Πρώτες Βοήθειες', days: ['Wed', 'Thu', 'Fri'], hours: [10, 18], aboutMe: 'Λατρεύω να διδάσκω και να φροντίζω τα παιδιά με δημιουργικό τρόπο.', rating: 4.3 },
        { id: 'Πέτρος Δημητρίου', experience: '4-6', availability: 'no', employmentType: 'full', location: 'Αθήνα', specialty: 'CPR', days: ['Mon', 'Wed', 'Fri'], hours: [9, 17], aboutMe: 'Έχω εμπειρία στη διδασκαλία και την ανάπτυξη παιδιών.', rating: 4.1 },
        { id: 'Ανδρέας Παπακωνσταντίνου', experience: '1-2', availability: 'yes', employmentType: 'partial', location: 'Θεσσαλονίκη', specialty: 'Πιστοποίηση Φροντίδας Παιδιών', days: ['Tue', 'Thu'], hours: [11, 15], aboutMe: 'Είμαι σύμβουλος με έμφαση στην ανάπτυξη των παιδιών.', rating: 3.9 },
        { id: 'Κατερίνα Σταυροπούλου', experience: '5+', availability: 'yes', employmentType: 'full', location: 'Αθήνα', specialty: 'Πρώτες Βοήθειες', days: ['Mon', 'Tue', 'Wed'], hours: [8, 16], aboutMe: 'Ασχολούμαι με την παιδική ψυχολογία και την υποστήριξη των παιδιών.', rating: 4.6 },
        { id: 'Δημήτρης Αλεξίου', experience: '0-1', availability: 'no', employmentType: 'partial', location: 'Αθήνα', specialty: 'CPR', days: ['Thu', 'Fri'], hours: [12, 18], aboutMe: 'Είμαι νέος εκπαιδευτικός με όρεξη για τη φροντίδα των παιδιών.', rating: 3.7 }
      ];
      
      

    const filteredResults = dummyData.filter((item) => {
      return (
        (!filters.location || item.location === filters.location) &&
        (!filters.specialty || item.specialty === filters.specialty) &&
        (!filters.experience || item.experience === filters.experience) &&
        (!filters.availability || item.availability === filters.availability) &&
        (!filters.employmentType || item.employmentType === filters.employmentType) &&
        (filters.days.length === 0 || filters.days.every((day) => item.days.includes(day))) &&
        (filters.hours[0] <= item.hours[1] && filters.hours[1] >= item.hours[0])
      );
    });

    setResults(filteredResults);
    setShowResults(true); // Show the results section
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
                childAge: '',
                employmentType: '',
                days: [],
                hours: [9, 20],
                availability: '',
                specialty: '',
                experience: ''
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
              <option value="">Επιλογή</option>
              <option value="0-1">0-1</option>
              <option value="1-3">1-3</option>
              <option value="3-5">3-5</option>
              <option value="5+">5+</option>
            </select>
          </div>
          {/* Διαθεσιμότητα */}
          <div className="mb-4">
            <label>
              <input
                type="radio"
                name="availability"
                value="yes"
                checked={filters.availability === 'yes'}
                onChange={handleFilterChange}
              />{' '}
              Διαθέσιμος
            </label>
            <label className="ml-4">
              <input
                type="radio"
                name="availability"
                value="no"
                checked={filters.availability === 'no'}
                onChange={handleFilterChange}
              />{' '}
              Μη Διαθέσιμος
            </label>
          </div>
          {/* Χρόνος Απασχόλησης */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Χρόνος Απασχόλησης</label>
            <select
              name="employmentType"
              value={filters.employmentType}
              onChange={handleFilterChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Επιλογή</option>
              <option value="full">Πλήρης</option>
              <option value="partial">Μερική</option>
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
                    {/* <div className="mb-2 h-20 bg-gray-300">Εικόνα</div> */}
                    <div className="mb-2 h-20 flex justify-center items-center">
                        <FontAwesomeIcon icon={faUserCircle} size="3x" className="text-gray-500" />
                    </div>
                    <p className="text-sm">Χρόνια Εμπειρίας: {result.experience}</p>
                    <p className="text-sm">Ειδίκευση: {result.specialty}</p>
                    <p className="text-sm">Τοποθεσία: {result.location}</p>
                    <p className="text-sm">Διαθέσιμος: {result.availability === 'yes' ? 'Ναι' : 'Όχι'}</p>
                    {/* <a
                      href={`g_anazitisi_epaggelmatiwn/proboli_profil/${result.id}`}
                      className="mt-2 inline-block bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      View Profile
                    </a> */}
                    <Link
                            to={`/g_anazitisi_epaggelmatiwn/proboli_profil/${result.id}`}
                            state={{ 
                                id: result.id,
                                experience: result.experience,
                                availability: result.availability,
                                employmentType: result.employmentType,
                                location: result.location,
                                specialty: result.specialty,
                                days: result.days,
                                hours: result.hours,
                                aboutMe: result.aboutMe,
                                rating: result.rating
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

// import React, { useState } from 'react';
// import Navbar_in from '../components/navbar_in';
// import Footer from '../components/footer';
// import BackButton from '../components/back_button';

// const G_anazitisi_epaggelmatiwn = () => {
//   const [filters, setFilters] = useState({
//     location: '',
//     childAge: '',
//     employmentType: 'full',
//     days: [],
//     hours: [9, 20],
//     availability: false,
//     specialty: '',
//     experience: ''
//   });
//   const [results, setResults] = useState([]); // To store filtered results
//   const [showResults, setShowResults] = useState(false); // To toggle results section visibility

//   const handleFilterChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFilters((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleHoursChange = (index, value) => {
//     const updatedHours = [...filters.hours];
//     updatedHours[index] = parseInt(value, 10);
//     setFilters((prev) => ({ ...prev, hours: updatedHours }));
//   };

//   const handleDaysChange = (day) => {
//     setFilters((prev) => ({
//       ...prev,
//       days: prev.days.includes(day)
//         ? prev.days.filter((d) => d !== day)
//         : [...prev.days, day]
//     }));
//   };

//   const applyFilters = () => {
//     const dummyData = [
//       { id: 1, experience: '5+', availability: true, employmentType: 'full', location: 'Αθήνα', specialty: 'Νηπιαγωγός', days: ['Mon', 'Tue', 'Wed'], hours: [9, 17] },
//       { id: 2, experience: '3-5', availability: false, employmentType: 'partial', location: 'Θεσσαλονίκη', specialty: 'Βρεφονηπιοκόμος', days: ['Tue', 'Wed', 'Thu'], hours: [10, 15] },
//       { id: 3, experience: '1-3', availability: true, employmentType: 'full', location: 'Αθήνα', specialty: 'Φροντιστής', days: ['Fri', 'Sat', 'Sun'], hours: [8, 14] },
//       { id: 4, experience: '5+', availability: false, employmentType: 'partial', location: 'Πάτρα', specialty: 'Εκπαιδευτικός', days: ['Mon', 'Tue'], hours: [14, 20] },
//       { id: 5, experience: '0-1', availability: true, employmentType: 'full', location: 'Ηράκλειο', specialty: 'Ψυχολόγος', days: ['Sat', 'Sun'], hours: [9, 12] },
//       { id: 6, experience: '3-5', availability: true, employmentType: 'full', location: 'Αθήνα', specialty: 'Νηπιαγωγός', days: ['Mon', 'Tue', 'Thu'], hours: [8, 16] }
//     ];

//     const filteredResults = dummyData.filter((item) => {
//       return (
//         (!filters.location || item.location === filters.location) &&
//         (!filters.specialty || item.specialty === filters.specialty) &&
//         (!filters.experience || item.experience === filters.experience) &&
//         (!filters.availability || item.availability === filters.availability) &&
//         (filters.days.length === 0 || filters.days.every((day) => item.days.includes(day))) &&
//         (filters.hours[0] <= item.hours[1] && filters.hours[1] >= item.hours[0])
//       );
//     });

//     setResults(filteredResults);
//     setShowResults(true); // Show the results section
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       <BackButton />
//       <Navbar_in />
//       <main className="flex flex-grow">
//         {/* Filters Section */}
//         <aside className="w-1/4 bg-white p-4 border-r">
//           <h2 className="text-xl font-semibold mb-4">Κριτήρια</h2>
//           <button
//             className="w-full mb-4 bg-gray-300 py-2 rounded"
//             onClick={() => {
//               setFilters({
//                 location: '',
//                 childAge: '',
//                 employmentType: 'full',
//                 days: [],
//                 hours: [9, 20],
//                 availability: false,
//                 specialty: '',
//                 experience: ''
//               });
//               setShowResults(false);
//             }}
//           >
//             Εκκαθάριση
//           </button>
//           <div className="mb-4">
//             <label className="block text-sm font-medium">Περιοχή Διαμονής</label>
//             <select
//               name="location"
//               value={filters.location}
//               onChange={handleFilterChange}
//               className="w-full p-2 border rounded"
//             >
//               <option value="">Επιλογή</option>
//               <option value="Αθήνα">Αθήνα</option>
//               <option value="Θεσσαλονίκη">Θεσσαλονίκη</option>
//               <option value="Πάτρα">Πάτρα</option>
//               <option value="Ηράκλειο">Ηράκλειο</option>
//             </select>
//           </div>
//           {/* Other filters (unchanged) */}
//           <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded" onClick={applyFilters}>
//             Εφαρμογή
//           </button>
//         </aside>

//         {/* Results Section */}
//         {showResults && (
//           <section className="w-3/4 p-4">
//             <h2 className="text-xl font-semibold mb-4">Ιδανικοί Επαγγελματίες</h2>
//             {results.length > 0 ? (
//               <div className="grid grid-cols-3 gap-4">
//                 {results.map((result) => (
//                   <div key={result.id} className="p-4 border rounded bg-white shadow">
//                     <div className="mb-2 h-20 bg-gray-300">Εικόνα</div>
//                     <p className="text-sm">Χρόνια Εμπειρίας: {result.experience}</p>
//                     <p className="text-sm">Ειδίκευση: {result.specialty}</p>
//                     <p className="text-sm">Τοποθεσία: {result.location}</p>
//                     <p className="text-sm">Διαθέσιμος: {result.availability ? 'Ναι' : 'Όχι'}</p>
//                     <a
//                       href={`/profile/${result.id}`}
//                       className="mt-2 inline-block bg-blue-500 text-white px-3 py-1 rounded"
//                     >
//                       View Profile
//                     </a>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p className="text-gray-500">Δεν βρέθηκαν αποτελέσματα.</p>
//             )}
//           </section>
//         )}
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default G_anazitisi_epaggelmatiwn;







import React, { useState } from 'react';
import Navbar_in from '../components/navbar_in';
import Footer from '../components/footer';
import BackButton from '../components/back_button';

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
      { id: 1, experience: '5+', availability: 'yes', employmentType: 'full', location: 'Αθήνα', specialty: 'Νηπιαγωγός', days: ['Mon', 'Tue', 'Wed'], hours: [9, 17] },
      { id: 2, experience: '3-5', availability: 'no', employmentType: 'partial', location: 'Θεσσαλονίκη', specialty: 'Βρεφονηπιοκόμος', days: ['Tue', 'Wed', 'Thu'], hours: [10, 15] },
      { id: 3, experience: '1-3', availability: 'yes', employmentType: 'full', location: 'Αθήνα', specialty: 'Φροντιστής', days: ['Fri', 'Sat', 'Sun'], hours: [8, 14] },
      { id: 4, experience: '5+', availability: 'no', employmentType: 'partial', location: 'Πάτρα', specialty: 'Εκπαιδευτικός', days: ['Mon', 'Tue'], hours: [14, 20] },
      { id: 5, experience: '0-1', availability: 'yes', employmentType: 'full', location: 'Ηράκλειο', specialty: 'Ψυχολόγος', days: ['Sat', 'Sun'], hours: [9, 12] },
      { id: 6, experience: '3-5', availability: 'yes', employmentType: 'full', location: 'Αθήνα', specialty: 'Νηπιαγωγός', days: ['Mon', 'Tue', 'Thu'], hours: [8, 16] }
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
              <option value="Πάτρα">Πάτρα</option>
              <option value="Ηράκλειο">Ηράκλειο</option>
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
              <option value="Νηπιαγωγός">Νηπιαγωγός</option>
              <option value="Βρεφονηπιοκόμος">Βρεφονηπιοκόμος</option>
              <option value="Φροντιστής">Φροντιστής</option>
              <option value="Εκπαιδευτικός">Εκπαιδευτικός</option>
              <option value="Ψυχολόγος">Ψυχολόγος</option>
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
                    <div className="mb-2 h-20 bg-gray-300">Εικόνα</div>
                    <p className="text-sm">Χρόνια Εμπειρίας: {result.experience}</p>
                    <p className="text-sm">Ειδίκευση: {result.specialty}</p>
                    <p className="text-sm">Τοποθεσία: {result.location}</p>
                    <p className="text-sm">Διαθέσιμος: {result.availability === 'yes' ? 'Ναι' : 'Όχι'}</p>
                    <a
                      href={`/profile/${result.id}`}
                      className="mt-2 inline-block bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      View Profile
                    </a>
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

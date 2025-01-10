// import React, { useState } from "react";
// import Navbar_in from "../components/navbar_in";
// import Footer from "../components/footer";
// import BackButton from "../components/back_button";

// const E_istoriko_aggeliwn = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <BackButton />
//       <Navbar_in />
      
//       <Footer />
//     </div>
//   )
// }

// export default E_istoriko_aggeliwn




import React, { useState } from "react";
import Navbar_in from "../components/navbar_in";
import Footer from "../components/footer";
import BackButton from "../components/back_button";

const E_istoriko_aggeliwn = () => {
  const [historyItems, setHistoryItems] = useState([
    { id: 1, status: "Προσχέδιο Αποθηκευμένη", date: "1/7/2024", time: "9:42" },
    { id: 2, status: "Αναρτημένη", date: "22/5/2023", time: "9:45" },
    { id: 3, status: "Αναρτημένη", date: "20/2/2023", time: "10:42" },
    { id: 4, status: "Προσχέδιο Αποθηκευμένη", date: "11/7/2022", time: "13:25" },
    { id: 5, status: "Αναρτημένη", date: "13/5/2022", time: "10:41" },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDelete = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    setHistoryItems(historyItems.filter((item) => item.id !== selectedItem.id));
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <BackButton />
      <Navbar_in />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Ιστορικό Αγγελιών</h1>
        <table className="w-full border-collapse border border-gray-300 text-center">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Κατάσταση</th>
              <th className="border border-gray-300 px-4 py-2">Ημερομηνία</th>
              <th className="border border-gray-300 px-4 py-2">Ώρα</th>
              <th className="border border-gray-300 px-4 py-2">Ενέργειες</th>
            </tr>
          </thead>
          <tbody>
            {historyItems.map((item) => (
              <tr key={item.id}>
                <td className="border border-gray-300 px-4 py-2">{item.status}</td>
                <td className="border border-gray-300 px-4 py-2">{item.date}</td>
                <td className="border border-gray-300 px-4 py-2">{item.time}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2"
                  >
                    Επεξεργασία
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => handleDelete(item)}
                  >
                    Διαγραφή
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <Footer />

      {/* Delete Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-md text-center shadow-lg w-96 p-6">
            <h2 className="text-lg font-bold text-gray-800">
              Είστε βέβαιοι ότι θέλετε να διαγράψετε την αγγελία;
            </h2>
            <p className="text-gray-600 mt-2">
              Την οποία επεξεργαστήκατε τελευταία φορά στις {selectedItem?.date} στις {selectedItem?.time}
            </p>
            <div className="mt-4 flex justify-center space-x-4">
              <button
                className="bg-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-400"
                onClick={() => setIsModalOpen(false)}
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
    </div>
  );
};

export default E_istoriko_aggeliwn;

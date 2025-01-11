import React, { useState } from 'react';
import Navbar_in from '../components/navbar_in';
import Footer from '../components/footer';
import BackButton from '../components/back_button';

const G_synergasies = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRenewModalOpen, setIsRenewModalOpen] = useState(false);
  const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isDateSelectModalOpen, setIsDateSelectModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [activeCollaborations, setActiveCollaborations] = useState([
    {
      status: 'Ενεργή',
      start: '2024-05-11',
      end: '2024-09-25',
      name: 'Μάνος Μάνου',
    },
  ]);
  const [completedCollaborations, setCompletedCollaborations] = useState([
    {
      employment: 'Πλήρης',
      start: '2023-05-11',
      end: '2023-09-11',
      name: 'Ηλίας Κώστας',
    },
  ]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleModalOpen = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsRenewModalOpen(false);
    setIsRatingModalOpen(false);
    setIsSuccessModalOpen(false);
    setIsDateSelectModalOpen(false);
    setSelectedUser('');
    setRating(0);
    setComment('');
    setStartDate('');
    setEndDate('');
  };

  const handleConfirmCompletion = () => {
    setIsModalOpen(false); // Close initial confirmation modal
    setIsRenewModalOpen(true); // Open renewal modal
  };

  const handleRenewalAction = (action) => {
    setIsRenewModalOpen(false); // Close renewal modal
    if (action === 'end') {
      setIsRatingModalOpen(true); // Open rating modal
    } else if (action === 'renew') {
      setIsDateSelectModalOpen(true); // Open date select modal
    }
  };

const handleSubmitRating = () => {
    // Move συνεργασία to Ολοκληρωμένες Συνεργασίες
    setActiveCollaborations((prev) => {
      const updated = prev.filter((collab) => collab.name !== selectedUser);
      const completed = prev.find((collab) => collab.name === selectedUser);
      if (completed) {
        setCompletedCollaborations((prevCompleted) => {
          // Check if the collaboration already exists in completedCollaborations
          const alreadyCompleted = prevCompleted.some(
            (collab) => collab.name === completed.name
          );
          if (!alreadyCompleted) {
            return [
              ...prevCompleted,
              {
                employment: 'Πλήρης',
                start: completed.start,
                end: completed.end,
                name: completed.name,
              },
            ];
          }
          return prevCompleted;
        });
      }
      return updated;
    });
  
    setIsRatingModalOpen(false);
    setIsSuccessModalOpen(true);
  };
  

  const handleDateSubmit = () => {
    // Update συνεργασία dates in Ενεργές Συνεργασίες
    setActiveCollaborations((prev) =>
      prev.map((collab) =>
        collab.name === selectedUser
          ? { ...collab, start: startDate, end: endDate }
          : collab
      )
    );
    setIsDateSelectModalOpen(false);
    setIsSuccessModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <BackButton />
      <Navbar_in />

      <div className="min-h-screen p-6 py-20">
        <div className="bg-white shadow rounded-md">
          {/* Tab Selector */}
          <div className="flex border-b border-gray-300">
            <button
              onClick={() => handleTabClick('active')}
              className={`flex-1 text-center py-2 border-b-2 ${
                activeTab === 'active'
                  ? 'border-black text-black font-bold'
                  : 'border-transparent text-gray-500'
              }`}
            >
              Ενεργές Συνεργασίες
            </button>
            <button
              onClick={() => handleTabClick('completed')}
              className={`flex-1 text-center py-2 border-b-2 ${
                activeTab === 'completed'
                  ? 'border-black text-black font-bold'
                  : 'border-transparent text-gray-500'
              }`}
            >
              Ολοκληρωμένες Συνεργασίες
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-4">
            {activeTab === 'active' && (
              <div>
                <h1 className="text-xl font-bold text-gray-800 mb-4">Ενεργές Συνεργασίες</h1>
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 p-2 text-left">Κατάσταση</th>
                      <th className="border border-gray-300 p-2 text-left">Έναρξη</th>
                      <th className="border border-gray-300 p-2 text-left">Λήξη</th>
                      <th className="border border-gray-300 p-2 text-left">Όνομα Επαγγελματία</th>
                      <th className="border border-gray-300 p-2 text-center">Λήξη Συνεργασίας</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeCollaborations.map((collab) => (
                      <tr key={collab.name} className="hover:bg-gray-100">
                        <td className="border border-gray-300 p-2">{collab.status}</td>
                        <td className="border border-gray-300 p-2">{collab.start}</td>
                        <td className="border border-gray-300 p-2">{collab.end}</td>
                        <td className="border border-gray-300 p-2">{collab.name}</td>
                        <td className="border border-gray-300 p-2 text-center">
                          <button
                            onClick={() => handleModalOpen(collab.name)}
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                          >
                            Λήξη
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {activeTab === 'completed' && (
              <div>
                <h1 className="text-xl font-bold text-gray-800 mb-4">Ολοκληρωμένες Συνεργασίες</h1>
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 p-2 text-left">Απασχόληση</th>
                      <th className="border border-gray-300 p-2 text-left">Έναρξη</th>
                      <th className="border border-gray-300 p-2 text-left">Λήξη</th>
                      <th className="border border-gray-300 p-2 text-left">Όνομα Επαγγελματία</th>
                    </tr>
                  </thead>
                  <tbody>
                    {completedCollaborations.map((collab, index) => (
                      <tr key={index} className="hover:bg-gray-100">
                        <td className="border border-gray-300 p-2">{collab.employment}</td>
                        <td className="border border-gray-300 p-2">{collab.start}</td>
                        <td className="border border-gray-300 p-2">{collab.end}</td>
                        <td className="border border-gray-300 p-2">{collab.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />

      {/* Initial Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h2 className="text-lg font-semibold mb-4">
              Είστε βέβαιοι ότι θέλετε να ολοκληρώσετε τη συνεργασία με τον/την {selectedUser};
            </h2>
            <div className="flex justify-end space-x-2">
              <button
                onClick={closeModal}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
              >
                Ακύρωση
              </button>
              <button
                onClick={handleConfirmCompletion}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Συνέχεια
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Renewal Modal */}
      {isRenewModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center">
            <h2 className="text-lg font-semibold mb-4">
              Θα θέλατε να ανανεώσετε τη συνεργασία με τον/την {selectedUser};
            </h2>
            <div className="flex justify-between space-x-4">
              <button
                onClick={() => handleRenewalAction('end')}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
              >
                Λήξη
              </button>
              <button
                onClick={() => handleRenewalAction('renew')}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Λήξη και Ανανέωση
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Rating Modal */}
      {isRatingModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h2 className="text-lg font-semibold mb-4">
              Αξιολογήστε τη συνεργασία με τον/την {selectedUser};
            </h2>
            <div className="flex items-center justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className={`text-2xl ${star <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
                >
                  ★
                </button>
              ))}
            </div>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Εισαγωγή κειμένου"
              className="w-full border border-gray-300 rounded p-2 mb-4"
            ></textarea>
            <div className="flex justify-end space-x-2">
              <button
                onClick={closeModal}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
              >
                Ακύρωση
              </button>
              <button
                onClick={handleSubmitRating}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Υποβολή
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center">
            <h2 className="text-lg font-semibold mb-4">
              Η συνεργασία σας με τον/την {selectedUser} ανανεώθηκε επιτυχώς από {startDate} έως {endDate}!
            </h2>
            <button
              onClick={closeModal}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Κλείσιμο
            </button>
          </div>
        </div>
      )}

      {/* Select Dates Modal */}
      {isDateSelectModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center">
            <h2 className="text-lg font-semibold mb-4">
              Επιλέξτε ημερομηνίες για την ανανέωση της συνεργασίας με τον/την {selectedUser}
            </h2>
            <div className="flex justify-between mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">Ημερομηνία Έναρξης</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Ημερομηνία Λήξης</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-2"
                />
              </div>
            </div>
            <button
              onClick={handleDateSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Υποβολή
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default G_synergasies;

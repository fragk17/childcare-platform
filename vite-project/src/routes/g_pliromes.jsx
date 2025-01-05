// import React from 'react'
// import Navbar_in from '../components/navbar_in';
// import Footer from '../components/footer';
// const G_pliromes = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//         <Navbar_in />


//         <Footer />
//     </div>
//   )
// }

// export default G_pliromes




import React, { useState } from "react";
import Navbar_in from "../components/navbar_in";
import Footer from "../components/footer";
import BackButton from "../components/back_button";

const G_pliromes = () => {
  // State to manage payments
  const [payments, setPayments] = useState([
    { id: 1, month: "Ιανουάριος", status: "Απορρίφθηκε", name: "Μάνος Μάνου", action: "rejected" },
    { id: 2, month: "Φεβρουάριος", status: "Επιβεβαιώθηκε", name: "Μάνος Μάνου", action: "approved" },
    { id: 3, month: "Μάρτιος", status: "Επιβεβαιώθηκε", name: "Μάνος Μάνου", action: "approved" },
    { id: 4, month: "Απρίλιος", status: "Επιβεβαιώθηκε", name: "Μάνος Μάνου", action: "approved" },
    { id: 5, month: "Μάιος", status: "Επιβεβαιώθηκε", name: "Μάνος Μάνου", action: "approved" },
    { id: 6, month: "Ιούνιος", status: "Επιβεβαιώθηκε", name: "Μάνος Μάνου", action: "approved" },
    { id: 7, month: "Ιούλιος", status: "Επιβεβαιώθηκε", name: "Μάνος Μάνου", action: "approved" },
    { id: 8, month: "Αύγουστος", status: "Απορρίφθηκε", name: "Μάνος Μάνου", action: "rejected" },
    { id: 9, month: "Σεπτέμβριος", status: "Αναμονή Επιβεβαίωσης", name: "Μάνος Μάνου", action: "pending" },
    { id: 10, month: "Οκτώβριος", status: "", name: "", action: "" },
    { id: 11, month: "Νοέμβριος", status: "", name: "", action: "" },
    { id: 12, month: "Δεκέμβριος", status: "", name: "", action: "" },
  ]);

  // Function to handle accepting a payment
  const handleAccept = (id) => {
    setPayments((prevPayments) =>
      prevPayments.map((payment) =>
        payment.id === id && payment.action === "pending"
          ? { ...payment, status: "Επιβεβαιώθηκε", action: "approved" }
          : payment
      )
    );
  };

  // Function to handle declining a payment
  const handleDecline = (id) => {
    setPayments((prevPayments) =>
      prevPayments.map((payment) =>
        payment.id === id && payment.action === "pending"
          ? { ...payment, status: "Απορρίφθηκε", action: "rejected" }
          : payment
      )
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
        <BackButton />
        <Navbar_in />

      <main className="flex-grow bg-gray-100 p-4">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-xl font-bold text-center mb-4">Πληρωμές</h1>

          {/* Year Dropdown */}
          <div className="text-center mb-4">
            <select className="border border-gray-300 rounded px-2 py-1">
              <option value="2024">2024</option>
            </select>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-700 text-white">
                  <th className="border border-gray-300 px-4 py-2">Κατάσταση</th>
                  <th className="border border-gray-300 px-4 py-2">Μήνας</th>
                  <th className="border border-gray-300 px-4 py-2">Όνομα Επαγγελματία</th>
                  <th className="border border-gray-300 px-4 py-2">Ενέργεια</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => (
                  <tr key={payment.id} className="text-center">
                    <td className="border border-gray-300 px-4 py-2">{payment.status}</td>
                    <td className="border border-gray-300 px-4 py-2">{payment.month}</td>
                    <td className="border border-gray-300 px-4 py-2">{payment.name}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      {payment.action === "pending" ? (
                        <div className="flex justify-center gap-2">
                          <button
                            className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                            onClick={() => handleAccept(payment.id)}
                          >
                            Accept
                          </button>
                          <button
                            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                            onClick={() => handleDecline(payment.id)}
                          >
                            Decline
                          </button>
                        </div>
                      ) : payment.action === "approved" ? (
                        <span className="text-green-600">✔ Accepted</span>
                      ) : payment.action === "rejected" ? (
                        <span className="text-red-600">✖ Declined</span>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default G_pliromes;
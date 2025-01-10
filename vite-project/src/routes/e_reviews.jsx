// import React from 'react'
// import Navbar_in from "../components/navbar_in";
// import Footer from "../components/footer";
// import BackButton from "../components/back_button";

// const Reviews = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//         <BackButton />
//         <Navbar_in />
      

//         <Footer />
//     </div>
//   )
// }

// export default Reviews



import React, { useState } from "react";
import Navbar_in from "../components/navbar_in";
import Footer from "../components/footer";
import BackButton from "../components/back_button";
import { Modal, Box, Typography, Button } from "@mui/material";

const E_Reviews = () => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  // Sample data for reviews
  const reviews = [
    {
      id: 1,
      employment: "Πλήρης",
      startDate: "11/5/2024",
      endDate: "21/9/2024",
      parentName: "Μάνος Μάνου",
      rating: 4,
      comment:
        "Δεν μπορούμε να πούμε αρκετά καλά λόγια για την Μαρία! Έδειξε απόλυτη αγάπη, φροντίδα και επαγγελματισμό. Το παιδί μας έμαθε πολλά από εκείνη και την περιμένει με ανυπομονησία κάθε φορά! Ευχαριστούμε για όλα!",
    },
    {
      id: 2,
      employment: "Πλήρης",
      startDate: "11/5/2023",
      endDate: "11/9/2023",
      parentName: "Ηλίας Κώστας",
      rating: 5,
      comment: "Η Μαρία ήταν εξαιρετική! Ευχαριστούμε θερμά.",
    },
    {
      id: 3,
      employment: "Πλήρης",
      startDate: "10/4/2022",
      endDate: "18/8/2022",
      parentName: "Νίκος Νίκου",
      rating: 3,
      comment: "Καλή εμπειρία, αλλά υπήρξαν μερικά μικρά προβλήματα.",
    },
    {
      id: 4,
      employment: "Πλήρης",
      startDate: "11/5/2021",
      endDate: "11/9/2021",
      parentName: "Μαρία Μάρω",
      rating: 4,
      comment: "Εξαιρετική δουλειά, θα τη συστήναμε ανεπιφύλακτα!",
    },
  ];

  // Open Review Modal
  const handleViewReview = (review) => {
    setSelectedReview(review);
    setIsReviewModalOpen(true);
  };

  // Close Review Modal
  const handleCloseReviewModal = () => {
    setIsReviewModalOpen(false);
    setSelectedReview(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <BackButton />
      <Navbar_in />

      <main className="flex-grow bg-gray-100 p-4">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-xl font-bold text-center mb-4">Προβολή Αξιολογήσεων</h1>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-700 text-white">
                  <th className="border border-gray-300 px-4 py-2">Απασχόληση</th>
                  <th className="border border-gray-300 px-4 py-2">Έναρξη</th>
                  <th className="border border-gray-300 px-4 py-2">Λήξη</th>
                  <th className="border border-gray-300 px-4 py-2">Όνομα Γονέα</th>
                  <th className="border border-gray-300 px-4 py-2">Προβολή Αξιολόγησης</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review) => (
                  <tr key={review.id} className="text-center">
                    <td className="border border-gray-300 px-4 py-2">{review.employment}</td>
                    <td className="border border-gray-300 px-4 py-2">{review.startDate}</td>
                    <td className="border border-gray-300 px-4 py-2">{review.endDate}</td>
                    <td className="border border-gray-300 px-4 py-2">{review.parentName}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        onClick={() => handleViewReview(review)}
                      >
                        Προβολή
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Review Modal */}
      <Modal open={isReviewModalOpen} onClose={handleCloseReviewModal}>
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
          {selectedReview && (
            <>
              <Typography variant="h6" gutterBottom>
                Βαθμολογία:{" "}
                {"★".repeat(selectedReview.rating) +
                  "☆".repeat(5 - selectedReview.rating)}
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                <strong>Σχόλιο:</strong> {selectedReview.comment}
              </Typography>
            </>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={handleCloseReviewModal}
            sx={{ mt: 4, textTransform: "none" }}
          >
            Κλείσιμο
          </Button>
        </Box>
      </Modal>

      <Footer />
    </div>
  );
};

export default E_Reviews;

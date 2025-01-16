// import { Navigate } from "react-router-dom";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { FIREBASE_AUTH } from "../config/firebase";

// const ProtectedRoute = ({ children }) => {
//   const [user, loading] = useAuthState(FIREBASE_AUTH);

//   if (loading) {
//     return <div>Loading...</div>; // Optional loading state
//   }

//   // If no user is logged in, redirect to the home page
//   if (!user) {
//     return <Navigate to="/home" />;
//   }

//   // Otherwise, render the children (protected content)
//   return children;
// };

// export default ProtectedRoute;



// import { Navigate } from "react-router-dom";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { FIREBASE_AUTH } from "../config/firebase";

// const ProtectedRoute = ({ children, allowedRole }) => {
//   const [user, loading] = useAuthState(FIREBASE_AUTH);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   const userRole = localStorage.getItem("userRole"); // Or fetch from Firebase custom claims

//   // Redirect if user is not logged in or doesn't have the correct role
//   if (!user || userRole !== allowedRole) {
//     return <Navigate to="/home" />;
//   }

//   return children;
// };

// export default ProtectedRoute;



import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FIREBASE_AUTH } from '../config/firebase';

const ProtectedRoute = ({ children, allowedRole }) => {
  const [user, loading] = useAuthState(FIREBASE_AUTH);

  if (loading) {
    return <div>Loading...</div>;
  }

  const userRole = localStorage.getItem('userRole');

  if (!user || userRole !== allowedRole) {
    return <Navigate to="/home" />;
  }

  return children;
};

export default ProtectedRoute;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { FIREBASE_AUTH, FIREBASE_DB } from '../config/firebase'; // Import your Firebase config
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import BackButton from "../components/back_button";

const E_login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstname, setFirstname] = useState(''); // New state for firstname
  const [lastname, setLastname] = useState(''); // New state for lastname
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setError(''); // Clear error when switching forms
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (isSignUp) {
      // Handle Sign-Up
      if (password !== confirmPassword) {
        setError('Οι κωδικοί δεν ταιριάζουν.');
        return;
      }
      try {
        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
        const user = userCredential.user;

        // Assign role "professional" in Firestore
        const userRef = doc(FIREBASE_DB, 'users', user.uid);
        await setDoc(userRef, {
          role: 'professional',
          email,
          firstname, // Store firstname
          lastname, // Store lastname
        });

        // Save role locally for quick access
        localStorage.setItem('userRole', 'professional');

        // Navigate to the professional dashboard
        navigate('/e_arxiki');
      } catch (err) {
        setError('Σφάλμα κατά την εγγραφή: ' + err.message);
      }
    } else {
      // Handle Sign-In
      try {
        // Sign in the user
        const userCredential = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
        const user = userCredential.user;

        // Retrieve user role from Firestore
        const userRef = doc(FIREBASE_DB, 'users', user.uid);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          const { role } = userDoc.data();
          localStorage.setItem('userRole', role); // Save role locally

          // Navigate to the appropriate route based on role
          if (role === 'professional') {
            navigate('/e_arxiki');
          } else {
            setError('Ο χρήστης δεν έχει έγκυρο ρόλο.');
          }
        } else {
          setError('Ο χρήστης δεν έχει ρυθμιστεί σωστά.');
        }
      } catch (err) {
        setError('Σφάλμα κατά τη σύνδεση: ' + err.message);
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <BackButton />
      <Navbar />
      <div className="flex flex-1 items-center justify-center py-11">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            {isSignUp ? 'Εγγραφή Επαγγελματία' : 'Σύνδεση Επαγγελματία'}
          </h2>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {isSignUp && (
              <>
                <div>
                  <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
                    Όνομα
                  </label>
                  <input
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    required
                    className="mt-1 p-3 w-full border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    placeholder="Όνομα"
                  />
                </div>
                <div>
                  <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
                    Επώνυμο
                  </label>
                  <input
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    required
                    className="mt-1 p-3 w-full border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    placeholder="Επώνυμο"
                  />
                </div>
              </>
            )}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 p-3 w-full border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Κωδικός
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 p-3 w-full border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="••••••••"
              />
            </div>

            {isSignUp && (
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                  Επιβεβαίωση Κωδικού
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="mt-1 p-3 w-full border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  placeholder="••••••••"
                />
              </div>
            )}

            <div>
              <button
                type="submit"
                className="w-full px-4 py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300"
              >
                {isSignUp ? 'Εγγραφή' : 'Σύνδεση'}
              </button>
            </div>
          </form>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              {isSignUp ? 'Έχετε ήδη λογαριασμό;' : 'Δεν έχετε λογαριασμό;'}
              <button
                type="button"
                onClick={toggleForm}
                className="ml-1 text-indigo-600 hover:underline"
              >
                {isSignUp ? 'Σύνδεση' : 'Εγγραφή'}
              </button>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default E_login;

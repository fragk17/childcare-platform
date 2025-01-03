import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import BackButton from "../components/back_button"

const E_login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="flex flex-col">
      <Navbar />
      <BackButton />
      <div className="flex flex-1 items-center justify-center py-12">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            {isSignUp ? 'Εγγραφή Επαγγελματία' : 'Σύνδεση Επαγγελματία'}
          </h2>
          <form className="mt-8 space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
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

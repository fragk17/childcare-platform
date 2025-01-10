import React from 'react';
import Navbar_in from '../components/navbar_in';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';

const E_arxiki = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar_in />
      
      <main className="flex-grow container mx-auto py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <Link to="/e_dimiourgia_aggelias" className="p-10 text-xl bg-gray-300 text-center rounded-lg hover:bg-slate-600 hover:text-neutral-50 font-bold">Δημιουργία Αγγελίας</Link>
          <Link to="/interest" className="p-10 text-xl bg-gray-300 text-center rounded-lg hover:bg-slate-600 hover:text-neutral-50 font-bold">Ραντεβού</Link>
          <Link to="/e_istoriko_aggeliwn" className="p-10 text-xl bg-gray-300 text-center rounded-lg hover:bg-slate-600 hover:text-neutral-50 font-bold">Ιστορικό Αγγελιών</Link>
          <Link to="/e_pliromes" className="p-10 text-xl bg-gray-300 text-center rounded-lg hover:bg-slate-600 hover:text-neutral-50 font-bold">Πληρωμές</Link>
          <Link to="/e_requests" className="p-10 text-xl bg-gray-300 text-center rounded-lg hover:bg-slate-600 hover:text-neutral-50 font-bold">Εισερχόμενες Αιτήσεις</Link>
          <Link to="/e_edit_bio" className="p-10 text-xl bg-gray-300 text-center rounded-lg hover:bg-slate-600 hover:text-neutral-50 font-bold">Επεξεργασία Βιογραφικού</Link>
          <Link to="/e_reviews" className="p-10 text-xl bg-gray-300 text-center rounded-lg hover:bg-slate-600 hover:text-neutral-50 font-bold">Προβολή Αξιολογήσεων</Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default E_arxiki;
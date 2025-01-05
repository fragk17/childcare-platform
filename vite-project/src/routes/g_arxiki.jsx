import React from 'react';
import Navbar_in from '../components/navbar_in';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';

const G_arxiki = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar_in />
      
      <main className="flex-grow container mx-auto py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <Link to="/search" className="p-10 text-xl bg-gray-300 text-center rounded-lg hover:bg-slate-600 hover:text-neutral-50 font-bold">Αναζήτηση Επαγγελματιών</Link>
          <Link to="/interest" className="p-10 text-xl bg-gray-300 text-center rounded-lg hover:bg-slate-600 hover:text-neutral-50 font-bold">Αίτηση Ενδιαφέροντος</Link>
          <Link to="/appointments" className="p-10 text-xl bg-gray-300 text-center rounded-lg hover:bg-slate-600 hover:text-neutral-50 font-bold">Ιστορικό Ραντεβού</Link>
          <Link to="/g_pliromes" className="p-10 text-xl bg-gray-300 text-center rounded-lg hover:bg-slate-600 hover:text-neutral-50 font-bold">Πληρωμές</Link>
          <Link to="/collaborations" className="p-10 text-xl bg-gray-300 text-center rounded-lg hover:bg-slate-600 hover:text-neutral-50 font-bold">Συνεργασίες</Link>
          <Link to="/applications" className="p-10 text-xl bg-gray-300 text-center rounded-lg hover:bg-slate-600 hover:text-neutral-50 font-bold">Ιστορικό Αιτήσεων</Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default G_arxiki;

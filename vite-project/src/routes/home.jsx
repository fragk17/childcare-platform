import React from 'react'
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import InfoIcon from '@mui/icons-material/Info';
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <div className='font-khula flex flex-col text-center justify-center px-10 pt-[30px] text-2xl leading-none' >
          <p className="font-bold">Δράση "Νταντάδες της γειτονιάς"</p>
                <p className='font-semibold pt-5'>
                  Υπηρεσία κατ' οίκον φροντίδας βρεφών και νηπίων από 2 μηνών έως 2,5 ετών
                </p>
                <p className='pt-[30px]'>
                  Πρόσβαση έχουν οι γονείς και τα πρόσωπα που έχουν την επιμέλεια βρεφών και νηπίων, καθώς και τα φυσικά πρόσωπα που επιθυμούν να εγγραφούν στο Μητρώο Επιμελητών. Δικαίωμα αίτησης χρηματοδότησης από τη Δράση «Νταντάδες της Γειτονιάς» για κάλυψη μέρους της αμοιβής της υπηρεσίας του/της Επιμελητή/τριας, έχουν τα ωφελούμενα πρόσωπα που πληρούν τις προϋποθέσεις.
                </p>
        </div>

          <Stack className="pt-40 justify-center" direction="row" spacing={20}>
            <a href="/plir_gon">
                <Button variant="outlined" color="black" startIcon={<InfoIcon />}> Πληροφορίες για Γονείς </Button>
            </a>
            <a href="/plir_epagg">
            <Button variant="outlined" color="black" startIcon={<InfoIcon />}> Πληροφορίες για Επαγγελματίες </Button>
            </a>
          </Stack>
      </div>
      <Footer />
    </div>

  )
}

export default Home




// import React from 'react';
// import { Link } from "react-router-dom";
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
// import InfoIcon from '@mui/icons-material/Info';
// import Navbar from "../components/navbar";
// import Footer from "../components/footer";

// const Home = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <div className="flex-grow">
//         <div className="font-khula flex flex-col text-center justify-center px-10 pt-[30px] text-2xl leading-none">
//           <p className="font-bold">Δράση "Νταντάδες της γειτονιάς"</p>
//           <p className="font-semibold pt-5">
//             Υπηρεσία κατ' οίκον φροντίδας βρεφών και νηπίων από 2 μηνών έως 2,5 ετών
//           </p>
//           <p className="pt-[30px]">
//             Πρόσβαση έχουν οι γονείς και τα πρόσωπα που έχουν την επιμέλεια βρεφών και νηπίων, καθώς και τα φυσικά πρόσωπα που επιθυμούν να εγγραφούν στο Μητρώο Επιμελητών. Δικαίωμα αίτησης χρηματοδότησης από τη Δράση «Νταντάδες της Γειτονιάς» για κάλυψη μέρους της αμοιβής της υπηρεσίας του/της Επιμελητή/τριας, έχουν τα ωφελούμενα πρόσωπα που πληρούν τις προϋποθέσεις.
//           </p>
//         </div>

//         <Stack className="pt-40 justify-center" direction="row" spacing={5}>
//           <a href="/plir_gon">
//             <Button variant="outlined" color="black" startIcon={<InfoIcon />}>
//               Πληροφορίες για Γονείς
//             </Button>
//           </a>
//           <a href="/plir_epagg">
//             <Button variant="outlined" color="black" startIcon={<InfoIcon />}>
//               Πληροφορίες για Επαγγελματίες
//             </Button>
//           </a>
//         </Stack>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Home;

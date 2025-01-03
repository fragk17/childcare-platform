import Navbar from "./components/navbar"
import Footer from "./components/footer"
import { Routes,Route } from "react-router"
import Home from "./routes/home"
import Plir_goneis from "./routes/plir_gonea"
import Plir_epagg from "./routes/plir_epagg"
// import { Link } from "react-router-dom"
import G_login from "./routes/g_login"
import E_login from "./routes/e_login"


// https://www.figma.com/design/n77y1eExg5FYmlzcq20kI4/EAM?node-id=148-3317&t=lTpNKkdTKZ1vMwee-0

function App() {

  return (
    <div className="w-full h-full absolute bg-gradient-to-r from-gray-500 to-white">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/plir_gon" element={<Plir_goneis />}/>
        <Route path="/plir_epagg" element={<Plir_epagg />}/>
        <Route path="/g_login" element={<G_login />}/>
        <Route path="/e_login" element={<E_login />}/>
      </Routes>
    </div>
  )
}

export default App


 // <div className="w-full h-full absolute bg-gradient-to-r from-gray-500 to-white">
  // return (
  //   <div className="min-h-screen flex flex-col bg-black">
  //     <Navbar />
  //   </div>
  // )

 

// const [isMenyOpen,setIsMenuOpen] = useState(false)

//   return (
//     <div className="w-full h-full absolute bg-gradient-to-r from-gray-500 to-white">
//         <header className="flex justify-between items-center text-center text-black py-3.5 px-8 md:px-20 bg-white drop-shadow-md">
//           <a href="#" className="flex gap-10 items-center">
//             <button onClick={() => alert('Button Clicked!')}>
//               <img alt="logo" src={logo} className="w-16 h-16 hover:scale-110 transition-all"/>
//             </button>
//             <p>Υπηρεσία Φροντίδας Βρεφών και Νηπίων</p>
//           </a>
//           <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
//             <li className="p-3 hover:bg-red-600 hover:text-white outline outline-1 outline-black rounded-md transition-all cursor-pointer">ΓΟΝΕΑΣ</li>
//             <li className="p-3 hover:bg-red-600 hover:text-white outline outline-1 outline-black rounded-md transition-all cursor-pointer">ΕΠΑΓΓΕΛΜΑΤΙΑΣ</li>
//           </ul>

//           <i className="bx bx-menu xl:hidden block text-5xl cursor-pointer " onClick={() => setIsMenuOpen(!isMenyOpen)}>
//           </i>
//           <div className={`absolute xl:hidden top-24 left-0 w-full bg-slate-200 flex-col items-center gap-6 font-semibold text-lg transform transition ${isMenyOpen ? "opacity-100" : "opacity-0"}`}
//           style = {{transition: "transform 0.3s ease, opacity0.3s ease"}}>
//             <li className= "list-none w-full text-center p-4 hover:bg-red-600 hover:text-white transition-all cursor-pointer">ΓΟΝΕΑΣ</li>
//             <li className= "list-none w-full text-center p-4 hover:bg-red-600 hover:text-white transition-all cursor-pointer">ΕΠΑΓΓΕΛΜΑΤΙΑΣ</li>
//           </div>
//         </header>

//         <div className="font-khula flex flex-col text-center justify-center px-10 pt-[30px] text-2xl leading-none" >
//           <p className="font-bold">Δράση "Νταντάδες της γειτονιάς"</p>
//                 <div className=""/>
//                 <p className="font-semibold pt-5">
//                   Υπηρεσία κατ' οίκον φροντίδας βρεφών και νηπίων από 2 μηνών έως 2,5 ετών
//                 </p>
//                 <p className=" flex-grow pt-[30px]">
//                   Πρόσβαση έχουν οι γονείς και τα πρόσωπα που έχουν την επιμέλεια βρεφών και νηπίων, καθώς και τα φυσικά πρόσωπα που επιθυμούν να εγγραφούν στο Μητρώο Επιμελητών. Δικαίωμα αίτησης χρηματοδότησης από τη Δράση «Νταντάδες της Γειτονιάς» για κάλυψη μέρους της αμοιβής της υπηρεσίας του/της Επιμελητή/τριας, έχουν τα ωφελούμενα πρόσωπα που πληρούν τις προϋποθέσεις.
//                 </p>
//           </div>

//           <Stack className="pt-40 justify-center" direction="row" spacing={5}>
//             <Button variant="outlined" color="black" startIcon={<InfoIcon />}> Πληροφορίες για Γονείς </Button>
//             <Button variant="outlined" color="black" startIcon={<InfoIcon />}> Πληροφορίες για Επαγγελματίες </Button>
//           </Stack>


//         <footer className="absolute gap-52 bottom-0 w-full flex bg-white py-8 px-10 md:px-32">
//           <div>
//             <p className="font-bold ">ΕΠΙΚΟΙΝΩΝΙΑ</p>
//             <div className="flex gap-4">
//               <p className="font-semibold">Τηλέφωνα: 2103258080 - 2103258090</p>
//               <p className="font-semibold">Εmail:  ntantades@yeka.gr</p>
//             </div>
//           </div>
//           <img alt="eu" src={eu} className="hidden lg:block w-85 h-20"/>
//         </footer>

//     </div>
//   )
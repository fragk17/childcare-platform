import { Routes,Route } from "react-router"
import Home from "./routes/home"
import Plir_goneis from "./routes/plir_gonea"
import Plir_epagg from "./routes/plir_epagg"
import G_login from "./routes/g_login"
import E_login from "./routes/e_login"
import G_arxiki from "./routes/g_arxiki"
import E_arxiki from "./routes/e_arxiki"
import E_Dimiourgia_aggelias from "./routes/e_dimiourgia_aggelias"
import E_pliromes from "./routes/e_pliromes"
import G_pliromes from "./routes/g_pliromes"
import E_Reviews from "./routes/e_reviews"
import E_Requests from "./routes/e_requests"
import E_edit_bio from "./routes/e_edit_bio"
import E_istoriko_aggeliwn from "./routes/e_istoriko_aggeliwn"
import E_rantevou from "./routes/e_rantevou"
import Profil from "./routes/profil"
import Profil_Epej from "./routes/profil_epej"
import G_aitisi_endiaferontos from "./routes/g_aitisi_endiaferontos"
import G_istoriko_aitisewn from "./routes/g_istoriko_aitisewn"
import G_istoriko_rantevou from "./routes/g_istoriko_rantevou"
import G_synergasies from "./routes/g_synergasies"
import G_anazitisi_epaggelmatiwn from "./routes/g_anazitisi_epaggelmatiwn"

// https://www.figma.com/design/n77y1eExg5FYmlzcq20kI4/EAM?node-id=148-3317&t=lTpNKkdTKZ1vMwee-0

function App() {

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-500 to-white">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/plir_gon" element={<Plir_goneis />}/>
        <Route path="/plir_epagg" element={<Plir_epagg />}/>        


        <Route path="/g_login" element={<G_login />}/>
        <Route path="/g_arxiki" element={<G_arxiki />}/>
        <Route path="/g_pliromes" element={<G_pliromes />}/>
        <Route path="/g_aitisi_endiaferontos" element={<G_aitisi_endiaferontos />}/>
        <Route path="/g_istoriko_aitisewn" element={<G_istoriko_aitisewn />}/>
        <Route path="/g_istoriko_rantevou" element={<G_istoriko_rantevou />}/>
        <Route path="/g_synergasies" element={<G_synergasies />}/>
        <Route path="/g_anazitisi_epaggelmatiwn" element={<G_anazitisi_epaggelmatiwn />}/>
        


        <Route path="/e_login" element={<E_login />}/>
        <Route path="/e_arxiki" element={<E_arxiki />}/>
        <Route path="/e_dimiourgia_aggelias" element={<E_Dimiourgia_aggelias />}/>
        <Route path="/e_pliromes" element={<E_pliromes />}/>
        <Route path="/e_reviews" element={<E_Reviews />}/>
        <Route path="/e_requests" element={<E_Requests />}/>
        <Route path="/e_edit_bio" element={<E_edit_bio />}/>
        <Route path="/e_istoriko_aggeliwn" element={<E_istoriko_aggeliwn />}/>
        <Route path="/e_rantevou" element={<E_rantevou />}/>

        <Route path="/profil" element={<Profil />} />
        <Route path="/profil_epej" element={<Profil_Epej />} />
        

      </Routes>
    </div>
  )
}

export default App

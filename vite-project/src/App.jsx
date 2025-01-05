import { Routes,Route } from "react-router"
import Home from "./routes/home"
import Plir_goneis from "./routes/plir_gonea"
import Plir_epagg from "./routes/plir_epagg"
// import { Link } from "react-router-dom"
import G_login from "./routes/g_login"
import E_login from "./routes/e_login"
import G_arxiki from "./routes/g_arxiki"
import E_arxiki from "./routes/e_arxiki"
import Dimiourgia_aggelias from "./routes/dimiourgia_aggelias"
import E_pliromes from "./routes/e_pliromes"
import G_pliromes from "./routes/g_pliromes"

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
        <Route path="/e_login" element={<E_login />}/>
        <Route path="/g_arxiki" element={<G_arxiki />}/>
        <Route path="/e_arxiki" element={<E_arxiki />}/>
        <Route path="/dimiourgia_aggelias" element={<Dimiourgia_aggelias />}/>
        <Route path="/e_pliromes" element={<E_pliromes />}/>
        <Route path="/g_pliromes" element={<G_pliromes />}/>
      </Routes>
    </div>
  )
}

export default App

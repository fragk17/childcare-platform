import { Routes, Route } from "react-router";
import Home from "./routes/home";
import Plir_goneis from "./routes/plir_gonea"
import Plir_epagg from "./routes/plir_epagg"
import G_login from "./routes/g_login";
import E_login from "./routes/e_login";
import G_arxiki from "./routes/g_arxiki";
import G_pliromes from "./routes/g_pliromes";
import G_aitisi_endiaferontos from "./routes/g_aitisi_endiaferontos";
import G_istoriko_aitisewn from "./routes/g_istoriko_aitisewn";
import G_istoriko_rantevou from "./routes/g_istoriko_rantevou";
import G_synergasies from "./routes/g_synergasies";
import G_anazitisi_epaggelmatiwn from "./routes/g_anazitisi_epaggelmatiwn";
import E_arxiki from "./routes/e_arxiki";
import E_Dimiourgia_aggelias from "./routes/e_dimiourgia_aggelias";
import E_pliromes from "./routes/e_pliromes";
import E_Reviews from "./routes/e_reviews";
import E_Requests from "./routes/e_requests";
import E_edit_bio from "./routes/e_edit_bio";
import E_istoriko_aggeliwn from "./routes/e_istoriko_aggeliwn";
import E_rantevou from "./routes/e_rantevou";
import ProtectedRoute from "./components/ProtectedRoute";
import Proboli_profil from "./routes/proboli_profil";
import Profil from "./routes/profil"
import Profil_Epej from "./routes/profil_epej"
import Epej_Aggelias from "./routes/e_epej_aggelias";
import Epej_Aitisis from "./routes/g_epej_aitisis";




// https://eam-24-25.web.app/

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-500 to-white">
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/plir_gon" element={<Plir_goneis />}/>
        <Route path="/plir_epagg" element={<Plir_epagg />}/>   
        <Route path="/g_login" element={<G_login />} />
        <Route path="/e_login" element={<E_login />} />


        <Route
          path="/g_arxiki"
          element={
            <ProtectedRoute allowedRole="parent">
              <G_arxiki />
            </ProtectedRoute>
          }
        />
        <Route
          path="/g_pliromes"
          element={
            <ProtectedRoute allowedRole="parent">
              <G_pliromes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/g_aitisi_endiaferontos"
          element={
            <ProtectedRoute allowedRole="parent">
              <G_aitisi_endiaferontos />
            </ProtectedRoute>
          }
        />
        <Route
          path="/g_istoriko_aitisewn"
          element={
            <ProtectedRoute allowedRole="parent">
              <G_istoriko_aitisewn />
            </ProtectedRoute>
          }
        />
        <Route
          path="/epej_aitisis/:id"
          element={
            <ProtectedRoute allowedRole="parent">
              <Epej_Aitisis />
            </ProtectedRoute>
          }
        />

        <Route
          path="/g_istoriko_rantevou"
          element={
            <ProtectedRoute allowedRole="parent">
              <G_istoriko_rantevou />
            </ProtectedRoute>
          }
        />
        <Route
          path="/g_synergasies"
          element={
            <ProtectedRoute allowedRole="parent">
              <G_synergasies />
            </ProtectedRoute>
          }
        />
        <Route
          path="/g_anazitisi_epaggelmatiwn"
          element={
            <ProtectedRoute allowedRole="parent">
              <G_anazitisi_epaggelmatiwn />
            </ProtectedRoute>
          }
        />
        <Route
          path="/g_anazitisi_epaggelmatiwn/proboli_profil/:id"
          element={
            <ProtectedRoute allowedRole="parent">
              <Proboli_profil />
            </ProtectedRoute>
          }
        />



        <Route
          path="/e_arxiki"
          element={
            <ProtectedRoute allowedRole="professional">
              <E_arxiki />
            </ProtectedRoute>
          }
        />
        <Route
          path="/e_dimiourgia_aggelias"
          element={
            <ProtectedRoute allowedRole="professional">
              <E_Dimiourgia_aggelias />
            </ProtectedRoute>
          }
        />
        <Route
          path="/e_pliromes"
          element={
            <ProtectedRoute allowedRole="professional">
              <E_pliromes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/e_reviews"
          element={
            <ProtectedRoute allowedRole="professional">
              <E_Reviews />
            </ProtectedRoute>
          }
        />
        <Route
          path="/e_requests"
          element={
            <ProtectedRoute allowedRole="professional">
              <E_Requests />
            </ProtectedRoute>
          }
        />
        <Route
          path="/e_edit_bio"
          element={
            <ProtectedRoute allowedRole="professional">
              <E_edit_bio />
            </ProtectedRoute>
          }
        />
        <Route
          path="/e_istoriko_aggeliwn"
          element={
            <ProtectedRoute allowedRole="professional">
              <E_istoriko_aggeliwn />
            </ProtectedRoute>
          }
        />
        <Route
          path="/e_rantevou"
          element={
            <ProtectedRoute allowedRole="professional">
              <E_rantevou />
            </ProtectedRoute>
          }
        />
        <Route
          path="/epej_aggelias/:id"
          element={
            <ProtectedRoute allowedRole="professional">
              <Epej_Aggelias />
            </ProtectedRoute>
          }
        />





        <Route path="/profil" element={<Profil />} />
        <Route path="/profil_epej" element={<Profil_Epej />} />
      </Routes>
    </div>
  );
}

export default App;

//index.html if needed

// <!doctype html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <link rel="icon" type="image/svg+xml" href="/vite.svg" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Vite + React</title>
//     <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
//   </head>
//   <body>
//     <div id="root"></div>
//     <script type="module" src="/src/main.jsx"></script>
//   </body>
// </html>
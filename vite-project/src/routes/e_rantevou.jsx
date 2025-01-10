import React from 'react'
import Navbar_in from "../components/navbar_in";
import Footer from "../components/footer";
import BackButton from "../components/back_button"

const E_rantevou = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <BackButton />
      <Navbar_in />
      

      <Footer/>
    </div>
  )
}

export default E_rantevou

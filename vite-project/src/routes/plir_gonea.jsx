import { useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import React from 'react'
import BackButton from "../components/back_button"

const Plir_goneis = () =>  {

  return (
      <div>
        <Navbar />
        <BackButton />
        <div className="font-khula flex flex-col text-center justify-center px-10 pt-[30px] text-2xl leading-none" >
          <p className="font-bold">ΠΛΗΡΟΦΟΡΙΕΣ ΓΟΝΕΑ</p>
                <p className=" flex-grow pt-[30px]">
                  Πρόσβαση έχουν οι γονείς και τα πρόσωπα που έχουν την επιμέλεια βρεφών και νηπίων, καθώς και τα φυσικά πρόσωπα που επιθυμούν να εγγραφούν στο Μητρώο Επιμελητών. Δικαίωμα αίτησης χρηματοδότησης από τη Δράση «Νταντάδες της Γειτονιάς» για κάλυψη μέρους της αμοιβής της υπηρεσίας του/της Επιμελητή/τριας, έχουν τα ωφελούμενα πρόσωπα που πληρούν τις προϋποθέσεις.
                </p>
        </div>
        <Footer />
      </div>
  )
}

export default Plir_goneis
import React from 'react'
import eu from "../assets/eu.jpg"

const Footer = () => {
  return (
      <footer className=" w-full mt-auto bg-white py-5 px-10 md:px-32">
          < div className="flex justify-between items-center">
          <div>
            <p className="font-bold ">ΕΠΙΚΟΙΝΩΝΙΑ</p>
            <div className="flex gap-4">
              <p className="font-semibold">Τηλέφωνα: 2103258080 - 2103258090</p>
              <p className="font-semibold">Εmail:  ntantades@yeka.gr</p>
            </div>
            </div>
          <img alt="eu" src={eu} className="hidden lg:block w-85 h-20"/>
          </div>
      </footer>
  )
}

export default Footer

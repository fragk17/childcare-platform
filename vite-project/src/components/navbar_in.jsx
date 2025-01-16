// import React, { useState, useRef, useEffect } from 'react';
// import logo from "../assets/site_logo.jpg";
// import { Link } from "react-router-dom";

// const Navbar_in = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     const toggleDropdown = () => {
//         setIsDropdownOpen(!isDropdownOpen);
//     };

//     const closeDropdown = (e) => {
//         if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//             setIsDropdownOpen(false);
//         }
//     };

//     useEffect(() => {
//         document.addEventListener("mousedown", closeDropdown);
//         return () => document.removeEventListener("mousedown", closeDropdown);
//     }, []);

//     return (
//         <div>
//             <header className='flex justify-between items-center text-center text-black py-3.5 px-8 md:px-20 bg-white drop-shadow-md'>
//                 <a href="/home" className='flex gap-6 items-center'>
//                     <img alt="logo" src={logo} className="w-16 h-16 hover:scale-110 transition-all" />
//                     <p>Υπηρεσία Φροντίδας Βρεφών και Νηπίων</p>
//                 </a>
//                 <div className='flex items-center gap-6'>
//                     <Link to="/help" className="text-base font-semibold hover:underline">Βοήθεια</Link>
//                     <div className="relative" ref={dropdownRef}>
//                         <button onClick={toggleDropdown} className="flex items-center gap-2 p-2 border rounded-full hover:bg-gray-200">
//                             <i className='bx bx-user text-4xl'></i>
//                         </button>
//                         {isDropdownOpen && (
//                             <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
//                                 <Link to="/profil" className="block px-4 py-2 text-sm hover:bg-gray-100">Προφίλ</Link>
//                                 <Link to="/" className="block px-4 py-2 text-sm hover:bg-gray-100">Αποσύνδεση</Link>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </header>
//         </div>
//     );
// };

// export default Navbar_in;



import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { FIREBASE_AUTH } from "../config/firebase"; // Ensure this is your Firebase auth config
import logo from "../assets/site_logo.jpg";

const Navbar_in = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate(); // Used to navigate after logging out

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", closeDropdown);
        return () => document.removeEventListener("mousedown", closeDropdown);
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(FIREBASE_AUTH); // Log out the user
            localStorage.removeItem("userRole"); // Clear user role from local storage
            navigate("/home"); // Navigate to the home page after logging out
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    return (
        <div>
            <header className='flex justify-between items-center text-center text-black py-3.5 px-8 md:px-20 bg-white drop-shadow-md'>
                <a href="/home" className='flex gap-6 items-center'>
                    <img alt="logo" src={logo} className="w-16 h-16 hover:scale-110 transition-all" />
                    <p>Υπηρεσία Φροντίδας Βρεφών και Νηπίων</p>
                </a>
                <div className='flex items-center gap-6'>
                    <Link to="/help" className="text-base font-semibold hover:underline">Βοήθεια</Link>
                    <div className="relative" ref={dropdownRef}>
                        <button onClick={toggleDropdown} className="flex items-center gap-2 p-2 border rounded-full hover:bg-gray-200">
                            <i className='bx bx-user text-4xl'></i>
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                                <Link to="/profil" className="block px-4 py-2 text-sm hover:bg-gray-100">Προφίλ</Link>
                                <button
                                    onClick={handleLogout}
                                    className="block w-full text-center px-4 py-2 text-sm hover:bg-gray-100"
                                >
                                    Αποσύνδεση
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar_in;

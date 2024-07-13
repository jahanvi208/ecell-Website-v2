import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className="flex justify-between items-center p-4 bg-black">
                    <div className="flex items-center space-x-2">
                        <img src="" alt="E-cell logo" className="h-10 w-10" />
                        <span className="text-yellow-500 font-bold">E-cell</span>
                    </div>
                    <ul className="flex space-x-8 text-yellow-500">
                        <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
                        <li><Link to="/" className="hover:text-yellow-300">Events</Link></li>
                        <li><Link to="/teams" className="hover:text-yellow-300">Team</Link></li>
                        <li><Link to="/" className="hover:text-yellow-300">Contact Us</Link></li>
                    </ul>
                </nav>
        </div>
    )
}

export default Navbar
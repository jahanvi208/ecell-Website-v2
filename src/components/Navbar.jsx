import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="flex justify-between items-center p-4 bg-black">
                    <div className="flex items-center space-x-2">
                        <img src="" alt="E-cell logo" className="h-10 w-10" />
                        <span className="text-yellow-500 font-bold">E-cell</span>
                    </div>
                    <ul className="flex space-x-8 text-yellow-500">
                        <li><a href="#" className="hover:text-yellow-300">Home</a></li>
                        <li><a href="#" className="hover:text-yellow-300">Events</a></li>
                        <li><a href="#" className="hover:text-yellow-300">Team</a></li>
                        <li><a href="#" className="hover:text-yellow-300">Contact Us</a></li>
                    </ul>
                </nav>
        </div>
    )
}

export default Navbar
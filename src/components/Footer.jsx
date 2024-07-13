import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <div className="bg-black text-white py-8 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center mb-4">
                            <img src="https://placehold.co/50x50" alt="E-cell logo" className="mr-2"/>
                                <span className="text-yellow-500 font-bold">E cell</span>
                        </div>
                        <p className="mb-4">Experience financial transformation like never before with FIntec.</p>
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/company/ecell-abes-ec/mycompany/" className="text-yellow-500"><img src="https://placehold.co/24x24" alt="linkedin icon"/></a>
                            <a href="https://www.instagram.com/ecell_abesec/" className="text-yellow-500"><img src="https://placehold.co/24x24" alt="instagram icon"/></a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Page</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-yellow-500">Home</Link></li>
                            <li><Link to="/events" className="text-zinc-400 hover:text-yellow-500">Events</Link></li>
                            <li><Link to="/contactus" className="text-zinc-400 hover:text-yellow-500">Contact</Link></li>
                            <li><Link to="/teams" className="text-zinc-400 hover:text-yellow-500">Team</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Let's Connect</h3>
                        <form>
                            <input type="email" placeholder="name@email.com" className="w-full p-2 mb-4 bg-zinc-800 text-zinc-400 rounded-md"/>
                                <button type="submit" className="w-full p-2 bg-yellow-500 text-black font-bold rounded-md">Subscribe</button>
                        </form>
                    </div>
                </div>
                <hr style={{width:'20rem', margin: '2rem auto 10px auto'}} />
                <div className="text-center text-zinc-500">
                    © 2024 E-Cell. All rights reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer
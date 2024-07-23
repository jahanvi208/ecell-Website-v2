import React from 'react'
import Activities from '../components/Activities'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Testimonial from '../components/Testimonial'
import Networking from '../components/Networking'
import ScrollProgress from '../components/ScrollProgress'
import { Fade, Slide } from 'react-awesome-reveal'

function Home() {
    return (
        <div>
            <ScrollProgress />
            <div className=" bg-black text-white flex flex-col" style={{minHeight:'93vh'}}>
                {/* <Navbar /> */}
                <div className="flex-grow flex flex-col justify-center items-center text-center px-4">
                    <div className="bg-yellow-500 text-black rounded-full px-4 py-1 mb-4">
                        <Fade cascade>
                            <span>From Ideas to Imprint</span>
                        </Fade>
                    </div>
                    <Fade cascade="true">
                        <h1 className="text-4xl md:text-6xl font-bold mb-2">Welcome To</h1>
                        <h2 className="text-4xl md:text-6xl font-bold text-yellow-500 mb-4">Entrepreneurship Cell</h2>
                        <p className="text-zinc-400 mb-8">ABES Engineering College, Ghaziabad</p>
                        <div className="flex items-center justify-center">
                            <input type="email" placeholder="example@gmail.com" className="p-3 rounded-l-lg bg-zinc-700 text-white focus:outline-none" />
                            <button className="bg-yellow-500 text-black p-3 rounded-r-lg">Let's Connect</button>
                        </div>
                    </Fade>
                </div>
            </div>
            {/* =============================================================================== */}
            <div className="bg-zinc-900 text-white py-12 px-4">
                <div className="text-center mb-8">
                    <button className="bg-yellow-500 text-black px-4 py-2 rounded-full mb-4">About US</button>
                    <h1 className="text-4xl font-bold">Who We Are</h1>
                    <p className="mt-4 max-w-2xl mx-auto">
                        We are the Entrepreneurship Cell ABES Engineering College, a group run by students with the mission of promoting entrepreneurship among students and the general public. We think that being an entrepreneur involves more than just starting a firm; it also involves adding value, resolving issues, and having a good influence.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 ">
                    <Slide direction="left">
                        <div className="bg-zinc-800 p-6 rounded-lg">
                            <div className="flex items-center mb-4">
                                <img alt="mindset" src="https://placehold.co/40x40" className="mr-4" />
                                <h2 className="text-xl font-semibold">Mindset</h2>
                            </div>
                            <p>
                                Embrace a mindset of creativity, risk-taking, innovation, and learning from mistakes.
                            </p>
                        </div>
                    </Slide>
                    <Slide direction='up'>
                        <div className="bg-zinc-800 p-6 rounded-lg">
                            <div className="flex items-center mb-4">
                                <img alt="mission" src="https://placehold.co/40x40" className="mr-4" />
                                <h2 className="text-xl font-semibold">Mission</h2>
                            </div>
                            <p>
                                Inspire and motivate students to pursue their entrepreneurial dreams.
                            </p>
                        </div>
                    </Slide>
                    <Slide direction="right">
                        <div className="bg-zinc-800 p-6 rounded-lg">
                            <div className="flex items-center mb-4">
                                <img alt="vision" src="https://placehold.co/40x40" className="mr-4" />
                                <h2 className="text-xl font-semibold">Vision</h2>
                            </div>
                            <p>
                                Create a vibrant and dynamic entrepreneurial culture on campus and beyond.
                            </p>
                        </div>
                    </Slide>
                </div>
            </div>

            <Activities />
            <Networking />
            <Testimonial />

            <div className="flex items-center justify-center py-10 bg-black">
                <div className="bg-zinc-800 text-white rounded-lg p-8 max-w-l mx-auto text-center">
                    <h1 className="text-5xl md:text-5xl font-bold mb-5">Have Ideas in mind? Let's connect and discuss</h1>
                    <p className="text-zinc-400 md:text-2xl mb-6">Join thousands of teams worldwide who trust Saasta to simplify their project workflows and drive success.</p>
                    <div className="flex items-center justify-center">
                        <input type="email" placeholder="example@gmail.com" className="p-3 rounded-l-lg bg-zinc-700 text-white focus:outline-none" />
                        <button className="bg-yellow-500 text-black p-3 rounded-r-lg">Let's Connect</button>
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </div>
    )
}

export default Home

import React from 'react'
// import Activities from '../components/Activities'
// import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Testimonial from '../components/Testimonial'
// import Networking from '../components/Networking'
import Aboutus from '../components/Aboutus'
import Idea from '../components/Idea'
import { Fade, Slide } from 'react-awesome-reveal'
import { GiPolarStar } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa6";
import { PiLinkedinLogoBold } from "react-icons/pi";

function Teams() {
    return (
        <div>
            <div className=" bg-black text-white flex flex-col" style={{ minHeight: '70vh' }}>
                {/* <Navbar /> */}
                <div className="flex-grow flex flex-col justify-center items-center text-center px-4">
                    <Fade cascade="true">
                        <h1 className="text-4xl md:text-6xl font-bold mb-2"> <span className='text-[#ffde59]'>Empowering</span> Future Entrepreneus</h1>
                        <h2 className="text-4xl md:text-6xl font-bold mb-4"> with Right <span className='text-[#ffde59]'>Environment</span></h2>
                        <p className="text-zinc-400 mb-8">Discover Our Story, Mission, and Commitment to Streamlining Project Workflows</p>
                    </Fade>
                </div>
            </div>
            {/* =============================================================================== */}
            <Aboutus />
            <div className="text-white py-12 px-4">
                <div className="text-center mb-8">
                    <div style={{ backgroundColor: '#141412', color: '#ffde59', border: '1px solid #26250F' }} className=" rounded-full px-4 py-1 mb-4 w-fit m-auto">
                        <Fade cascade>
                            <span className='flex items-center gap-2 text-xl'><GiPolarStar />TEAM</span>
                        </Fade>
                    </div>
                    <h1 className="text-5xl font-bold">Introduce our <span className='text-[#ffed59]'>Team</span></h1>
                </div>
                {/* <img src="https://placehold.co/150x150" alt="example" className="mb-4 rounded-full" /> */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-2 bg-background">
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src="https://placehold.co/150x150" alt="example" className="mb-4 rounded-full" />
                        <h3 className="text-3xl font-semibold">Yash Mishra</h3>
                        <p className="text-[#ffed59]">President</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a href="#" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a href="#" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src="https://placehold.co/150x150" alt="example" className="mb-4 rounded-full" />
                        <h3 className="text-3xl font-semibold">Ayushmaan Kushwaha</h3>
                        <p className="text-[#ffed59]">Vice President</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a href="#" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a href="#" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src="https://placehold.co/150x150" alt="example" className="mb-4 rounded-full" />
                        <h3 className="text-3xl font-semibold">Sarthak Gupta</h3>
                        <p className="text-[#ffed59]">Treasurer</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a href="#" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a href="#" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src="https://placehold.co/150x150" alt="example" className="mb-4 rounded-full" />
                        <h3 className="text-3xl font-semibold">Ayush Tomer</h3>
                        <p className="text-[#ffed59]">TechOps Coordinator</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a href="#" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a href="#" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src="https://placehold.co/150x150" alt="example" className="mb-4 rounded-full" />
                        <h3 className="text-3xl font-semibold">Aditya Pandey</h3>
                        <p className="text-[#ffed59]">Events Coordinator</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a href="#" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a href="#" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src="https://placehold.co/150x150" alt="example" className="mb-4 rounded-full" />
                        <h3 className="text-3xl font-semibold">Dhruv Ghangwani</h3>
                        <p className="text-[#ffed59]">Social Media Coordinator</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a href="#" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a href="#" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src="https://placehold.co/150x150" alt="example" className="mb-4 rounded-full" />
                        <h3 className="text-3xl font-semibold">Abhay Bansal</h3>
                        <p className="text-[#ffed59]">Marketing Coordinator</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a href="#" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a href="#" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src="https://placehold.co/150x150" alt="example" className="mb-4 rounded-full" />
                        <h3 className="text-3xl font-semibold">Shikhar Shaurya</h3>
                        <p className="text-[#ffed59]">Filmography Coordinator</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a href="#" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a href="#" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src="https://placehold.co/150x150" alt="example" className="mb-4 rounded-full" />
                        <h3 className="text-3xl font-semibold">Akshita Singh</h3>
                        <p className="text-[#ffed59]">Student Coordinator</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a href="#" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a href="#" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>



            <Testimonial />
            {/* <Idea /> */}

            {/* <Footer /> */}
        </div>
    )
}

export default Teams
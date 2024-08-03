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
import president from '../assets/president.png'
import vmc from '../assets/vmc.png'
import vp from '../assets/vp.png'
import sc from '../assets/sc.png'
import t from '../assets/t.png'
import to from '../assets/to.png'
import ec from '../assets/ec.png'
import md from '../assets/md.jpg'

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
                        <img src={president} alt="example" className="mb-4 rounded-full w-[15rem] " />
                        <h3 className="text-3xl font-semibold">Yash Mishra</h3>
                        <p className="text-[#ffed59]">President</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/yashprime02/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/yash-mishra-b2290220a/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={vp} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Ayushmaan Kushwaha</h3>
                        <p className="text-[#ffed59]">Vice President</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/ayushman_kushwaha25/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/ayushman-kushwaha-19a938227/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={t} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Sarthak Gupta</h3>
                        <p className="text-[#ffed59]">Treasurer</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/sarthak_pvt193/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/sarthak-gupta-116358238/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={to} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Ayush Tomer</h3>
                        <p className="text-[#ffed59]">TechOps Coordinator</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/ayushtomer_/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/ayu219/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={ec} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Aditya Pandey</h3>
                        <p className="text-[#ffed59]">Events Coordinator</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/adityapandey0502/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/aditya-pandey0502/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src="https://placehold.co/150x150" alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Dhruv Ghangwani</h3>
                        <p className="text-[#ffed59]">Social Media Coordinator</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/dhruv_gangwani/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/dhruv-gangwani-93a261249/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={md} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Abhay Bansal</h3>
                        <p className="text-[#ffed59]">Marketing Coordinator</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://instagram.com/baniya_guy/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/abhaybansal1/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={vmc} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Shikhar Shaurya</h3>
                        <p className="text-[#ffed59]">Filmography Coordinator</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/shikhar_shaurya/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/shikhar-shaurya-62b0bb1bb/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={sc} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Akshita Singh</h3>
                        <p className="text-[#ffed59]">Student Coordinator</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/_akshita_.singhh/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/akshita-singh-801a44258/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
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
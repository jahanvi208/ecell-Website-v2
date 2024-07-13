import React from 'react'
// import Activities from '../components/Activities'
// import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Testimonial from '../components/Testimonial'
// import Networking from '../components/Networking'
import Aboutus from '../components/Aboutus'

function Teams() {
    return (
        <div>
            <div className=" bg-black text-white flex flex-col" style={{minHeight:'93vh'}}>
                {/* <Navbar /> */}
                <div className="flex-grow flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-2">Empowering Future Entrepreneus</h1>
                    <h2 className="text-4xl md:text-6xl font-bold text-yellow-500 mb-4"> with Right Environment</h2>
                    <p className="text-zinc-400 mb-8">Discover Our Story, Mission, and Commitment to Streamlining Project Workflows</p>

                </div>
            </div>
            {/* =============================================================================== */}
            <Aboutus />
            <div className="bg-zinc-900 text-white py-12 px-4">
                <div className="text-center mb-8">
                    <button className="bg-yellow-500 text-black px-4 py-2 rounded-full mb-4">Our Team</button>
                    <h1 className="text-4xl font-bold">Introduce our Team</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
                    <div className="bg-zinc-800 p-6 rounded-lg">
                        <div className=" rounded-lg h-64 relative">
                            <img src="https://placehold.co/150x150" alt="example" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full" />
                        </div>
                        <div className="flex items-center mb-4">
                            <div>
                                <h2 className="text-xl font-semibold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yash Mishra</h2>
                                <p className="text-left mt-2 mb-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;President</p>
                            </div>

                        </div>
                        <p>
                            John is a seasoned entrepreneur with over a decade of experience in the tech industry. As CEO and co-founder of Saasta.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-link text-xl"></i>
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin text-xl"></i>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram text-xl"></i>
                            </a>
                        </div>
                    </div>
                    <div className="bg-zinc-800 p-6 rounded-lg">
                        <div className=" rounded-lg h-64 relative">
                            <img src="https://placehold.co/150x150" alt="example" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full" />
                        </div>
                        <div className="flex items-center mb-4">
                            <div>
                                <h2 className="text-xl font-semibold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ayushmaan Kushwaha</h2>
                                <p className="text-left mt-2 mb-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vice President</p>
                            </div>
                        </div>
                        <p>
                            John is a seasoned entrepreneur with over a decade of experience in the tech industry. As CEO and co-founder of Saasta.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-link text-xl"></i>
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin text-xl"></i>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram text-xl"></i>
                            </a>
                        </div>
                    </div>
                    <div className="bg-zinc-800 p-6 rounded-lg">
                        <div className=" rounded-lg h-64 relative">
                            <img src="https://placehold.co/150x150" alt="example" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full" />
                        </div>
                        <div className="flex items-center mb-4">
                            <div>
                                <h2 className="text-xl font-semibold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sarthak Gupta</h2>
                                <p className="text-left mt-2 mb-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Treasurer</p>
                            </div>
                        </div>
                        <p>
                            John is a seasoned entrepreneur with over a decade of experience in the tech industry. As CEO and co-founder of Saasta.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-link text-xl"></i>
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin text-xl"></i>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram text-xl"></i>
                            </a>
                        </div>
                    </div>
                    <div className="bg-zinc-800 p-6 rounded-lg">
                        <div className=" rounded-lg h-64 relative">
                            <img src="https://placehold.co/150x150" alt="example" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full" />
                        </div>
                        <div className="flex items-center mb-4">
                            <div>
                                <h2 className="text-xl font-semibold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ayush Tomer</h2>
                                <p className="text-left mt-2 mb-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TechOps Coordinator</p>
                            </div>
                        </div>
                        <p>
                            John is a seasoned entrepreneur with over a decade of experience in the tech industry. As CEO and co-founder of Saasta.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-link text-xl"></i>
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin text-xl"></i>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram text-xl"></i>
                            </a>
                        </div>
                    </div>
                    <div className="bg-zinc-800 p-6 rounded-lg">
                        <div className=" rounded-lg h-64 relative">
                            <img src="https://placehold.co/150x150" alt="example" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full" />
                        </div>
                        <div className="flex items-center mb-4">
                            <div>
                                <h2 className="text-xl font-semibold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aditya Pandey</h2>
                                <p className="text-left mt-2 mb-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Events Coordinator</p>
                            </div>
                        </div>
                        <p>
                            John is a seasoned entrepreneur with over a decade of experience in the tech industry. As CEO and co-founder of Saasta.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-link text-xl"></i>
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin text-xl"></i>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram text-xl"></i>
                            </a>
                        </div>
                    </div>
                    <div className="bg-zinc-800 p-6 rounded-lg">
                        <div className=" rounded-lg h-64 relative">
                            <img src="https://placehold.co/150x150" alt="example" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full" />
                        </div>
                        <div className="flex items-center mb-4">
                            <div>
                                <h2 className="text-xl font-semibold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dhruv Ghangwani</h2>
                                <p className="text-left mt-2 mb-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Social Media Coordinator</p>
                            </div>
                        </div>
                        <p>
                            John is a seasoned entrepreneur with over a decade of experience in the tech industry. As CEO and co-founder of Saasta.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-link text-xl"></i>
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin text-xl"></i>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram text-xl"></i>
                            </a>
                        </div>
                    </div>
                    <div className="bg-zinc-800 p-6 rounded-lg">
                        <div className=" rounded-lg h-64 relative">
                            <img src="https://placehold.co/150x150" alt="example" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full" />
                        </div>
                        <div className="flex items-center mb-4">
                            <div>
                                <h2 className="text-xl font-semibold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Abhay Bansal</h2>
                                <p className="text-left mt-2 mb-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Marketing Coordinator</p>
                            </div>
                        </div>
                        <p>
                            John is a seasoned entrepreneur with over a decade of experience in the tech industry. As CEO and co-founder of Saasta.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-link text-xl"></i>
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin text-xl"></i>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram text-xl"></i>
                            </a>
                        </div>
                    </div>
                    <div className="bg-zinc-800 p-6 rounded-lg">
                        <div className=" rounded-lg h-64 relative">
                            <img src="https://placehold.co/150x150" alt="example" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full" />
                        </div>
                        <div className="flex items-center mb-4">
                            <div>
                                <h2 className="text-xl font-semibold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shikhar Shaurya</h2>
                                <p className="text-left mt-2 mb-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Filmography Coordinator</p>
                            </div>
                        </div>
                        <p>
                            John is a seasoned entrepreneur with over a decade of experience in the tech industry. As CEO and co-founder of Saasta.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-link text-xl"></i>
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin text-xl"></i>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram text-xl"></i>
                            </a>
                        </div>
                    </div>
                    <div className="bg-zinc-800 p-6 rounded-lg">
                        <div className=" rounded-lg h-64 relative">
                            <img src="https://placehold.co/150x150" alt="example" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full" />
                        </div>
                        <div className="flex items-center mb-4">
                            <div>
                                <h2 className="text-xl font-semibold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Akshita Singh</h2>
                                <p className="text-left mt-2 mb-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Student Coordinator</p>
                            </div>
                        </div>
                        <p>
                            John is a seasoned entrepreneur with over a decade of experience in the tech industry. As CEO and co-founder of Saasta.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-link text-xl"></i>
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin text-xl"></i>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram text-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>



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

export default Teams
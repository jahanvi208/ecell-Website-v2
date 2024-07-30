import React from 'react'
import Card from './Card'
import { Slide, Fade } from 'react-awesome-reveal'
import { GiPolarStar } from "react-icons/gi";

function Testimonial() {
    return (
        <div>
            <div className="bg-black text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className='flex flex-col items-center'>
                        <div style={{ backgroundColor: '#141412', color: '#ffde59', border: '1px solid #26250F' }} className=" rounded-full px-4 py-1 mb-4 w-fit">
                            <Fade cascade>
                                <span className='flex items-center gap-2'><GiPolarStar />TESTIMONIALS</span>
                            </Fade>
                        </div>
                        <h2 className="text-5xl font-semibold">Testimonials About Us</h2>
                    </div>

                    <div className="mt-10 grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
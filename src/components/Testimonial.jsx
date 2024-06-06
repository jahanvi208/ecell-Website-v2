import React from 'react'
import Card from './Card'

function Testimonial() {
    return (
        <div>
            <div className="bg-black text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <span className="inline-block bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold mb-4">TESTIMONIALS</span>
                        <h2 className="text-3xl font-extrabold">Testimonials About Us</h2>
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
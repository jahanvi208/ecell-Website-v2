// src/components/EventSection.js
import React from 'react';

const events = [
    {
        title: "The Entrepreneurship Show 2023",
        date: "February 27th '23",
        imgSrc: "path_to_image1",
    },
    {
        title: "Navy Visit-2023",
        date: "March 15th '23",
        imgSrc: "path_to_image2",
    },
    {
        title: "The Entrepreneurship Show 2022",
        date: "April 10th '22",
        imgSrc: "path_to_image3",
    },
];

const EventCard = ({ title, date, imgSrc }) => {
    return (
        <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg">
            <img src={imgSrc} alt={title} className="w-full h-64 object-cover" />
            <div className="bg-black p-4">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-gray-400">{date}</p>
                <button className="mt-4 bg-transparent border border-white py-2 px-6 rounded-full hover:border-black hover:bg-yellow-500 hover:text-black">Read more</button>
            </div>
        </div>
    );
};

const EventSection = () => {
    return (
        <section className="bg-black py-32 px-4 md:px-8 lg:px-16 w-full">
            <div className="container mx-auto text-center mb-10 max-w-screen-xl">
                <div className="flex justify-center">
                    <button className="bg-gray-920 text-yellow-600 font-bold py-2 px-4 rounded-full border border-gray-800 flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="yellow" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0l2.09 6.26L20 9.27l-5 3.64 1.91 6.16L12 15l-4.91 3.64L9 12.91l-5-3.64 5.91-.99L12 0z" />
                        </svg>
                        EVENTS
                    </button>
                </div>
                <h1 className="text-7xl text-white font-bold mt-4">Entrepreneurship Cell ABESEC</h1>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-xl">
                {events.map((event, index) => (
                    <EventCard
                        key={index}
                        title={event.title}
                        date={event.date}
                        imgSrc={event.imgSrc}
                    />
                ))}
            </div>

            <div className="flex items-center justify-center mt-20 py-10 bg-black">
                <div className="bg-zinc-800 text-white rounded-lg p-8 max-w-l mx-auto text-center">
                    <h1 className="text-5xl md:text-5xl font-bold mb-5">Have Ideas in mind? Let's connect and discuss</h1>
                    <p className="text-zinc-400 md:text-2xl mb-6">Join thousands of teams worldwide who trust Saasta to simplify their project workflows and drive success.</p>
                    <div className="flex items-center justify-center">
                        <input type="email" placeholder="example@gmail.com" className="p-3 rounded-l-lg bg-zinc-700 text-white focus:outline-none" />
                        <button className="bg-yellow-500 text-black p-3 rounded-r-lg">Let's Connect</button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default EventSection;

// src/components/EventSection.js
import React from 'react';
import { Slide, Fade } from 'react-awesome-reveal';
import Idea from './Idea';
import { GiPolarStar } from "react-icons/gi";


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
        <Slide direction='down' cascade>
            <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg">
                <img src={imgSrc} alt={title} className="w-full h-64 object-cover" />
                <div className="bg-black p-4">
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="text-gray-400">{date}</p>
                    <button className="mt-4 bg-transparent border border-white py-2 px-6 rounded-full hover:border-black hover:bg-yellow-500 hover:text-black">Read more</button>
                </div>
            </div>
        </Slide>
    );
};

const EventSection = () => {
    return (
        <>
            <section className="bg-black py-32 px-4 md:px-8 lg:px-16 w-full">
                <div className="container mx-auto text-center mb-10 max-w-screen-xl">
                    <div style={{ backgroundColor: '#141412', color: '#ffde59', border: '1px solid #26250F' }} className=" rounded-full px-4 py-1 mb-4 m-auto w-fit">
                        <Fade cascade>
                            <span className='flex items-center gap-2'><GiPolarStar />EVENTS</span>
                        </Fade>
                    </div>
                    <Fade>
                        <h1 className="text-7xl text-white font-bold mt-4">Entrepreneurship Cell ABESEC</h1>
                    </Fade>
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


            </section>
            <Idea />
        </>
    );
};

export default EventSection;

import React from 'react';

const EventDetails = () => {
  const event = {
    name: 'The Enterpreneurship Show 2023',
    image: 'https://framerusercontent.com/images/TdSg8JYhQTUcAIvt2xkESUid1OI.jpg?scale-down-to=1024',
    details: 'This is the details of the sample event. It includes information about the event such as date, time, location, and other relevant details that attendees might find useful.'
  };

  return (
    <div className="bg-black text-white p-10 min-h-screen flex flex-col items-center justify-start">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10 mt-20">{event.name}</h1>
      <p className="text-lg max-w-3xl">{event.details}</p>
      <img src={event.image} alt={event.name} className="w-full sm:w-3/4 md:w-1/2 h-auto max-h-64 sm:max-h-80 md:max-h-96 mb-5 rounded-lg" />
      <p className="text-lg max-w-3xl">{event.details}</p>
    </div>
  );
  
  
  
};

export default EventDetails;

import React from "react";
import { useParams } from "react-router-dom";

// Component to display individual event details
const EventDetailsPage = () => {
  const { id } = useParams();
  const event = eventsData.find((event) => event.id === parseInt(id));

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-8">{event.title}</h1>
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-96 object-cover mb-6"
      />
      <p className="text-gray-500 text-lg mb-4">{event.date}</p>
      <p className="text-gray-700 text-xl">{event.description}</p>
    </div>
  );
};

export default EventDetailsPage;

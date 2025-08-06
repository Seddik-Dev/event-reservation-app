import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Star } from "lucide-react";
import { getAllEvents } from "@/api/eventApi";
import AboutSection from "./AboutSection";
import ContactUs from "./ContactUs";

function EventSection() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getAllEvents();

        setEvents(data);
      } catch (err) {
        console.error("Failed to fetch events", err);
      }
    };
    fetchEvents();
  }, []);
  return (
    <div>
      <section id="events" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Featured Events
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in-up animation-delay-200">
              Discover the most exciting events happening near you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card
                key={event._id} // use _id from MongoDB
                className="group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <CardContent className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {event.title}
                  </h3>

                  {/* Event Details */}
                  <div className="space-y-2 mb-4">
                    {/* Date */}
                    <div className="flex items-center text-gray-600">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">
                        {new Date(event.date.start).toLocaleDateString()} -{" "}
                        {new Date(event.date.end).toLocaleDateString()}
                      </span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center text-gray-600">
                      <MapPin size={16} className="mr-2" />
                      <span className="text-sm">
                        {event.location.city}, {event.location.country}
                      </span>
                    </div>

                    {/* Seats & Price */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-600">
                        <Users size={16} className="mr-2" />
                        <span className="text-sm">
                          {event.availableSeats} seats available
                        </span>
                      </div>
                      <div className="flex items-center text-purple-600 font-semibold">
                        {event.price.amount} {event.price.currency}
                      </div>
                    </div>
                  </div>

                  {/* Reserve Button */}
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 transform group-hover:scale-105">
                    Reserve Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <AboutSection id="about"/>
      <ContactUs id="contact"/>
    </div>
  );
}

export default EventSection;

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Star } from "lucide-react";
import { getAllEvents } from "@/api/eventApi";
import AboutSection from "./AboutSection";
import ContactUs from "./ContactUs";
import { Link } from "react-router-dom";
import { EVENT_DETAILS_ROUTE } from "@/router/routes";
import { Menu, X, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import eventImage from "@/assets/event.jpg";

export default function LandingPage() {
  const [events, setEvents] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled
              ? "bg-white/95 dark:bg-[#181F2A]/95 backdrop-blur-md shadow-lg"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <h1
                  className={`text-2xl font-bold transition-colors duration-300 ${
                    isScrolled ? "text-gray-900 dark:text-white" : "text-white"
                  }`}
                >
                  EventBook
                </h1>
              </div>
              {/* Desktop Menu */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  {["Home", "Events", "About", "Contact"].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-purple-600 ${
                        isScrolled
                          ? "text-gray-700 dark:text-gray-200"
                          : "text-white"
                      }`}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
              {/* Dark Mode Toggle */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setDark((d) => !d)}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                  aria-label="Toggle dark mode"
                >
                  {dark ? "🌙" : "☀️"}
                </button>
                {/* Mobile menu button */}
                <div className="md:hidden">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`p-2 rounded-md transition-colors duration-300 ${
                      isScrolled
                        ? "text-gray-700 dark:text-gray-200"
                        : "text-white"
                    }`}
                  >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/95 dark:bg-[#181F2A]/95 backdrop-blur-md">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {["Home", "Events", "About", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-purple-600 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
            style={{
              backgroundImage: `url(${eventImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              Book Your Next Event Easily
            </h1>
            <p className="text-xl sm:text-2xl mb-8 opacity-90 animate-fade-in-up animation-delay-200">
              Discover amazing events, connect with like-minded people, and
              create unforgettable memories
            </p>
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-400"
            >
              Explore Events
            </Button>
          </div>
        </section>
        <section id="events" className="py-20 bg-gray-50 dark:bg-[#181F2A]">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-in-up text-gray-900 dark:text-white">
                Featured Events
              </h2>
              <p className="text-xl animate-fade-in-up animation-delay-200 text-gray-600 dark:text-gray-300">
                Discover the most exciting events happening near you
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
              {events.map((event, index) => (
                <Card
                  key={event._id}
                  className="group cursor-pointer transition-all duration-300 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between min-h-[420px] border-0 bg-white dark:bg-[#232B3B]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 rounded-t-2xl"
                    />
                  </div>

                  <CardContent className="flex flex-col flex-1 p-5 justify-between">
                    {/* Title */}
                    <h3 className="text-lg font-bold mb-2 text-center group-hover:text-purple-400 transition-colors duration-300 text-gray-900 dark:text-white">
                      {event.title}
                    </h3>

                    {/* Event Details */}
                    <div className="space-y-2 mb-4">
                      {/* Location */}
                      <div className="flex items-center justify-center text-gray-500 dark:text-gray-300">
                        <MapPin size={16} className="mr-2" />
                        <span className="text-sm">
                          {event.location.city}, {event.location.country}
                        </span>
                      </div>
                      {/* Date */}
                      <div className="flex items-center justify-center text-gray-500 dark:text-gray-300">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">
                          {new Date(event.date.start).toLocaleDateString()}{" "}
                          {event.date.start !== event.date.end &&
                            `- ${new Date(
                              event.date.end
                            ).toLocaleDateString()}`}
                        </span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-center mb-4">
                      <div className="flex items-center text-white font-bold text-lg bg-purple-600 dark:bg-purple-600 px-4 py-2 rounded-xl shadow">
                        {event.price.amount} {event.price.currency}
                      </div>
                    </div>

                    {/* Reserve Button */}
                    <Link to={EVENT_DETAILS_ROUTE.replace(":id", event._id)}>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform group-hover:scale-105 shadow-md">
                        Reserve Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <AboutSection id="about" />
        <ContactUs id="contact" />
        <footer id="contact" className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">EventBook</h3>
                <p className="text-gray-400 mb-6 max-w-md">
                  Your premier destination for discovering and booking amazing
                  events. Join thousands of event-goers who trust us for their
                  entertainment needs.
                </p>
                <div className="flex space-x-4">
                  {[Facebook, Twitter, Instagram, Linkedin].map(
                    (Icon, index) => (
                      <a
                        key={index}
                        href="#"
                        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
                      >
                        <Icon size={20} />
                      </a>
                    )
                  )}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {[
                    "Home",
                    "Events",
                    "About",
                    "Contact",
                    "Privacy Policy",
                    "Terms of Service",
                  ].map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                <div className="space-y-2 text-gray-400">
                  <p>123 Event Street</p>
                  <p>San Francisco, CA 94102</p>
                  <p>Phone: (555) 123-4567</p>
                  <p>Email: info@eventbook.com</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 EventBook. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

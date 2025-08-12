import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Users, Star, ArrowRight, CheckCircle } from "lucide-react";
import { getAllEvents } from "@/api/eventApi";
import AboutSection from "./AboutSection";
import ContactUs from "./ContactUs";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import eventImage from "@/assets/event.jpg";
import { Link } from "react-router-dom";

export default function App() {
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
        console.log(data);
      } catch (err) {
        console.error("Failed to fetch events", err);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground">
        {/* Navigation */}
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            isScrolled
              ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex-shrink-0">
                <h1
                  className={`text-3xl font-bold transition-all duration-300 ${
                    isScrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  EventBook
                </h1>
              </div>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border animate-in slide-in-from-top-2">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {["Home", "Events", "About", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-purple-600/90 via-blue-600/90 to-indigo-700/90"
            style={{
              backgroundImage: `url(${eventImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-20 w-16 h-16 bg-blue-500/20 rounded-full blur-lg animate-bounce delay-500"></div>

          <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in-up">
              Book Your Next
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Event Easily
              </span>
            </h1>

            <p className="text-xl sm:text-2xl mb-12 opacity-95 animate-fade-in-up animation-delay-200 max-w-3xl mx-auto leading-relaxed">
              Discover amazing events, connect with like-minded people, and
              create unforgettable memories. Join the community today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
              <Link to="/events">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-6 text-xl font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 group"
                >
                  Explore Events
                  <ArrowRight
                    size={20}
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  />
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 animate-fade-in-up animation-delay-600">
              {[
                { number: "50K+", label: "Events Booked" },
                { number: "100+", label: "Cities Covered" },
                { number: "4.9★", label: "User Rating" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
                Why Choose EventBook?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We make event booking simple, secure, and enjoyable for everyone
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <CheckCircle size={48} className="text-green-500" />,
                  title: "Easy Booking",
                  description:
                    "Book events in just a few clicks with our streamlined process",
                },
                {
                  icon: <Users size={48} className="text-blue-500" />,
                  title: "Community",
                  description:
                    "Connect with like-minded people and build lasting relationships",
                },
                {
                  icon: <Star size={48} className="text-yellow-500" />,
                  title: "Quality Events",
                  description:
                    "Curated events that match your interests and preferences",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="mb-6 flex justify-center">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <AboutSection id="about" />
        <ContactUs id="contact" />

        {/* Footer */}
        <footer
          id="contact"
          className="bg-card text-card-foreground py-16 border-t border-border"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-3xl font-bold mb-6">EventBook</h3>
                <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
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
                        className="w-12 h-12 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                      >
                        <Icon size={20} />
                      </a>
                    )
                  )}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                <ul className="space-y-3">
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
                        className="text-muted-foreground hover:text-foreground transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
                <div className="space-y-3 text-muted-foreground">
                  <p>123 Event Street</p>
                  <p>San Francisco, CA 94102</p>
                  <p>Phone: (555) 123-4567</p>
                  <p>Email: info@eventbook.com</p>
                </div>
              </div>
            </div>
            <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
              <p>&copy; 2024 EventBook. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

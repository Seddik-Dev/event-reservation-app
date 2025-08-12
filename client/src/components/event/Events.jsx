import React, { useEffect } from "react";
import { getAllEvents } from "@/api/eventApi";

function Events() {
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
    <div className="min-h-screen bg-background">
      <h1>Events</h1>
    </div>
  );
}

export default Events;

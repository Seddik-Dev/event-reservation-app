import React from "react";
import PeopleImage from "@/assets/people.jpg";
import { Trophy, Users, Building, Globe } from "lucide-react";

// Reusable Achievement Card Component
const AchievementCard = ({ icon: Icon, number, title, description }) => {
  return (
    <div className="bg-white text-black p-6 rounded-lg text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex justify-center mb-4 text-purple-500">
        <Icon size={40} />
      </div>
      <h3 className="text-3xl font-bold mb-1">{number}</h3>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
};

function AboutSection() {
  return (
    <section className="relative py-20 overflow-hidden mb-10">
      {/* Background Image with Overlay */}
      <div
        style={{ backgroundImage: `url(${PeopleImage})` }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
      ></div>
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in-up">
          Our Achievements
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
          Since our founding in 2010, we've reached significant milestones and
          earned the trust of clients across industries and continents.
        </p>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AchievementCard
            icon={Trophy}
            number="150+"
            title="Événements organisés"
            description="Recognized for excellence in design and innovation."
          />
          <AchievementCard
            icon={Users}
            number="50,000+"
            title="Utilisateurs actifs"
            description="Plus de 5000 utilisateurs actifs"
          />
          <AchievementCard
            icon={Building}
            number="1.000+"
            title="Billets vendus"
            description="Plus de 1000 billets vendus"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

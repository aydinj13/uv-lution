"use client";

import Image from "next/image";

const teamMembers = [
  {
    id: "aydin-joshi",
    name: "Aydin Joshi 🇮🇳",
    image: "/aydin-joshi.jpg",
    description: "Lead Coder and Web Developer",
  },
  {
    id: "james-tillery",
    name: "James Tillery 🇺🇸",
    image: "/james-tillery.png",
    description: "Team Captain",
  },
  {
    id: "jack-zahler",
    name: "Jack Zahler 🇺🇸",
    image: "/jack-zahler.png",
    description: "Lead Builder",
  },
  {
    id: "andrew-zaky",
    name: "Andrew Zaky 🇪🇬",
    image: "/andrew-zaky.jpg",
    description: "Innovation Project Manager",
  },
  {
    id: "ben-thompson",
    name: "Ben Thompson 🇸🇾",
    image: "/ben-thompson.jpg",
    description: "Innovation Project Manager",
  },
  {
    id: "danny-anastosaie",
    name: "Danny Anastosaie 🇷🇴",
    image: "/danny-anastosaie.jpg",
    description: "Attachments Builder",
  },
  {
    id: "connor-crawford",
    name: "Connor Crawford 🇺🇸",
    image: "/connor-crawford.png",
    description: "Strategist and Researcher",
  },
  {
    id: "hunter-caraballo",
    name: "Hunter Caraballo 🇺🇸",
    image: "/hunter-caraballo.jpg",
    description: "Coach & Mentor",
  },
];

export default function Team() {
  return (
    <div>
        <div className="text-center p-7">
       <p className="font-bold text-3xl">Meet our Team</p> 
       <p className="text-zinc-600 mt-4"><span className="font-bold">We</span> are the Hypotheticals from Lake Ridge Academy in North Ridgeville, OH</p>
       </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
      {teamMembers.map((member) => (
        <div
          key={member.id}
          className="group relative overflow-hidden rounded-lg"
        >
          <Image
            src={member.image}
            alt={member.name}
            width={300}
            height={300}
            className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-75"
          />
          <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black to-transparent opacity-80">
            <div>
              <h3 className="text-white text-lg font-bold">{member.name}</h3>
              <p className="text-white text-sm">{member.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

import React from "react";
import TestimonialCard from "./TestimonialCard";
import "./Testimonials.scss";
import SectionHeader from "../utils/SectionHeader";

const TESTIMONIAL_DATA = [
  {
    id: "1",
    name: "John Doe",
    role: "Member since 2021",
    content:
      "The training here is intense but incredibly rewarding. I've never been in better shape in my life. The coaches push you to be your best version.",
    rating: 5,
    initials: "JD",
  },
  {
    id: "2",
    name: "Jane Smith",
    role: "Amateur Boxer",
    content:
      "Uncle-T knows how to push you past your limits. A truly transformative experience that taught me discipline I use in my business daily.",
    rating: 5,
    initials: "JS",
  },
  {
    id: "3",
    name: "Mike R.",
    role: "Fitness Enthusiast",
    content:
      "Great facility, amazing atmosphere, and top-tier coaching. It's not just a gym, it's a brotherhood. Highly recommended.",
    rating: 5,
    initials: "MR",
  },
];

const Testimonials = () => {
  return (
    <div>
      <section className="testimonials-section">
        <SectionHeader subTitle="TESTIMONIALS"
         title="COMMUNITY VOICES" />


        <div className="grid-container">
          {TESTIMONIAL_DATA.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>

        <div className="decorative-bar"></div>
      </section>
    </div>
  );
};

export default Testimonials;

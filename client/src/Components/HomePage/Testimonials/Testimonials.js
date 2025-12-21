import {memo} from "react";
import TestimonialCard from "./TestimonialCard";
import "./Testimonials.scss";
import SectionHeader from "../utils/SectionHeader";
import { TESTIMONIAL_DATA } from "../../Utils/utils";



const Testimonials = () => {
  return (
    <div>
      <section className="testimonials-section">
        <SectionHeader subTitle="TESTIMONIALS"
         title="COMMUNITY VOICES" />


        <div className="grid-container">
          { TESTIMONIAL_DATA.map((item) => (
        <TestimonialCard key={item.id} testimonial={item} />
      ))}
        </div>

        <div className="decorative-bar"></div>
      </section>
    </div>
  );
};

export default memo(Testimonials)

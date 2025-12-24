import React, { useMemo } from "react";
import ProgramCard from "./ProgramsCard.js";
import { User, Users, Dumbbell } from "lucide-react";
import "./Programs.scss";
import SectionHeader from "../utils/SectionHeader.js";
import useFetchData from "../../Utils/useData.js";

export default function Programs() {
  console.log("HOME Programs component rendered");
 
  const {data} =useFetchData();
  const programsData = useMemo(
    () => [
      {
        title: "1-ON-1 TRAINING",
        price: `${data?.oneVone || 120} USD`,
        tag: "1v1",
        image: "https://ik.imagekit.io/nal7vhb1y/Boxers/1v1.jpg",
        icon: User,
        description:
          "Personalized coaching tailored to your specific goals, focusing on technique, speed, and power.",
      },
      {
        title: "SMALL GROUP",
        price: `${data?.smallGroup || 100} USD`,
        tag: "small",
        image: "https://ik.imagekit.io/nal7vhb1y/Boxers/small.jpg",
        icon: Users,
        description:
          "Train with a partner or small squad. Competitive yet supportive environment to push your limits.",
      },
      {
        title: "GROUP CLASSES",
        price: `${data?.groupClasses || 120} USD`,
        tag: "group",
        image: "https://ik.imagekit.io/nal7vhb1y/Boxers/group.jpeg",
        icon: Dumbbell,
        description:
          "High-energy sessions designed to build endurance, strength, and basic boxing skills.",
      },
    ],
    [data]
  );


  const programs = useMemo(() => {
   return programsData.map((program, index) => (
          <ProgramCard key={program.tag} {...program} />
        ))
  },[programsData]);


  return (
    <section className="programs-section" id="train">
      <SectionHeader subTitle="TRAINING PROGRAMS" title="WHAT WE OFFER" />

      <div className="programs-grid">
        {programs}
      </div>
    </section>
  );
}

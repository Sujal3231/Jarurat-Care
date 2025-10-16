"use client";
import { Container } from "react-bootstrap";
import AboutHero from "../components/AboutHero";
import MissionFocus from "../components/MissionFocus";
import ValuesSection from "../components/ValuesSection";
import TeamSection from "../components/TeamSection";
import CTASection from "../components/CTASection";

export default function AboutPage(): JSX.Element {
  return (
    <div className="bg-light">
      <AboutHero />
      <MissionFocus />
      <ValuesSection />
      <TeamSection />
      <CTASection />
    </div>
  );
}
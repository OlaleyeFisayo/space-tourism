import { useState } from "react";
import Crews from "../../components/crews";
import Navbar from "../../components/navbar";
import "./index.scss";

export default function Crew() {
  const [crew, setCrew] = useState(1);

  const renderCrews = () => {
    if (crew === 1) {
      return (
        <Crews
          id={1}
          name="Douglas Hurley"
          image={{
            png: "../../assets/crew/image-douglas-hurley.png",
            webp: "../../assets/crew/image-douglas-hurley.webp",
          }}
          role="Commander"
          details="Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
          handleCrewChange={handleCrewChange}
        />
      );
    } else if (crew === 2) {
      return (
        <Crews
          id={2}
          name="Mark Shuttleworth"
          image={{
            png: "../../assets/crew/image-mark-shuttleworth.png",
            webp: "../../assets/crew/image-mark-shuttleworth.webp",
          }}
          role="Mission Specialist"
          details="Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
          handleCrewChange={handleCrewChange}
        />
      );
    } else if (crew === 3) {
      return (
        <Crews
          id={3}
          name="Victor Glover"
          image={{
            png: "../../assets/crew/image-victor-glover.png",
            webp: "../../assets/crew/image-victor-glover.webp",
          }}
          role="Pilot"
          details="Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
          handleCrewChange={handleCrewChange}
        />
      );
    } else if (crew === 4) {
      return (
        <Crews
          id={4}
          name="Anousheh Ansari"
          image={{
            png: "../../assets/crew/image-anousheh-ansari.png",
            webp: "../../assets/crew/image-anousheh-ansari.webp",
          }}
          role="Flight Engineer"
          details="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
          handleCrewChange={handleCrewChange}
        />
      );
    }
  };

  function handleCrewChange(id: number) {
    setCrew(id);
  }

  return (
    <section id="crew">
      <Navbar />
      <section className="crew-content">
        <h1 className="header">
          <span className="number">02</span> Meet your crew
        </h1>
        {/* <Crews /> */}
        {renderCrews()}
      </section>
    </section>
  );
}

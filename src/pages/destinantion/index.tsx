import Destinations from "../../components/destinations";
import Navbar from "../../components/navbar";
import "./index.scss";
import { useState } from "react";

export default function Destination() {
  const [pick, setPick] = useState("moon");

  const changeDestination = (prop: string) => {
    setPick(prop);
  };

  const renderDestination = () => {
    if (pick === "moon") {
      return (
        <Destinations
          changeDestination={changeDestination}
          active="moon"
          description="See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
          images={{
            png: "../../assets/destination/image-moon.png",
            webp: "../../assets/destination/image-moon.webp",
          }}
          distance="384,400 km"
          travel="3 days"
        />
      );
    } else if (pick === "mars") {
      return (
        <Destinations
          changeDestination={changeDestination}
          active="mars"
          description="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
          images={{
            png: "../../assets/destination/image-mars.png",
            webp: "../../assets/destination/image-mars.webp",
          }}
          distance="225 mil. km"
          travel="9 months"
        />
      );
    } else if (pick === "europa") {
      return (
        <Destinations
          changeDestination={changeDestination}
          active="europa"
          description="The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
          images={{
            png: "../../assets/destination/image-europa.png",
            webp: "../../assets/destination/image-europa.webp",
          }}
          distance="628 mil. km"
          travel="3 years"
        />
      );
    } else if (pick === "titan") {
      return (
        <Destinations
          changeDestination={changeDestination}
          active="titan"
          description="The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
          images={{
            png: "../../assets/destination/image-titan.png",
            webp: "../../assets/destination/image-titan.webp",
          }}
          distance="1.6 bil. km"
          travel="7 years"
        />
      );
    }
  };

  return (
    <section id="destination">
      <Navbar />

      <section className="destination-content">
        <h1 className="header">
          <span className="number">01</span> pick your destination
        </h1>

        <section className="destination-container">
          <section className="destinations-container">
            {renderDestination()}
          </section>
        </section>
      </section>
    </section>
  );
}

import { useState } from "react";
import Navbar from "../../components/navbar";
import Technologies from "../../components/technologies";
import "./index.scss";

export default function Technology() {
  const [technology, setTechnology] = useState(1);

  const handleTechnology = (number: number) => {
    setTechnology(number);
  };

  const renderTechnology = () => {
    if (technology === 1) {
      return (
        <Technologies
          handleTechnology={handleTechnology}
          number={technology}
          name="Launch vehicle"
          image={{
            portrait:
              "../../assets/technology/image-launch-vehicle-portrait.jpg",
            landscape:
              "../../assets/technology/image-launch-vehicle-landscape.jpg",
          }}
          description="A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
        />
      );
    } else if (technology === 2) {
      return (
        <Technologies
          handleTechnology={handleTechnology}
          number={technology}
          name="Spaceport"
          image={{
            portrait: "../../assets/technology/image-spaceport-portrait.jpg",
            landscape: "../../assets/technology/image-spaceport-landscape.jpg",
          }}
          description="A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
        />
      );
    } else if (technology === 3) {
      return (
        <Technologies
          handleTechnology={handleTechnology}
          number={technology}
          name="Space capsule"
          image={{
            portrait:
              "../../assets/technology/image-space-capsule-portrait.jpg",
            landscape:
              "../../assets/technology/image-space-capsule-landscape.jpg",
          }}
          description="A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
        />
      );
    }
  };

  return (
    <section id="technology">
      <Navbar />
      <section className="technology-content">
        <h1 className="header">
          <span className="number">03</span>Space Lanuch 101
        </h1>

        {renderTechnology()}
      </section>
    </section>
  );
}

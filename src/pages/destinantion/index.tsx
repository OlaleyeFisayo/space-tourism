import Destinations from "../../components/destinations";
import Navbar from "../../components/navbar";
import "./index.scss";
import data from "./data";

export default function Destination() {
  return (
    <section id="destination">
      <Navbar />

      <section className="destination-content">
        <h1 className="header">
          <span className="number">01</span> pick your destination
        </h1>

        <section className="destination-container">
          <section className="destinations-container">
            {data.map((destination) => {
              const { name, images, description, distance, travel } =
                destination;
              return (
                <Destinations
                  key={name}
                  active={name}
                  images={images}
                  description={description}
                  distance={distance}
                  travel={travel}
                />
              );
            })}
          </section>
        </section>
      </section>
    </section>
  );
}

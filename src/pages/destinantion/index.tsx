import Destinations from "../../components/destinations";
import Navbar from "../../components/navbar";
import "./index.scss";

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
            <Destinations id="moon"/>
            {/* <Destinations id="mars"/> */}
          </section>
        </section>
      </section>
    </section>
  );
}

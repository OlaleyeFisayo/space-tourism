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
          <section className="destinations-list">
            <ul>
              <li className="active"><a href="#moon">moon</a></li>
              <li><a href="#mars">mars</a></li>
              <li><a href="#europa">europa</a></li>
              <li><a href="#titan">titan</a></li>
            </ul>
          </section>

          <section className="destinations-container">
            <Destinations id="moon"/>
            {/* <Destinations id="mars"/> */}
          </section>
        </section>
      </section>
    </section>
  );
}

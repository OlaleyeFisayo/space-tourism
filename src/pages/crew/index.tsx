import Crews from "../../components/crews";
import Navbar from "../../components/navbar";
import "./index.scss";

export default function Crew() {
  return (
    <section id="crew">
      <Navbar />
      <section className="crew-content">
        <h1 className="header">
          <span className="number">02</span> Meet your crew
        </h1>
        <Crews />
      </section>
    </section>
  );
}

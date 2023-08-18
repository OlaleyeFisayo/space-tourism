import Navbar from "../../components/navbar";
import Technologies from "../../components/technologies";
import "./index.scss";

export default function Technology() {
  return (
    <section id="technology">
      <Navbar />
      <section className="technology-content">
        <h1 className="header">
          <span className="number">03</span>Space Lanuch 101
        </h1>

        <Technologies />
      </section>
    </section>
  );
}

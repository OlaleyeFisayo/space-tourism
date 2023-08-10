import "./index.scss";
import Navbar from "../../components/navbar";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <section id="home">
      <Navbar />
      <section className="box">
        <section className="text-side">
          <h2>So, you want to travel to</h2>
          <h1>Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </section>

        <section className="button-side">
          <NavLink to="destination">Explore</NavLink>
        </section>
      </section>
    </section>
  );
}

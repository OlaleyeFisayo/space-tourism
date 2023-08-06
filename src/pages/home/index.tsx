import "./index.scss";
import Navbar from "../../components/navbar";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <section id="home">
      <Navbar />
      <div className="box">
        <div className="text-side">
          <h2>So, you want to travel to</h2>
          <h1>Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className="button-side">
          <NavLink to="destination">Explore</NavLink>
        </div>
      </div>
    </section>
  );
}

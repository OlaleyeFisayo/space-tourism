import { useState } from "react";
import Crews from "../../components/crews";
import Navbar from "../../components/navbar";
import "./index.scss";

export default function Crew() {
  const [crew, setCrew] = useState(1);

  const renderCrews = () => {
    if (crew === 1) {
      return <Crews />;
    } else if (crew === 2) {
      return <Crews />;
    } else if (crew === 3) {
      return <Crews />;
    } else if (crew === 4) {
      return <Crews />;
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

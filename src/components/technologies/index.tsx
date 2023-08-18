import imgLandscape from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import imgPortrait from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import "./index.scss";

export default function Technologies() {
  return (
    <section id="technologies">
      <section className="text-side">
        <ul className="control">
          <li className="active">1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <section className="about">
          <h1>The technology...</h1>
          <h2>Launch vehicle</h2>
          <p>
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </p>
        </section>
      </section>
      <section className="img-side">
        <picture>
          <source media="(min-width: 1200px)" srcSet={imgPortrait} />
          <img src={imgLandscape} alt="" loading="lazy" />
        </picture>
      </section>
    </section>
  );
}

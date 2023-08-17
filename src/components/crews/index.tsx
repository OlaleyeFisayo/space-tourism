import propImage from "../../assets/crew/image-anousheh-ansari.png";
import propImagewebp from "../../assets/crew/image-anousheh-ansari.webp";
import "./index.scss";

export default function Crews() {
  return (
    <section className="crews">
      <section className="text-side">
        <section className="details">
          <h1 className="crew-member-position">commander</h1>
          <h2 className="crew-memeber-name">douglas hurley</h2>
          <p className="crew-member-details">
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        </section>
        <ul className="crew-member-toggle">
          <li className="active"></li>
          <li className="item"></li>
          <li className="item"></li>
          <li className="item"></li>
        </ul>
      </section>
      <section className="img-side">
        <picture>
          <source
            srcSet={propImagewebp}
            type="image/webp"
            media="max-width: 730px"
          />
          <img src={propImage} alt="Crew member 1" />
        </picture>
      </section>
    </section>
  );
}

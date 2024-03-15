import "./index.scss";
import { useFadeIn } from "../../hook/useFadeIn";

interface CrewsProps {
  id: number;
  role: string;
  name: string;
  details: string;
  image: {
    webp: string;
    png: string;
  };
  handleCrewChange: (id: number) => void;
}

export default function Crews({
  id,
  role,
  name,
  details,
  image,
  handleCrewChange,
}: CrewsProps) {
  const { isFadeIn } = useFadeIn(id);

  return (
    <section className="crews">
      <section className="text-side">
        <section className="details">
          <h1 className={`crew-member-role ${isFadeIn ? "fade-in" : ""}`}>
            {role}
          </h1>
          <h2 className={`crew-memeber-name ${isFadeIn ? "fade-in" : ""}`}>
            {name}
          </h2>
          <p className={`crew-member-details ${isFadeIn ? "fade-in" : ""}`}>
            {details}
          </p>
        </section>
        <ul className="crew-member-toggle">
          <li
            className={id === 1 ? "active" : ""}
            onClick={() => handleCrewChange(1)}
          ></li>
          <li
            className={id === 2 ? "active" : ""}
            onClick={() => handleCrewChange(2)}
          ></li>
          <li
            className={id === 3 ? "active" : ""}
            onClick={() => handleCrewChange(3)}
          ></li>
          <li
            className={id === 4 ? "active" : ""}
            onClick={() => handleCrewChange(4)}
          ></li>
        </ul>
      </section>
      <section className={`img-side ${isFadeIn ? "fade-in" : ""}`}>
        <picture>
          <source
            srcSet={image.webp}
            type="image/webp"
            media="max-width: 730px"
          />
          <img src={image.png} alt="Crew member 1" loading="lazy" />
        </picture>
      </section>
    </section>
  );
}

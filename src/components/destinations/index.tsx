import { useFadeIn } from "../../hook/useFadeIn";
import "./index.scss";

interface props {
  active: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
  changeDestination(prop: string): void;
}

export default function Destinations({
  active,
  images,
  description,
  distance,
  travel,
  changeDestination,
}: props) {
  const { isFadeIn } = useFadeIn(active);

  return (
    <section className={`destinations`}>
      <section className={`img-side ${isFadeIn ? "fade-in" : ""}`}>
        <picture className={`${isFadeIn ? "fade-in" : ""}`}>
          <source media="(max-width: 700px)" srcSet={images.webp} />
          <img src={images.png} alt={active} />
        </picture>
      </section>
      <section className="text-side">
        <section className="destinations-list">
          <ul>
            <li
              className={active === "moon" ? "active" : ""}
              onClick={() => changeDestination("moon")}
            >
              moon
            </li>
            <li
              className={active === "mars" ? "active" : ""}
              onClick={() => changeDestination("mars")}
            >
              mars
            </li>
            <li
              className={active === "europa" ? "active" : ""}
              onClick={() => changeDestination("europa")}
            >
              europa
            </li>
            <li
              className={active === "titan" ? "active" : ""}
              onClick={() => changeDestination("titan")}
            >
              titan
            </li>
          </ul>
        </section>

        <h1 className={`destination-name ${isFadeIn ? "fade-in" : ""}`}>
          {active}
        </h1>
        <p className={`destination-detail ${isFadeIn ? "fade-in" : ""}`}>
          {description}
        </p>
        <div className="line"></div>
        <section className="distance">
          <section>
            <h1>avg. distance</h1>
            <p className={`${isFadeIn ? "fade-in" : ""}`}>{distance}</p>
          </section>
          <section>
            <h1>est. travel time</h1>
            <p className={`${isFadeIn ? "fade-in" : ""}`}>{travel}</p>
          </section>
        </section>
      </section>
    </section>
  );
}

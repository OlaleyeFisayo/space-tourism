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
}

export default function Destinations({
  active,
  images,
  description,
  distance,
  travel,
}: props) {
  return (
    <section className="destinations">
      <section className="img-side">
        <picture>
          <source media="(max-width: 700px)" srcSet={images.webp} />
          <img src={images.png} alt={active} />
        </picture>
      </section>
      <section className="text-side">
        <section className="destinations-list">
          <ul>
            <li className={active === "moon" ? "active" : ""}>moon</li>
            <li className={active === "mars" ? "active" : ""}>mars</li>
            <li className={active === "europa" ? "active" : ""}>europa</li>
            <li className={active === "titan" ? "active" : ""}>titan</li>
          </ul>
        </section>

        <h1 className="destination-name">{active}</h1>
        <p className="destination-detail">{description}</p>
        <div className="line"></div>
        <section className="distance">
          <section>
            <h1>avg. distance</h1>
            <p>{distance}</p>
          </section>
          <section>
            <h1>est. travel time</h1>
            <p>{travel}</p>
          </section>
        </section>
      </section>
    </section>
  );
}

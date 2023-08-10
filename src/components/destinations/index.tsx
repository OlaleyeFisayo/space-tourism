import "./index.scss";
import moonDesktop from "../../assets/destination/image-moon.png";
import moonMobile from "../../assets/destination/image-moon.webp";

export default function Destinations() {
  return (
    <section className="destinations">
      <section className="img-side">
        <picture>
          <source media="(max-width: 485px)" srcSet={moonMobile} />
          <img src={moonDesktop} alt="moon" />
        </picture>
      </section>
      <section className="text-side">
        <h1 className="destination-name">moon</h1>
        <p className="destination-detail">
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
        <div className="line"></div>
        <section className="distance">
          <section>
            <h1>avg. distance</h1>
            <p>384,400km</p>
          </section>
          <section>
            <h1>est. travel time</h1>
            <p>3 days</p>
          </section>
        </section>
      </section>
    </section>
  );
}

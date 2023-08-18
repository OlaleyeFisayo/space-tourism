import "./index.scss";

interface Props {
  number: number;
  handleTechnology: (number: number) => void;
  name: string;
  description: string;
  image: {
    landscape: string;
    portrait: string;
  };
}

export default function Technologies({
  handleTechnology,
  number,
  name,
  description,
  image,
}: Props) {
  return (
    <section id="technologies">
      <section className="text-side">
        <ul className="control">
          <li
            className={number === 1 ? "active" : ""}
            onClick={() => handleTechnology(1)}
          >
            1
          </li>
          <li
            className={number === 2 ? "active" : ""}
            onClick={() => handleTechnology(2)}
          >
            2
          </li>
          <li
            className={number === 3 ? "active" : ""}
            onClick={() => handleTechnology(3)}
          >
            3
          </li>
        </ul>
        <section className="about">
          <h1>The technology...</h1>
          <h2>{name}</h2>
          <p>{description}</p>
        </section>
      </section>
      <section className="img-side">
        <picture>
          <source media="(min-width: 1200px)" srcSet={image.portrait} />
          <img src={image.landscape} alt="" />
        </picture>
      </section>
    </section>
  );
}

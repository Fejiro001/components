import Button from "./Button";

function Banner(props) {
  return (
    <section className="banner">
      <div className="container banner-container">
        <h2>{props.bannerTitle}</h2>
        <p className="subtitle">{props.bannerSubtitle}</p>
        <div className="cta-buttons">
          <Button isPrimary={true} />
          <Button isPrimary={false} />
        </div>
      </div>
    </section>
  );
}

export default Banner;

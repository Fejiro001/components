function Gallery(props) {
  return (
    <section id="flavours" className="gallery">
      <div className="container gallery-container">
        <h2>Our Flavours</h2>
        <p>Every scoop is made with love and the freshest ingredients.</p>
        <ul className="gallery-list">
          {props.imageURLs.map((image) => (
            <li key={image.index}>
              <div className="image-container">
                <img src={image.url} alt={`One Scoop Co. flavour ${image.index + 1}`} />
              </div>
              <div className="image-info">
                <p className="image-name">{image.name}</p>
                <p>Small • Medium • Large</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Gallery;

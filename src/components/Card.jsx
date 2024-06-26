const Card = ({
  src,
  title,
  description,
  url,
  isFavorite,
  toggleFavorite,
  showFavoriteButton,
}) => {
  return (
    <div className="custom-card">
      <img
        src={
          src
            ? src
            : "https://qph.cf2.quoracdn.net/main-qimg-1a4bafe2085452fdc55f646e3e31279c-lq"
        }
        className="card-img"
        alt="News image"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="card-buttons">
          <a href={url} target="_blank" className="btn btn-primary">
            Read more
          </a>
          {showFavoriteButton && (
            <button className="btn btn-secondary" onClick={toggleFavorite}>
              {isFavorite ? (
                <i className="bx bxs-minus-circle"></i>
              ) : (
                <i className="bx bxs-heart"></i>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

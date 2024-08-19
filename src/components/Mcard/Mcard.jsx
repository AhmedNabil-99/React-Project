export default function Mcard({ movie }) {
  return (
    <div className="card" style={{ width: '20rem', margin: '13px' }}>
      <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <div className="card-body d-flex flex-column justify-content-center align-items-center">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.overview}</p>
        <button className="btn btn-custom">View Details</button>
      </div>
    </div>
  );
}

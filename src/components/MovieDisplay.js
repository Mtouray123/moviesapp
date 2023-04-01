function MovieDisplay(props){
    const {movie} = props;

    const loaded = () => {
        return(
    <div>
    <h1>Your Searched Movie</h1>
    <img src={movie.Poster} alt={movie.Plot}/>
    <h2>{movie.Title}</h2>
    <h6>{movie.Director}</h6>
    <h6>{movie.Actors}</h6>
    <h6>{movie.Genre}</h6>
    <h6>{movie.Plot}</h6>
    <h6>{movie.Year}</h6>
    <h6>{movie.BoxOffice}</h6>
    
    </div>
        )
    }
    const loading = () => <h1>No Movie to Display</h1>
    return movie ? loaded() : loading();  

};
export default MovieDisplay;
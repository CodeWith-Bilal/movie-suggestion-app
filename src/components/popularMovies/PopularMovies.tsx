import useMovies from "../../hooks/useMovie/useMovie";
import Loader from "../loader/Loader";
import MoviePoster from "../moviePoster/MoviePoster";

export default function PopularMovies() {
  const {movies,loading,error} = useMovies();
if(loading){
  return <div><Loader/></div>
}
if(error){
  return <div>Error: {error}</div>
}
  return (
    <div className="col-span-12 sm:col-span-4 md:me-5">
      <h1 className="mb-[11px] mt-[37px] text-[20px] font-bold">
        Popular Movies
      </h1>
      <div className="grid grid-cols-2 gap-4 mr-[15px] ">
        {movies.slice(8, 10).map((movie) => (
          <div key={movie.id} className="md:col-span-1 sm:col-span-2">
            <MoviePoster
              imageUrl={movie.poster_path}
              movieId={movie.id}
              rating={Math.round(movie.vote_average)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

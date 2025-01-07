import useMovies from "../../hooks/useMovie/useMovie";
import MoviePoster from "../../components/moviePoster/MoviePoster";
import Loader from "../loader/Loader";

export default function Trending() {
  const {movies,loading,error} = useMovies();
  if(loading){
    return <div><Loader/></div>
  }
  if(error){
    return <div>Error: {error}</div>
  }
  return (
    <div className="col-span-12 sm:col-span-8 md:ms-5">
      <h1 className="mb-[11px] mt-[40px] ml-[20px] text-[20px] font-bold">
        Trending
      </h1>
      <div className="grid grid-cols-12 gap-4 mr-[15px] ">
        {movies.slice(0, 4).map((movie) => (
          <div key={movie.id} className="col-span-6 sm:col-span-3">
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

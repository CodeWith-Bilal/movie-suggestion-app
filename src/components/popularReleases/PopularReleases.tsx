import  useMovies  from "../../hooks/useMovie/useMovie";
import MoviePoster from "../../components/moviePoster/MoviePoster";
import Loader from "../loader/Loader";

export default function PopularReleases() {
  const {movies,loading,error} = useMovies();
  if(loading){
    return <div><Loader/></div>
  }
  if(error){
    return <div>Error: {error}</div>
  }
  return (
    <div className="container mx-auto mb-4 pt-4 bg-[#EBEAEA]">
      <h1 className="mb-[11px] mt-[48px] text-[20px] font-bold">
        Popular Releases
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-[10px] mb-[85px] ">
        {movies.slice(0, 18).map((movie) => (
          <div key={movie.id} className="col-span-1 md:col-span-1 mr-[15px]">
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

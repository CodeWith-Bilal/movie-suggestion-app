import  useMovies  from "../../hooks/useMovie/useMovie";
import SeasonPoster from "../../components/seasonPoster/SeasonPoster";
import Loader from "../loader/Loader";

export default function Seasons() {
  const {seasons,loading,error} = useMovies();
  if(loading){
    return <div><Loader/></div>
  }
  if(error){
    return <div>Error: {error}</div>
  }
  return (
    <>
      <div className="container mt-[360px] md:my-2 mx-auto py-4">
        <div className="grid grid-cols-2 gap-4 mb-[30px] ">
          <div className="flex flex-row gap-4">
            <h1 className="font-bold text-4xl leading-9 ">Seasons</h1>
            <span className="p-[10px] cursor-pointer  hover:bg-[#D2D2D2] flex flex-row rounded-[10px] lg:pl-[14.5px] lg:pt-[5px] lg:h-[43.27px] lg:w-[43.27px] bg-[#D9D9D9] text-black text-[20px] ">
              1
            </span>
            <span className="p-[10px] cursor-pointer  hover:bg-[#D2D2D2] flex flex-row rounded-[10px] lg:pl-[14.5px] lg:pt-[5px] lg:h-[43.27px] lg:w-[43.27px] bg-[#D9D9D9] text-black text-[20px] ">
              2
            </span>
            <span className="p-[10px] cursor-pointer  hover:bg-[#D2D2D2] flex flex-row rounded-[10px] lg:pl-[14.5px] lg:pt-[5px] lg:h-[43.27px] lg:w-[43.27px] bg-[#D9D9D9] text-black text-[20px] ">
              3
            </span>
            <span className="p-[10px]  cursor-pointer  hover:bg-[#D2D2D2] flex flex-row rounded-[10px] lg:pl-[14.5px] lg:pt-[5px] lg:h-[43.27px] lg:w-[43.27px] bg-[#D9D9D9] text-black text-[20px] ">
              4
            </span>
          </div>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
          {seasons.slice(0, 20).map((season) => (
            <div key={season.id}>
              <SeasonPoster
                imageUrl={`https://image.tmdb.org/t/p/w500${season.poster_path}`}
                movieId={season.id}
                rating={season.vote_average}
                name={season.name}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

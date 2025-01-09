import Loader from "../../components/loader/Loader";
import Icon from "../../assets/icons/Bookmark.png";
import { useMovieDetails } from "../../hooks/useMovieDetails/useMovieDetails";

export default function MovieDetails() {
  const { movieData, isLoading } = useMovieDetails();

  if (isLoading) {
    return <Loader />;
  }

  if (!movieData) {
    return <div>Movie data not found</div>;
  }

  return (
    <div className="container lg:ml-[80px] input:ml-[20px] mt-[30px] bg-[#EBEAEA]">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
          {movieData ? (
            <div className="col-span sm:w-full">
              <p className="font-bold text-4xl mt-[26px] ">
                {movieData.original_title}
              </p>
            </div>
          ) : (
            <div className="col-span font-bold text-4xl leading-9 sm:w-full">
              Movie not found
            </div>
          )}

          <div className="col-span flex flex-row justify-end p-10 sm:flex hidden ">
            <button
              className="bg-[#D9D9D9] hover:bg-[#D2D2D2] flex flex-row rounded-full p-4 cursor-pointer text-black "
              disabled={isLoading}
            >
              <img
                src={Icon}
                alt="Add to watchlist"
                className="md:mx-2 sm:mx-1"
              />
              <span>Add to watchlist</span>
            </button>
          </div>
        </div>
        <div className="container mx-auto py-4">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-3 ">
            <div className="grid md:grid-cols-2 sm:grid-cols-1  z-10 md:static absolute gap-5">
              <div className="md:w-[196px] w-[98px] relative md:top-0 md:left-0 top-[55px] left-8">
                <img
                  className="lg:w-[196px] lg:h-[291px] sm:w-[98px] sm:h-[146px] md:w-[196px] md:h-[98px] input:mt-[15px] rounded-[20px]"
                  src={`https://image.tmdb.org/t/p/original/${movieData.poster_path}`}
                  alt="Movie Poster"
                />
              </div>
              <div className="relative lg:mt-[31px] input:mt-[61px] ">
                <div className="flex flex-row text-[18px] justify-start text-center lg:ml-[-110px] ">
                  <span className="rounded-full w-[88px] font-roboto border-[1px] text-[18px] border-black font-medium leading-[21px] border-solid  h-[33px]  py-1.5 me-2.5">
                    Action
                  </span>
                  <span className="rounded-full w-[88px] font-roboto border-[1px] text-[18px] border-black font-medium leading-[21px] border-solid  h-[33px]   py-[5px] ms-2.5">
                    Sci-Fr
                  </span>
                </div>
                <p className="font-medium text-[18px] text-wrap w-auto mt-[19px] lg:ml-[-110px] ">
                  {movieData.overview.slice(0, 300)}
                </p>
                <h3 className="text-[18px] font-bold font-roboto lg:ml-[-110px] ">
                  IMDB Rating
                </h3>
                <span className="text-xl lg:ml-[-110px] ">
                  ⭐{Math.round(movieData.vote_average)}
                </span>{" "}
                <span>/10</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:static relative ">
              <div className="input:mr-[20px] ">
                <img
                  className="sm:h-[146px] lg:w-[521px] lg:h-[291px] rounded-[20px] lg:ml-[100px]  "
                  src={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`}
                  alt="Movie Scene"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

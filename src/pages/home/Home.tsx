import PopularMovies from "../../components/popularMovies/PopularMovies";
import Trending from "../../components/trending/trending"; 
import PopularReleases from "../../components/popularReleases/PopularReleases";
import Loader from "../../components/loader/Loader";
import useMovies from "../../hooks/useMovie/useMovie";

export default function Home() {
const {loading}=useMovies()
  return (
    <div className="bg-[#EBEAEA] ">
      <div className="container flex flex-col lg:ml-[80px] input:ml-[20px] ">
        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-12 lg:gap-24">
            <PopularMovies />
            <Trending />
          </div>
        )}
        {loading ? null : <PopularReleases />}
      </div>
    </div>
  );
}

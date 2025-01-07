import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Search from "../pages/search/Search"; 
import Movie from "../pages/movies/Movie";
import { useDispatch } from "react-redux";
import { searchMovies } from "../redux/slice/searchSlice";
import { AppDispatch } from "../redux/store";
import Navbar from "../components/navebar/Navebar";

function AppRoutes() {
  const dispatch = useDispatch<AppDispatch>();

  const handleSearchChange = (query: string) => {
    dispatch(searchMovies(query));
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar onSearchChange={handleSearchChange} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:movieId" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;

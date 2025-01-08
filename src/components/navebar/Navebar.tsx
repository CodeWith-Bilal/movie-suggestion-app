import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { NavbarProps } from "../../types/types";
import BookmarkIcon from "../../assets/icons/Bookmark.png";

const Navbar: React.FC<NavbarProps> = ({
  searchPlaceholder = "🔍 Search movies or series",
  onSearchChange,
  showPlusButton,
}) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const decodedQuery = decodeURIComponent(location.search.slice(7));
    setSearchQuery(decodedQuery);
  }, [location.search]);

  const toggleSearch = () => {
    setIsSearchVisible((prev) => !prev);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const encodedQuery = encodeURIComponent(searchQuery);
    navigate(`/search?query=${encodedQuery}`);
    onSearchChange(searchQuery);
  };

  return (
    <nav>
      <div className="bg-[#EBEAEA]">
        <div className="container flex items-center justify-between">
          <div className="text-caros text-bold font-semibold text-[35px] md:ml-[80px] input:ml-[20px] mt-10">
            <Link to="/">
              The <br />
              Movie <br />
              Tracker
            </Link>
          </div>
          <div className="flex-grow flex items-center justify-end lg:hidden">
            <button
              onClick={toggleSearch}
              className="bg-gray-300 h-10 w-10 flex items-center justify-center rounded-full focus:outline-none text-xl font-bold mr-2"
            >
              <span role="img" aria-label="Search Icon">
                🔍
              </span>
            </button>
            {showPlusButton && (
              <button className="bg-gray-300 h-10 w-10 flex items-center justify-center rounded-full focus:outline-none">
                <img src={BookmarkIcon} className="w-6" alt="Bookmark Icon" />
              </button>
            )}
          </div>
          <div
            className={`flex-grow ${isSearchVisible ? "" : "hidden"} lg:flex`}
          >
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder={searchPlaceholder}
                value={searchQuery}
                onChange={handleSearchChange}
                className="px-4 py-2 lg:ml-[300px] rounded-full focus:outline-none text-center bg-gray-300 focus:ring focus:border-blue-100 lg:w-[630px] lg:h-[57px] lg:placeholder:text-[20px] placeholder:text-black"
              />
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

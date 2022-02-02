import React from "react";
import Slider from "react-slick";
import { Settings } from "../../common/apis/settings";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
import { Bars } from "react-loader-spinner";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  const loading = useSelector((state) => state.movies.loading);

  let renderMovies,
    renderShows = "";

  renderMovies = movies?.Response ? (
    movies?.Search?.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
  ) : (
    <div className="movies-error">
      <h3>{movies.error}</h3>
    </div>
  );

  renderShows = shows?.Response ? (
    shows?.Search?.map((show, index) => <MovieCard key={index} data={show} />)
  ) : (
    <div className="shows-error">
      <h3>{shows.error}</h3>
    </div>
  );

  return (
    <div className="movie-wrapper">
      {loading ? (
        <div className="loader">
          <Bars color="#00BFFF" height={80} width={80} />
        </div>
      ) : (
        <>
          <div className="movie-list">
            <h2>Movies</h2>
            <div className="movie-container">
              <Slider {...Settings}>{renderMovies}</Slider>
            </div>
          </div>
          <div className="show-list">
            <h2>Shows</h2>
            <div className="movie-container">
              <Slider {...Settings}>{renderShows}</Slider>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieListing;

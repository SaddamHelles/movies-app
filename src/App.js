import "./App.css";
import { StyledCardMovies } from "./commponents/CardMovie";
import { StyledContainer } from "./commponents/Container/Container";
import { StyledContainerCards } from "./commponents/ContainerCards";
import { StyledHeader } from "./commponents/Header";
import { StyledPopularMoviesTitle } from "./commponents/PopularMoviesTitle";
import { StyledSingleMovie } from "./commponents/SingleMovie";
import bgImage from "./images/BackgroundImage.jpeg";
import urlCardImage from "./images/urlCardImage.jpeg";

const StyleIcon = {
  width: "160px",
  marginTop: "5px",
  cursor: "pointer",
};
function App() {
  return (
    <StyledContainer>
      <StyledHeader>
        <a href="http://www.netflix.com/ps-en/browse/genre/7424">
          <img
            style={StyleIcon}
            src={require("./images/free-movies-icon-16.jpg")}
            alt="Icon"
          />
        </a>
        {/* <a
          style={{
            textDecoration: "none",
            alignContent: "center",
            color: "white",
          }}
          href="https://www.netflix.com/ps-en/browse/genre/7424"
        >
          React Movie
        </a> */}
      </StyledHeader>
      <StyledSingleMovie urlImage={bgImage} />
      <StyledPopularMoviesTitle>Popular Movies</StyledPopularMoviesTitle>
      <StyledContainerCards>
        <StyledCardMovies urlCardImage={urlCardImage} />
        <StyledCardMovies urlCardImage={urlCardImage} />
        <StyledCardMovies urlCardImage={urlCardImage} />
        <StyledCardMovies urlCardImage={urlCardImage} />
        <StyledCardMovies urlCardImage={urlCardImage} />
        <StyledCardMovies urlCardImage={urlCardImage} />
        <StyledCardMovies urlCardImage={urlCardImage} />
        <StyledCardMovies urlCardImage={urlCardImage} />
        <StyledCardMovies urlCardImage={urlCardImage} />
        <StyledCardMovies urlCardImage={urlCardImage} />
        <StyledCardMovies urlCardImage={urlCardImage} />
        <StyledCardMovies urlCardImage={urlCardImage} />
        <StyledCardMovies urlCardImage={urlCardImage} />
        <StyledCardMovies urlCardImage={urlCardImage} />
        <StyledCardMovies urlCardImage={urlCardImage} />
      </StyledContainerCards>
    </StyledContainer>
  );
}

export default App;

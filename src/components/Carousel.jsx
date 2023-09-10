import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Movie from "./Movie";
import { movieData, responsive } from "./Data.js";

export default function App() {
  const movie = movieData.map((item) => (
    <Movie name={item.name} url={item.imageurl} />
  ));

  return (
    <div className="App">
      <h1>React multi carousel</h1>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={1500}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={100}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
      >
        {movie}
      </Carousel>
    </div>
  );
}

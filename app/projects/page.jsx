import Header from "../components/Header";
import "./projects.css";
import CarouselCard from "../components/CarouselCard";

export default function Projects() {
  const image = "/next.svg";
  const title = "Title";
  const language = ["HTML", "Css"];
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, sapiente.";
  return (
    <>
      <Header />
      <main className="max-w-screen-3xl m-auto pt-12">
        <section
          className="carousel sm:max-w-4xl m-auto"
          aria-label="Gallery"
        >
          <ol className="carousel__viewport">
            <li id="carousel__slide1" tabIndex="0" className="carousel__slide">
              <div className="carousel__snapper">
                <a href="#carousel__slide1" className="carousel__prev">
                  Go to last slide
                </a>
                <CarouselCard
                  image={"/images/projects/pokedex.PNG"}
                  title={"Pokédex"}
                  language={language}
                  description={description}
                />
                <a href="#carousel__slide2" className="carousel__next">
                  Go to next slide
                </a>
              </div>
            </li>
            <li id="carousel__slide2" tabIndex="0" className="carousel__slide">
              <div className="carousel__snapper"></div>
              <a href="#carousel__slide1" className="carousel__prev">
                Go to previous slide
              </a>
              <CarouselCard
                image={"/images/projects/pomodoro.PNG"}
                title={"Pomodoro"}
                language={language}
                description={description}
              />
              <a href="#carousel__slide3" className="carousel__next">
                Go to next slide
              </a>
            </li>
            <li id="carousel__slide3" tabIndex="0" className="carousel__slide">
              <div className="carousel__snapper"></div>
              <a href="#carousel__slide2" className="carousel__prev">
                Go to previous slide
              </a>
			  <CarouselCard
                image={"/images/projects/todo_list.PNG"}
                title={"Todo list"}
                language={language}
                description={description}
              />
              <a href="#carousel__slide1" className="carousel__next">
                Go to next slide
              </a>
            </li>
          </ol>
          <aside className="carousel__navigation max-w-md max-h-40 m-auto">
            <ol className="carousel__navigation-list">
              <li className="carousel__navigation-item">
                <a
                  href="#carousel__slide1"
                  className="carousel__navigation-button"
                >
                  Go to slide 1
                </a>
              </li>
              <li className="carousel__navigation-item">
                <a
                  href="#carousel__slide2"
                  className="carousel__navigation-button"
                >
                  Go to slide 2
                </a>
              </li>
              <li className="carousel__navigation-item">
                <a
                  href="#carousel__slide3"
                  className="carousel__navigation-button"
                >
                  Go to slide 3
                </a>
              </li>
            </ol>
          </aside>
        </section>
      </main>
    </>
  );
}

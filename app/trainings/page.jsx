import Header from "../components/Header";
import TrainingCard from "../components/TrainingCard";

export default function Training() {
  return (
    <>
      <Header />
      <main className="max-w-screen-xl m-auto pt-12">
        <ul className="grid gap-16 grid-cols-fluid m-5">
          <TrainingCard
            school={"Centre IFAPME"}
            subject={"Front-end web develoment"}
            dateStart={"September 2022"}
            dateEnd={"Ongoing"}
            description={
              "Professional training on the subject of front-end development learning how to code in php, sql, jquery and HTML/CSS"
            }
          />
          <TrainingCard
            school={"Centre IFAPME"}
            subject={"Front-end web develoment"}
            dateStart={"September 2022"}
            dateEnd={"Ongoing"}
            description={
              "Professional training on the subject of front-end development learning how to code in php, sql, jquery and HTML/CSS"
            }
          />
          <TrainingCard
            school={"Centre IFAPME"}
            subject={"Front-end web develoment"}
            dateStart={"September 2022"}
            dateEnd={"Ongoing"}
            description={
              "Professional training on the subject of front-end development learning how to code in php, sql, jquery and HTML/CSS"
            }
          />
        </ul>
      </main>
    </>
  );
}

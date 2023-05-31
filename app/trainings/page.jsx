import TrainingCard from "../components/TrainingCard";

export default function Training() {
  return (
    <>
      <main className="max-w-screen-xl m-auto pt-12">
        <ul className="grid gap-16 grid-cols-fluid m-5">
          <TrainingCard
            school={"Centre IFAPME"}
            location={"Liège, Belgium"}
            subject={"Front-end web develoment"}
            dateStart={"September 2022"}
            dateEnd={"Ongoing"}
            description={
              "Professional training on the subject of front-end development learning how to code in php, sql, jquery and HTML/CSS"
            }
          />
          <TrainingCard
            school={"BeCode"}
            location={"Liège, Blelgium"}
            subject={"Front-end web develoment"}
            dateStart={"September 2021"}
            dateEnd={"June 2022"}
            description={
              "Study of web development and related technologies  (HTML,  CSS, Javascript, Php, React, Node.js, Typescript)"
            }
          />
          <TrainingCard
            school={"GIA"}
            location={"Bangkok, Thailand"}
            subject={"Graduate Gemologist"}
            dateStart={"January 2014"}
            dateEnd={"December 2014"}
            description={
              "Identify and grade diamond and colred gemestone"
            }
          />
        </ul>
      </main>
    </>
  );
}

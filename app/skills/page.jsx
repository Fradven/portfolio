import SkillCard from "../components/SkillCard"

export default function Skills() {
  return (
    <>
      <main className="max-w-screen-xl m-auto pt-12">
        <div>
          <h3 className="text-2xl underline underline-offset-8">Front-end</h3>
          <ul className="grid gap-16 grid-cols-fluid text-center m-5 p-2 bg-beige">
            <SkillCard skillName={"HTML"} percentage={80} />
            <SkillCard skillName={"CSS"} percentage={80} />
            <SkillCard skillName={"Javascript"} percentage={70} />
            <SkillCard skillName={"React"} percentage={65} />
          </ul>
        </div>
        <div>
          <h3 className="text-2xl underline underline-offset-8">Back-end</h3>
		  <ul className="grid gap-16 grid-cols-fluid text-center m-5 p-2 bg-beige">
            <SkillCard skillName={"PHP"} percentage={40} />
            <SkillCard skillName={"Java"} percentage={60} />
            <SkillCard skillName={"MySql"} percentage={70} />
          </ul>
        </div>
      </main>
    </>
  )
}
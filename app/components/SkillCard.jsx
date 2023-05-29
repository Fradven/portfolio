export default function SkillCard({skillName, percentage}) {
  return (
    <>
      <li>
        <div className="flex items-center">
          <span className="mr-2">{skillName}</span>
          <div className="bg-gray-300 h-5 w-48">
            <div
              className="bg-blue-500 h-5"
              style={{ width: `${percentage}%` }}
            >{percentage}%</div>
          </div>
        </div>
      </li>
    </>
  );
}

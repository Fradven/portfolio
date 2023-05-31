export default function TrainingCard({
    school,
    location,
    subject,
    dateStart,
    dateEnd,
    description,
  }) {
    return (
      <>
        <li>
          <h4 className="text-xl bg-beige">{school} <span className="text-sm italic">- {location}</span></h4>
          <p className="py-2">
            {subject}{" "}
            <span className="text-sm italic">
              {dateStart} - {dateEnd}
            </span>
          </p>
          <p>{description}</p>
        </li>
      </>
    );
  }
  
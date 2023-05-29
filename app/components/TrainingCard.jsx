export default function TrainingCard({
    school,
    subject,
    dateStart,
    dateEnd,
    description,
  }) {
    return (
      <>
        <li>
          <h4>{school}</h4>
          <p>
            {subject}{" "}
            <span>
              {dateStart} - {dateEnd}
            </span>
          </p>
          <p>{description}</p>
        </li>
      </>
    );
  }
  
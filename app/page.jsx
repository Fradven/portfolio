import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="max-w-screen-xl m-auto pt-12">
        <div className="flex items-center bg-beige">
          <div className="w-40 ml-14">
            <Image
              src="/images/profile/profile_picture.jpg"
              width={300}
              height={300}
              alt="profile picture"
            />
          </div>
          <ul className="ml-12">
            <li>Age: 31</li>
            <li>Residence: Liège - Belgium</li>
            <li>Occupation: Intern at "Prismatech"</li>
          </ul>
        </div>
        <h3 className="mt-5 pl-3 text-2xl underline underline-offset-8">
          Description
        </h3>
        <p className="p-3">
          As a junior developer at Prismatech and previously at Zeiko and AppiStadium, I have
          learned some essential skills of web development such as creating well
          documented repositories on github, the intricacies of Javascript
          framework like React or Vue.js and back-end management using SQL in
          PHP or Java. At BeCode, I was shown the importance of developing soft skills as I
          had to work in multiple group projects in small varied team and I
          had to present several Tech-Talk and Workshop in French as well as in
          English throughout the year I was there.
        </p>
      </main>
    </>
  );
}

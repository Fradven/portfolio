import Header from "./components/Header"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Header />
      <main className='max-w-screen-xl m-auto pt-12'>
        <div className="flex items-center bg-beige">
          <div className="w-40 ml-14">
            <Image src="/images/profile/profile_picture.jpg" width={300} height={300} alt="profile picture" />
          </div>
          <ul className="ml-12">
            <li>Age: 31</li>
            <li>Residence: Liège - Belgium</li>
            <li>Occupation: Intern at "Prismatech"</li>
          </ul>
        </div>
        <h3 className="my-5 text-2xl underline-offset-8">Description</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti voluptas distinctio doloribus minima maiores, totam iusto in obcaecati sunt, voluptatibus dolores aspernatur explicabo veniam consequatur repudiandae repellat. Ea, ullam mollitia. Ex reiciendis impedit ipsa itaque tenetur vitae enim expedita inventore quis dolorum. Quam, quae reiciendis. Aliquam alias doloribus quia officia ex commodi reiciendis reprehenderit fuga voluptas incidunt similique ea optio, illo dolores earum facere esse soluta id accusantium odit iste illum harum. Illum, quisquam maiores culpa atque ad amet tempore laborum exercitationem obcaecati quibusdam expedita, repudiandae quod esse debitis? Minima, dolorum aspernatur natus dolores quam repudiandae ratione suscipit reprehenderit earum blanditiis soluta velit perferendis consectetur nam! Velit, ratione impedit! Quidem quod voluptatibus sapiente quaerat quis atque labore ad laboriosam unde. Veniam cum tenetur porro labore consequatur? Porro blanditiis eligendi quasi expedita impedit qui, quo soluta optio incidunt! Facilis culpa dolorem nostrum sequi repudiandae ab autem voluptatibus sint et accusamus!</p>
      </main>
    </>
  )
}

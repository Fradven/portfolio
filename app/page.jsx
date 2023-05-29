import Header from "./components/Header"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Header />
      <main className='max-w-screen-xl m-auto pt-12'>
        <div className="flex items-center">
          <div className="w-40">
            <Image src="/images/profile/profile_picture.jpg" width={300} height={300} alt="profile picture" />
          </div>
          <ul className="ml-3">
            <li>Age: 31</li>
            <li>Residence: Liège - Belgium</li>
            <li>Occupation: Intern at "Prismatech"</li>
          </ul>
        </div>
        <h3>Description</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid vero suscipit eos adipisci eligendi hic eveniet reiciendis, odit rerum dolorem accusamus, magnam ipsum fugit dolore! Perspiciatis sit sequi eius voluptate hic inventore similique minima perferendis totam eaque accusamus ad nobis, libero eveniet et assumenda repellendus magnam tempora? Porro, nihil placeat!</p>
      </main>
    </>
  )
}

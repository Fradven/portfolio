import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Julius_Sans_One } from 'next/font/google'

const julius = Julius_Sans_One({weight: ["400"], subsets: ['latin']})

const Header = () => {
  return (
    <header className='max-w-screen-xl m-auto'>
      <nav className='flex justify-between'>
        <h1>
            <Link className={`${julius.className}`} href="/">
                <p className='text-xl'>Frédéric Van Overmerire</p>
                <p className='text-2xl ml-16 p-1 bg-beige'>Junior Developer</p>
            </Link>
        </h1>
        <ul className='flex gap-5 justify-around'>
          <li className='m-1'>
            <Link className={`${julius.className} p-1 transition duration-150 hover:bg-beige hover:ease-in`} href="/">Home</Link>
          </li>
          <li className='m-1'>
            <Link className={`${julius.className} p-1 transition duration-150 hover:bg-beige hover:ease-in`} href="/skills">Skills</Link>
          </li>
          <li className='m-1'>
            <Link className={`${julius.className} p-1 transition duration-150 hover:bg-beige hover:ease-in`} href="/trainings">Professional training</Link>
          </li>
          <li className='m-1'>
            <Link className={`${julius.className} p-1 transition duration-150 hover:bg-beige hover:ease-in`} href="/projects">Projects</Link>
          </li>
          <li className='m-1'>
            <Link className={`${julius.className} p-1 transition duration-150 hover:bg-beige hover:ease-in`} href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
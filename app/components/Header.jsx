import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Header = () => {
  return (
    <header className='max-w-screen-xl m-auto'>
      <nav className='flex justify-between'>
        <h1>
            <Link href="/">
                <p>Frédéric Van Overmerire</p>
                <p>Junior Developer</p>
            </Link>
        </h1>
        <ul className='flex gap-5 justify-around'>
          <li className='m-1'>
            <Link href="/">Home</Link>
          </li>
          <li className='m-1'>
            <Link href="/skills">Skills</Link>
          </li>
          <li className='m-1'>
            <Link href="/trainings">Professional training</Link>
          </li>
          <li className='m-1'>
            <Link href="/projects">Projects</Link>
          </li>
          <li className='m-1'>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
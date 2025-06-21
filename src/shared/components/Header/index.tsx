import Image from 'next/image';
import logo from '../../../../public/logo.png'

export const Header = () => {
  return (
    <header className="bg-white flex justify-between items-center p-2">
      <Image src={logo} alt='logo da empresa' width={80} height={80}/>
      <nav>
        <ul className="text-blue-950 flex items-center gap-3 hover:font-semibold">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Sobre Nós</a>
          </li>
          <li>
            <a href="/">Portfólio</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

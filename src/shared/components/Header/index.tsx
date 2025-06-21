export const Header = () => {
  return (
    <header className="bg-blue-500 flex justify-between items-center p-2">
      <h1 className="text-5xl font-semibold">Meu Cabeçalho</h1>
      <nav>
        <ul className="flex items-center gap-3 hover:font-semibold">
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

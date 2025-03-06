import CosmoIcon from '@/assets/icons/Cosmonauta.svg'
export const Header = () => {
  return (
    <header className="w-full top-0 bg-background/80 backdrop-blur-md fixed flex items-start justify-between max-w-7x1 mx-auto z-10 xl:items-center">
      <div className="logo p-2 flex flex-row mx-3 ">
        <CosmoIcon className=" flex flex-row mx-3 size-[65px]" />
      </div>
      <nav className="flex-row flex max-w-7xl items-center justify-end p-5 lg:px-8">
        <a href="#" className="nav-item">Início</a>
        <a href="#" className="nav-item">Sobre</a>
        <a href="#" className="nav-item">Projetos</a>
        <a href="#" className="nav-item bg-white text-gray-900 hover:bg-white/ hover:text-white-900">Contato</a>
      </nav>
    </header>
  );
};




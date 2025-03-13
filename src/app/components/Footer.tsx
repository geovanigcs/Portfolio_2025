import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'


const footerLinks = [
  {
    title: 'Instagram',
    point: 'https://www.instagram.com/geovanigcs/',
  },
  {
    title: 'Github',
    point: 'https://github.com/geovanigcs',
  },
  {
    title: 'LinkedIn',
    point: 'https://www.linkedin.com/in/geovanicordeirodev/',
  },
  {
    title: 'E-mail',
    point: 'mailto:geovanigcs.dev@gmail.com',
  },
]

export const Footer = () => {
  return (
    <footer className='relative z-10 overflow-x-clip'>
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-sky-400/30 -z-10 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
      <div className="container">
        <div className="border-t md:flex-row md:justify-between border-white/15 py-12 text-sm flex flex-col items-center gap-8">
          <div className="text-white/40">&copy; Geovani Cordeiro 2025</div>
            <nav className="flex flex-col items-center gap-8  md:flex-row">
              {footerLinks.map((link) =>(
                <a href={link.point} target="_blank" key={link.title} className="px-4 py-2 rounded-full hover:bg-white/10 inline-flex items-center gap-1.5">
                  <span className='font-semibold'>{link.title }</span>
                  <ArrowUpRightIcon className="size-4" />
                </a>
              ))}
            </nav>
          </div>
        </div>
    </footer>
  )
}

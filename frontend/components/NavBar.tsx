import Link from 'next/link';

export default function NavBar() {
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="container mx-auto">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Ramon.Dev
        </Link>
        <div className="flex-1"></div>
        <div className="menu menu-horizontal px-1">
          <Link href="/" className="btn btn-ghost">Início</Link>
          <Link href="/projetos" className="btn btn-ghost">Projetos</Link>
          <Link href="/blog" className="btn btn-ghost">Blog</Link>
          <Link href="/sobre" className="btn btn-ghost">Sobre</Link>
          <Link href="/contato" className="btn btn-ghost">Contato</Link>
        </div>
      </div>
    </div>
  )
}

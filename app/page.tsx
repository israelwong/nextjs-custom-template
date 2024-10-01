import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <h1>Lista de componentes</h1>

      <ul>
        <li>
          <Link href="/component/leadform/">
            Formulario de contacto
          </Link>
        </li>
        <li>
          <Link href="/component/navbar/">
            Navbar
          </Link>
        </li>
      </ul>

    </div>
  );
}

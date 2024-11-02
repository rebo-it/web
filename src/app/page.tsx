import Image from "next/image";
import logoWhite from "../assets/logo/rebo-white.png";
import logoBlack from "../assets/logo/rebo-black.png";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image src={logoWhite} alt="logo" className="logo-white" />
        <Image src={logoBlack} alt="logo" className="logo-black" />
        Lo sentimos, este sitio web se encuentra bajo<br/> 
        construcción. Comunícate con nosotros en<br/>
        los siguientes enlaces:
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="mailto:contacto@rebo.mx"
            target="_blank"
            rel="noopener noreferrer"
          >
            contacto@rebo.mx
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://wa.me/5215561585215"
            target="_blank"
            rel="noopener noreferrer"
          >
            55 6158 5215
          </a>
        </div>
      </main>
    </div>
  );
}

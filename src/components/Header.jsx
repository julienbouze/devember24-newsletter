import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import SDLogo from "/public/sd.png"

const bn = Bebas_Neue({ subsets: ['latin'] , weight: ['400']})

export function Header () {
    return <div className="flex w-full justify-center items-center bg-slate-600 text-white p-2 gap-2">
        <h1 className={`text-5xl ${bn.className}`}>This week on</h1>
        <Image src={SDLogo} width={100} height={100} alt="WWE logo"/>
    </div>
}
import Image from "next/image";

import Andrade from '/public/andrade.jpg'
import MCMG from '/public/mcmg.jpg'
import Randy from '/public/randy.webp'
import Cody from '/public/cody.jpg'
import { Bebas_Neue } from "next/font/google";

const bn = Bebas_Neue({ subsets: ['latin'], weight: ['400'] })

export function Content() {
    return <div className="flex flex-col w-full justify-center items-center p-2 gap-2">
        <div className="flex flex-col bg-gradient-to-r from-black to-blue-800 w-full rounded-tl-lg rounded-br-lg p-1 overflow-none">
            <div className="flex flex-col bg-slate-50 w-full rounded-tl-lg rounded-br-lg p-2 gap-4">
                <h2 className={`text-3xl ${bn.className} text-black`}>Andrade vs Carmelo Hayes - Game 7 : LA Knight gets involved</h2>
                <div className="flex flex-col md:flex-row gap-6 text-blue-800">
                    <Image src={Andrade} className="w-full md:w-2/5 h-2/5" alt="Andrade vs Carmelo Hayes with LA Knight as Special Guest Referee" />
                    <p className="text-justify">
                        Andrade and Carmelo Hayes are set to collide for the seventh time and end their legendary series on SmackDown this Friday. The winner of this match is getting a shot at LA Knight for his US Title. Who&#39;s better than the Champ himself to referee this match ?
                        Will Hayes be able to find the net this time or will El Idolo deliver his message ? One thing is certain : this match is going to be exceptional. YEAH !
                    </p>
                </div>
            </div>
        </div>
        <div className="flex flex-col bg-gradient-to-r from-black to-blue-800 w-full rounded-tl-lg rounded-br-lg p-1 overflow-none">
            <div className="flex flex-col bg-slate-50 w-full rounded-tl-lg rounded-br-lg p-2 gap-4">
                <h2 className={`text-3xl ${bn.className} text-black`}>Celebration for the new champions</h2>
                <div className="flex flex-col md:flex-row gap-6 text-blue-800">
                    <p className="text-justify">
                        It took only 1 week for the Motor City Machine Guns to capture gold by defeating the Bloodline 2.0, with some unexpected help from Roman Reigns, Jimmy and Jey Uso. Friday night is going to be a huge celebration for Alex Shelley and Chris Sabin. With maybe some hints on who&#39;s going to be their first challengers.
                    </p>
                    <Image src={MCMG} className="w-full md:w-2/5 h-2/5" alt="Motor City Machine Guns champions" />
                </div>
            </div>
        </div>
        <div className="flex flex-col bg-gradient-to-r from-black to-blue-800 w-full rounded-tl-lg rounded-br-lg p-1 overflow-none">
            <div className="flex flex-col bg-slate-50 w-full rounded-tl-lg rounded-br-lg p-2 gap-4">
                <h2 className={`text-3xl ${bn.className} text-black`}>Chaos incoming</h2>
                <div className="flex flex-col md:flex-row gap-6 text-blue-800">
                    <Image src={Randy} className="w-full md:w-2/5 h-2/5" alt="Randy Orton hits Kevin Owens" />
                    <p className="text-justify">
                        Their match never started at Crown Jewel. They only wanted to hurt each other, and it's not gonna end until they settle this once and for all. Nobody could stop them, not even Raw and SmackDown General Managers Adam Pearce and Nick Aldis. Get ready, because Randy Orton and Kevin Owens are not done at all.
                    </p>
                </div>
            </div>
        </div>
        <div className="flex flex-col bg-gradient-to-r from-black to-blue-800 w-full rounded-tl-lg rounded-br-lg p-1 overflow-none">
            <div className="flex flex-col bg-slate-50 w-full rounded-tl-lg rounded-br-lg p-2 gap-4">
                <h2 className={`text-3xl ${bn.className} text-black`}>Back to business</h2>
                <div className="flex flex-col md:flex-row gap-6 text-blue-800">
                    <p className="text-justify">
                        Crown Jewel being now behind us, the Undisputed WWE Champion Cody Rhodes has once again a target on his back. Who&#39;s gonna step up and challenge him at Survivor Series ? Are we going to re-live an old rivalry ? Are we going to witness the rise of a new Superstar ? Don't miss SmackDown this Friday to discover The American Nightmare&#39;s next opponent.
                    </p>
                    <Image src={Cody} className="w-full md:w-2/5 h-2/5" alt="Cody Rhodes with a microphone" />
                </div>
            </div>
        </div>
    </div>
}
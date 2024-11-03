import Image from "next/image";
import WWELogo from "/public/wwe.png";

export function Footer() {
    return (
        <footer className="flex flex-col w-full items-center bg-slate-600 text-white p-4 gap-4 text-sm">
            <div className="flex flex-col items-center">
                <Image src={WWELogo} width={100} height={100} alt="WWE logo" />

            </div>
            <div className="w-full flex flex-col sm:flex-row justify-center items-center text-sm gap-2 border-t border-slate-500 pt-4">
                <div className="text-center">
                    <h3 className="font-semibold">Follow Us</h3>
                    <div className="flex justify-center gap-4 mt-2">
                        <a href="#" aria-label="Twitter" className="hover:underline">
                            Twitter
                        </a>
                        <a href="#" aria-label="Instagram" className="hover:underline">
                            Instagram
                        </a>
                        <a href="#" aria-label="LinkedIn" className="hover:underline">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>

            <div className="w-full flex gap-4 justify-center items-center text-xs border-t border-slate-500 pt-4">
                <a href="#" className="hover:underline">
                    Privacy Policy
                </a>
                <a href="#" className="hover:underline">
                    Terms of Service
                </a>
                <a href="#" className="hover:underline">
                    Unsubscribe
                </a>
            </div>
            <p>© {new Date().getFullYear()} World Wrestling Entertainment (WWE). All rights reserved.</p>
            <p className="text-center">
                Developed by{" "}
                <a
                    className="underline underline-offset-2"
                    href="https://github.com/julienbouze/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Julien Bouze
                </a>{" "}
                for the{" "}
                <a
                    className="underline underline-offset-2"
                    href="https://github.com/julienbouze/devember24"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Devember'24
                </a>{" "}
                challenge
            </p>
        </footer>
    );
}

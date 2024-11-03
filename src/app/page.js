import { Content } from "@/components/Content";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
export default function Home() {
  return (
    <div className="flex flex-col justify-start max-w-4xl min-w-96 bg-slate-50">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

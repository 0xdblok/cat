import Image from "next/image";
import Hero from "./component/hero";
import Cat from "./component/cat";
import Tokenomics from "./component/tokenomics";
import Footer from "./component/footer";

export default function Home() {
  return (
    <div className="bg-[#8FC2FF]">
      <Hero />
      <Cat />
      <Tokenomics />
      <Footer />
    </div>
  );
}

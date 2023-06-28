import Hero from "./modules/Hero";
import Marcas from "./modules/Marcas";
import MustHave from "./modules/MustHave";
import Nosotros from "./modules/Nosotros";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <MustHave />
      <Marcas />
      <Nosotros />
    </main>
  )
}

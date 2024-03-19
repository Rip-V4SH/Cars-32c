import Sedans from "./assets/icon-sedans.svg"
import Suv from "./assets/icon-suvs.svg"
import Luxo from "./assets/icon-luxury.svg"

export default function App() {
  return (
    <main className="min-h-svh bg-offwhitebg py-20 px-6">
      <section>
        <div className="bg-orange p-12 rounded-t-lg">
          <img src={Sedans} alt="" className="mb-7"/>
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-white">Sedans</h2>
          <p className="font-lexend mb-7 text-offwhite">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a className="font-lexend bg-offwhitebg block text-orange px-10 py-3 rounded-3xl w-fit" href="https://www.webmotors.com.br/sedans" target="_blank">ver mais</a>
        </div>

        <div className="bg-green p-12">
          <img src={Suv} alt="" className="mb-7"/>
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-white">SUVs</h2>
          <p className="font-lexend mb-7 text-offwhite">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a className="font-lexend bg-offwhitebg block text-green px-10 py-3 rounded-3xl w-fit" href="https://www.webmotors.com.br/suvs" target="_blank">ver mais</a>
        </div>

        <div className="bg-dark-green p-12 rounded-b-lg">
          <img src={Luxo} alt="" className="mb-7"/>
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-white">Luxuosos</h2>
          <p className="font-lexend mb-7 text-offwhite">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a className="font-lexend bg-offwhitebg block text-dark-green px-10 py-3 rounded-3xl w-fit" href="https://www.webmotors.com.br/carros-de-luxo" target="_blank">ver mais</a>
        </div>
      </section>
    </main>
  )
}

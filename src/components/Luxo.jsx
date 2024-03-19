import luxo from "../assets/icon-luxury.svg"

export default function Luxo() {
  return (
    <div className="bg-dark-green p-12 max-lg:rounded-b-lg lg:rounded-r-lg">
        <img src={luxo} alt="" className="mb-7"/>
        <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-white">Luxuosos</h2>
        <p className="font-lexend mb-7 text-offwhite lg:mb-20">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
        <a className="font-lexend bg-offwhitebg block text-dark-green px-10 py-3 rounded-3xl w-fit border-2 border-offwhitebg hover:text-offwhitebg hover:bg-dark-green transition ease-in-out delay-150 hover:scale-110 duration-300" href="https://www.webmotors.com.br/carros-de-luxo" target="_blank">ver mais</a>
    </div>
  )
}

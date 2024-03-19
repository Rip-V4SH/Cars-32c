import Sedan from "../assets/icon-sedans.svg"

export default function Sedans() {
  return (
    <div className="bg-orange p-12 max-lg:rounded-t-lg lg:rounded-l-lg">
        <img src={Sedan} alt="" className="mb-7"/>
        <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-white">Sedans</h2>
        <p className="font-lexend mb-7 text-offwhite lg:mb-20">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
        <a className="font-lexend bg-offwhitebg block text-orange px-10 py-3 rounded-3xl w-fit border-2 border-offwhitebg hover:text-offwhitebg hover:bg-orange transition ease-in-out delay-150 hover:scale-110 duration-300" href="https://www.webmotors.com.br/sedans" target="_blank">ver mais</a>
    </div>
  )
}

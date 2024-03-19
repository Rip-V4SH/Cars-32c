import Suv from "../assets/icon-suvs.svg"

export default function SUVs() {
  return (
    <div className="bg-green p-12">
        <img src={Suv} alt="" className="mb-7"/>
        <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-white">SUVs</h2>
        <p className="font-lexend mb-7 text-offwhite lg:mb-20">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
        <a className="font-lexend bg-offwhitebg block text-green px-10 py-3 rounded-3xl w-fit border-2 border-offwhitebg hover:text-offwhitebg hover:bg-green transition ease-in-out delay-150 hover:scale-110 duration-300" href="https://www.webmotors.com.br/suvs" target="_blank">ver mais</a>
    </div>
  )
}

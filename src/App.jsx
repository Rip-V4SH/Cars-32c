import Sedan from "./components/Sedans"
import SUVs from "./components/SUVs"
import Luxo from "./components/Luxo"

export default function App() {
  return (
    <main className="max-h-svh bg-offwhitebg py-20 px-6 antialised lg:flex justify-center items-center">
      <div className="lg:flex max-w-[920px]">
        <Sedan />
        <SUVs />
        <Luxo />
      </div>
    </main>
  )
}

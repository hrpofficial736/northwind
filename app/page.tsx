import Hero from "./components/Hero";
import NavBar from "./components/NavBar";


export default function Home () {
  
  return (
    <div className="w-screen h-screen overflow-x-hidden relative">
      <NavBar />
      <Hero />
    </div>
  )
}



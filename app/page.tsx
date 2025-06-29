import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import RareLiving from "./components/RareLiving";


export default function Home () {
  
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <RareLiving />
    </div>
  )
}



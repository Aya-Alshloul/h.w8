import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Pricing from './pages/Pricing'
import Features from './pages/Features'
import Enterprise from './pages/Enterprise'
import Support from './pages/Support'
function App() {

  // const planets = [
  //   { name: "Mars", isGasPlanet: false },
  //   { name: "Earth", isGasPlanet: false },
  //   { name: "Jupiter", isGasPlanet: true },
  //   { name: "Venus", isGasPlanet: false },
  //   { name: "Neptune", isGasPlanet: true },
  //   { name: "Uranus", isGasPlan
  // et: true },
  // ]

  // تصحيح الخطأ الإملائي من localCompare إلى localeCompare
  // planets.sort((a, b) => a.name.localeCompare(b.name))

  // إضافة خاصية key لكل عنصر لحل تحذير React
  // const newplanets = planets.map((p, i) => 
  //   p.isGasPlanet ? (
  //     <p key={p.name} style={{ color: "red" }}>{p.name}</p>
  //   ) : (
  //     <p key={p.name}>{p.name}</p>
  //   )
  // )

  return (
    // <>
    //   {newplanets}
    // </>
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/pricing'element={<Pricing/>}/>
          <Route path='features'element={<Features/>}/>
          <Route path='enterprise'element={<Enterprise/>}/>
          <Route path='support'element={<Support/>}/>


        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
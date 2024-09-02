import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Details from "./pages/Details"


const cars = [
  {
    id: 1,
    model: "Toyota Camry",
    price: 25000,
    image: "c1.png",
    category: "Sedan",
  },
  {
    id: 2,
    model: "Honda Accord",
    price: 28000,
    image: "c1.png",
    category: "Sedan",
  },
  {
    id: 3,
    model: "Toyota Camry",
    price: 25000,
    image: "c1.png",
    category: "Sedan",
  },
  {
    id: 4,
    model: "Toyota Camry",
    price: 25000,
    image: "c1.png",
    category: "Sedan",
  },
  {
    id: 5,
    model: "Toyota Camry",
    price: 25000,
    image: "c1.png",
    category: "Sedan",
  },
  {
    id: 6,
    model: "Toyota Camry",
    price: 25000,
    image: "c1.png",
    category: "Sedan",
  },
  {
    id: 7,
    model: "Toyota Camry",
    price: 25000,
    image: "c1.png",
    category: "Sedan",
  },
  {
    id: 8,
    model: "Toyota Camry",
    price: 25000,
    image: "c1.png",
    category: "Sedan",
  },
  {
    id: 9,
    model: "Toyota Camry",
    price: 25000,
    image: "c1.png",
    category: "Sedan",
  },
  {
    id: 10,
    model: "Toyota Camry",
    price: 25000,
    image: "c1.png",
    category: "Sedan",
  },
  {
    id: 11,
    model: "Toyota Camry",
    price: 25000,
    image: "c1.png",
    category: "Sedan",
  },
  {
    id: 12,
    model: "Toyota Camry",
    price: 25000,
    image: "c1.png",
    category: "Sedan",
  },
  {
    id: 13,
    model: "Toyota Camry",
    price: 25000,
    image: "c1.png",
    category: "Sedan",
  },
  {
    id: 14,
    model: "Toyota Camry",
    price: 25000,
    image: "c1.png",
    category: "Sedan",
  },
  {
    id: 15,
    model: "Toyota Camry",
    price: 25000,
    image: "c1.png",
    category: "Sedan",
  },
  {
    id: 16,
    model: "Toyota Camry",
    price: 25000,
    image: "c1.png",
    category: "Sedan",
  },
];

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home cars={cars} />} />
      <Route path="/details/:carId" element={<Details cars={cars} />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App

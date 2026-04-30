import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Details from "./pages/Details"
import CarsPage from "./pages/CarsPage"
import About from "./pages/About"
import Contact from "./pages/Contact"


const cars = [
  {
    id: 1,
    model: "Toyota Camry Hybrid",
    price: 25000,
    image: "https://images.unsplash.com/photo-1549399542-7e8f2e9389cb?auto=format&fit=crop&w=1200&q=80",
    category: "Sedan",
    year: 2024,
    transmission: "Automatic",
    seats: 5,
    mpg: 43,
  },
  {
    id: 2,
    model: "Honda Accord Sport",
    price: 28000,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    category: "Sedan",
    year: 2023,
    transmission: "Automatic",
    seats: 5,
    mpg: 35,
  },
  {
    id: 3,
    model: "Ford Mustang GT",
    price: 42000,
    image: "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=1200&q=80",
    category: "Sport",
    year: 2024,
    transmission: "Manual",
    seats: 4,
    mpg: 23,
  },
  {
    id: 4,
    model: "BMW X5",
    price: 65000,
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
    category: "SUV",
    year: 2024,
    transmission: "Automatic",
    seats: 5,
    mpg: 27,
  },
  {
    id: 5,
    model: "Mercedes C-Class",
    price: 54000,
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80",
    category: "Luxury",
    year: 2023,
    transmission: "Automatic",
    seats: 5,
    mpg: 30,
  },
  {
    id: 6,
    model: "Hyundai Tucson",
    price: 31000,
    image: "https://images.unsplash.com/photo-1617814076668-7fa8c7f9cb8c?auto=format&fit=crop&w=1200&q=80",
    category: "SUV",
    year: 2024,
    transmission: "Automatic",
    seats: 5,
    mpg: 33,
  },
  {
    id: 7,
    model: "Audi A6",
    price: 59000,
    image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1200&q=80",
    category: "Sedan",
    year: 2024,
    transmission: "Automatic",
    seats: 5,
    mpg: 29,
  },
  {
    id: 8,
    model: "Mazda CX-5",
    price: 34000,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    category: "SUV",
    year: 2024,
    transmission: "Automatic",
    seats: 5,
    mpg: 31,
  },
  {
    id: 9,
    model: "Lexus ES 300h",
    price: 46000,
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
    category: "Luxury",
    year: 2023,
    transmission: "Automatic",
    seats: 5,
    mpg: 44,
  },
  {
    id: 10,
    model: "Tesla Model 3",
    price: 47000,
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80",
    category: "EV",
    year: 2024,
    transmission: "Single Speed",
    seats: 5,
    mpg: 120,
  },
  {
    id: 11,
    model: "Kia Sportage",
    price: 32000,
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1200&q=80",
    category: "SUV",
    year: 2024,
    transmission: "Automatic",
    seats: 5,
    mpg: 34,
  },
  {
    id: 12,
    model: "Porsche Taycan",
    price: 91000,
    image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=1200&q=80",
    category: "EV",
    year: 2024,
    transmission: "Two-speed",
    seats: 4,
    mpg: 105,
  },
  {
    id: 13,
    model: "Nissan Altima",
    price: 29000,
    image: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&w=1200&q=80",
    category: "Sedan",
    year: 2023,
    transmission: "Automatic",
    seats: 5,
    mpg: 36,
  },
  {
    id: 14,
    model: "Jeep Wrangler",
    price: 45000,
    image: "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?auto=format&fit=crop&w=1200&q=80",
    category: "Off-road",
    year: 2024,
    transmission: "Automatic",
    seats: 5,
    mpg: 24,
  },
  {
    id: 15,
    model: "Volvo XC60",
    price: 51000,
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1200&q=80",
    category: "SUV",
    year: 2024,
    transmission: "Automatic",
    seats: 5,
    mpg: 28,
  },
  {
    id: 16,
    model: "Chevrolet Camaro",
    price: 44000,
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1200&q=80",
    category: "Sport",
    year: 2024,
    transmission: "Manual",
    seats: 4,
    mpg: 22,
  },
];

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home cars={cars} />} />
      <Route path="/cars" element={<CarsPage cars={cars} />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/details/:carId" element={<Details cars={cars} />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App

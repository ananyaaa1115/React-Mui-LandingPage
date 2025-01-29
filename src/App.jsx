import Footer from "./components/Footer";
import { Container } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ProductCarousel from "./components/ProductCarousel";
import TrendingSection from "./components/TrendingSection";
import PromoBanners from "./components/PromoBanner";
const newBornProducts = [
  {
    id: 1,
    title: "Summer clothes",
    savings: "Save from ₹1500",
    image:
      "https://images.pexels.com/photos/1620769/pexels-photo-1620769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "Party wear",
    savings: "Save from ₹1500",
    image:
      "https://images.pexels.com/photos/1620769/pexels-photo-1620769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "Jumpers",
    savings: "Save from ₹1500",
    image:
      "https://images.pexels.com/photos/1620769/pexels-photo-1620769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    title: "Night suit",
    savings: "Save from ₹1500",
    image:
      "https://images.pexels.com/photos/1620769/pexels-photo-1620769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    title: "Baby clothes",
    savings: "Save from ₹1500",
    image:
      "https://images.pexels.com/photos/1620769/pexels-photo-1620769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    title: "Casual Dress",
    savings: "Save from ₹1500",
    image:
      "https://images.pexels.com/photos/1620769/pexels-photo-1620769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
]

const girlsProducts = Array(8)
  .fill(null)
  .map((_, index) => ({
    id: index + 1,
    title: "Summer clothes",
    savings: "Save from ₹1500",
    image:
      "https://images.pexels.com/photos/1620769/pexels-photo-1620769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  }))

const boysProducts = Array(8)
  .fill(null)
  .map((_, index) => ({
    id: index + 1,
    title: "Summer clothes",
    savings: "Save from ₹1500",
    image:
      "https://images.pexels.com/photos/1620769/pexels-photo-1620769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  }))


function App() {
  return (
    <Container >
      <Header />
      <Hero />
      <Categories/>
      <TrendingSection />
      <PromoBanners />
      <ProductCarousel title="DEALS ON NEW BORN CLOTHES" products={newBornProducts} />
      <ProductCarousel title="DEALS ON KIDS CLOTHES (HER)" products={girlsProducts} />
      <ProductCarousel title="DEALS ON KIDS CLOTHES (HIM)" products={boysProducts} />
      <Footer />
    </Container>
  );
}

export default App;

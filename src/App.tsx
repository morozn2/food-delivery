import './App.css'
import { PreHeader } from './components/PreHeader/Pre-header'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Discounts } from './components/Discounts/Discounts'
import { Categories } from './components/Categories/Categories'
import { Restaurants } from './components/Restaurants/Restaurants'
import { Apps } from './components/Apps/Apps'
import { Vacancies } from './components/Vacancies/Vacancies'
import { AboutUs } from './components/AboutUs/AboutUs'

function App() {

  return (
    <div className='outer-container'>
      <PreHeader/>
      <Header />
      <Hero />
      <Discounts />
      <Categories />
      <Restaurants />
      <Apps />
      <Vacancies />
      <AboutUs />
    </div>
  )
}

export default App

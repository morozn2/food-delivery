import './App.css'
import { PreHeader } from './components/PreHeader/Pre-header'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'

function App() {

  return (
    <div className='outer-container'>
      <PreHeader/>
      <Header />
      <Hero />
    </div>
  )
}

export default App

import './Shop.css'
import HeroSection from './component/HeroSection/HeroSection'
import Navbar from './component/Navigation/Navbar'
import NewArrival from './component/Sections/NewArrival/NewArrival'
import Category from './component/Sections/Category/Category'
import content from './data/content.json'

function Shop() {
  return (
    <>
      <HeroSection/>
      <NewArrival title='New Arrivals'/>
      <Category title={content?.sections[0].title} data={content?.sections[0].data}/>
      <Category title={content?.sections[1].title} data={content?.sections[1].data}/>
    </>
  )
}

export default Shop
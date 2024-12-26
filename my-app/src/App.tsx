import Navbar from './Navbar'
import Footer from './Footer'
import Home from './LandingPage/Home/Home'
import Shop from './LandingPage/Shop/Shop'
import Sofa from './LandingPage/Sofa/Sofa'
import Blog from './LandingPage/Blog/Blog'
import Contact from './LandingPage/Contact/Contact'
import Cart from './LandingPage/Cart/Cart'
import Checkout from './LandingPage/Checkout/Checkout'
import Account from './LandingPage/MyAccount/Account'

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Shop />
      <Sofa />
      <Account />
      <Checkout />
      <Cart />
      <Contact />
      <Blog />
      <Footer />
    </div>
  )
}

import '../app/pages/global.css'
import Navbar from './components/navbar';
import Buttons from './components/buttons'
import '@fortawesome/fontawesome-svg-core/styles.css';
import ProductCard from './components/ProductCard';

export default function Home() {
    return (
      <>
      <Navbar/>
      <Buttons/>
      <div className="mx-auto px-4 py-4 container">
        <ProductCard />
      </div>
      </>
    );
  }
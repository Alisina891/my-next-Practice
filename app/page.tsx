import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'
import Pop from './components/pop'


export default function Home() {
  return (
    <div className='bg-white'>
    <Navbar />      
    <Header />
    <Main />
    <Footer />
    <Pop />
    </div>
  );
}

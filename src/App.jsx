import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px] md:pt-[140px]">
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;

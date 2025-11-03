import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#030711] scroll-smooth selection:bg-cyan-300/40 selection:text-white">
      <Navbar />
      <Hero />
      <Sections />
      <Contact />
      <footer className="border-t border-white/10 py-8 text-center text-white/50 bg-[#030711]">© {new Date().getFullYear()} Eupho Connects. All rights reserved.</footer>
    </div>
  );
}

export default App;

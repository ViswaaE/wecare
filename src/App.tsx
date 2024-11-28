import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CoachList } from './components/CoachList';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CoachList />
      <Footer />
    </div>
  );
}

export default App;
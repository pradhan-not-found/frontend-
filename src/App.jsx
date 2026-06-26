import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      <Navbar />
      <Hero />
    </div>
  );
}

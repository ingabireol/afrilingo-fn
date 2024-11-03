import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Main content goes here */}
      </main>
      <Footer />
    </div>
    
  )
}


export default App;

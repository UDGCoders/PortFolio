import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <main>
                <Hero />
                <Expertise />
            </main>
        </div>
    );
}

export default App;

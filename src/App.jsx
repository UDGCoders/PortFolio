import Sidebar from './components/Sidebar';
import Expertise from './components/Expertise';
import Background3D from './components/Background3D';

function App() {
    return (
        <div className="app-container">
            <Sidebar />
            <main className="right-content">
                <Background3D />
                <Expertise />
            </main>
        </div>
    );
}

export default App;

import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Home from './components/Home.jsx'
import Skills from './components/Skills.jsx'


export default function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <Home/>
                <Skills/>
                <Projects/>
                <Contact/>
            </main>
            <Footer/>
        </div>
    )
}




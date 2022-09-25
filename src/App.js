import { About, Work, Header, Skills, Contact } from './containers'
import { Navbar } from './components'
import './App.css'

function App() {
  return (
    <>
    <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Contact />
    </>
  );
}

export default App;

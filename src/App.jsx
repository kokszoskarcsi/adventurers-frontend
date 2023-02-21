import AppHeader  from './components/AppHeader/AppHeader'
import Faq from './components/Faq/Faq'
import Introduction from './components/Introduction/Introduction'
import Gallery from './components/Gallery/Gallery'
import Title from './components/Title/Title'
import './App.css'
function App() {

  return (
    <div className="App">
      <AppHeader></AppHeader>
      <Title></Title>
      <Gallery></Gallery>
      <Introduction></Introduction>
      <Faq></Faq>
    </div>
  )
}

export default App

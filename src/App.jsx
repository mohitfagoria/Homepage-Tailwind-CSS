import Footer from "./components/Footer"
import Header from "./components/Header"
import Body from "./components/Body"

function App() {
  

  return (
    
    <div className="bg-amber-50 min-h-screen py-3 px-6 flex flex-col gap-16 md:px-10 md:py-7 md:justify-between lg:px-16 lg:py-10 lg:space-y-1">
      
      <Header/>
      <Body/>
      <Footer/>
     

    </div>
     
  )
}

export default App

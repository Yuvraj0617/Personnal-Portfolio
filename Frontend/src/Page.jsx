import Landing from "./Pages/Landing"
import About from "./Pages/About"
import Project from "./Pages/Project"
import Contact from "./Pages/Contact"
import Footer from "./Components/Footer"
import Headers from "./Components/Header"
function Page() {
  return (
    <> 
        <Headers />
        <Landing />
        <About />
        <Project />
        <Contact />
        <footer className="mt-8">
          <Footer />
        </footer>
    </>
  )
}

export default Page

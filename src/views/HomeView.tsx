import Header from "../components/Header.tsx"
import Carousel from "../components/Carousel.tsx"
import Projects from "../components/Projects.tsx"
import Footer from "../components/Footer.tsx"

function HomeView() {
    return(
        <div>
            <Header activePath={"/"}/>
            <Carousel/>
            <Projects/>
            <Footer/>
        </div>
    )
}

export default HomeView;
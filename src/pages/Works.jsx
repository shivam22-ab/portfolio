import Navbar from "../components/Navbar"
import Menu from "../components/Menu"
import Work from '../components/Work'
import Footer from "../components/Footer"
import '../assets/css/project.css'
import { Link } from 'react-router-dom'


const Works = () => {
    const text = '<src>'
    const pagetitle = "Works"
    return (
        <>
            <Navbar />
            <Menu />
            <div className="projects d-flex justify-content-center align-items-center mb-0 mb-md-3 mb-lg-5 mb-xl-5" data-aos="zoom-in">
                <h1 className="mid-title">My Works.</h1>
            </div>
            <Work />
            <hr />
            <div className="github pt-3 pt-md-5 pt-lg-5 pt-xl-5 pb-5">
                <div className="container">
                    <h1 className="mid-title" data-aos="slide-right">Github Projects </h1>
                    <div className="description">
                        <p className="paragraph mt-4 mb-4 mb-md-5 mb-lg-0 mb-xl-0" data-aos="slide-right">
                            Here are some of my projects that I created during my spare time. I constantly keep on improving my skills by making these fun projects. These projects are available on my github repository
                        </p>
                    </div>
                    <div className="links mt-4 mt-sm-5 mt-md-5 mt-lg-5 mt-xl-5" data-aos="slide-right">
                        <div className="d-flex gap-2 gap-md-4 gap-lg-4 gap-xl-4 align-items-center">
                            <h5 className="small-title">01.</h5>
                            <h5 className="small-title">W3 School Clone</h5>
                            <Link to="https://github.com/shivam22-ab/W3SchoolClone" className="text-decoration-underline small-paragraph mb-1">{text}</Link>
                        </div>
                    </div>
                    <div className="links mt-2 mt-lg-4 mt-xl-4" data-aos="slide-right">
                        <div className="d-flex gap-2 gap-md-4 gap-lg-4 gap-xl-4 align-items-center">
                            <h5 className="small-title">02.</h5>
                            <h5 className="small-title">Betting Result Publishing Website</h5>
                            <Link to="https://github.com/shivam22-ab/Betting-Result-Publishing-System--Laravel" className="text-decoration-underline small-paragraph mb-1">{text}</Link>
                        </div>
                    </div>
                    <div className="links mt-2 mt-lg-4 mt-xl-4" data-aos="slide-right">
                        <div className="d-flex gap-2 gap-md-4 gap-lg-4 gap-xl-4 align-items-center">
                            <h5 className="small-title">03.</h5>
                            <h5 className="small-title">Weather Data Analysis</h5>
                            <Link to="https://github.com/shivam22-ab/Data-Analysis-In-R" className="text-decoration-underline small-paragraph mb-1">{text}</Link>
                        </div>
                    </div>
                    <div className="links mt-2 mt-lg-4 mt-xl-4" data-aos="slide-right">
                        <div className="d-flex gap-2 gap-md-4 gap-lg-4 gap-xl-4 align-items-center">
                            <h5 className="small-title">04.</h5>
                            <h5 className="small-title">Courier Management System</h5>
                            <Link to="https://github.com/shivam22-ab/Courier-Management-System" className="text-decoration-underline small-paragraph mb-1">{text}</Link>
                        </div>
                    </div>
                    <div className="links mt-2 mt-lg-4 mt-xl-4" data-aos="slide-right">
                        <div className="d-flex gap-2 gap-md-4 gap-lg-4 gap-xl-4 align-items-center">
                            <h5 className="small-title">05.</h5>
                            <h5 className="small-title">E-Learning System</h5>
                            <Link to="https://github.com/shivam22-ab/ELearning-System-Asp.Net" className="text-decoration-underline small-paragraph mb-1">{text}</Link>
                        </div>
                    </div>
                    <div className="links mt-2 mt-lg-4 mt-xl-4" data-aos="slide-right">
                        <div className="d-flex gap-2 gap-md-4 gap-lg-4 gap-xl-4 align-items-center">
                            <h5 className="small-title">06.</h5>
                            <h5 className="small-title">Bank App in C-programming</h5>
                            <Link to="https://github.com/shivam22-ab/Bank-App-in-C-programming" className="text-decoration-underline small-paragraph mb-1">{text}</Link>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}
export default Works


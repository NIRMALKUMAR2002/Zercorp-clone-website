import Corrosal from "../components/Corrosal/Corrosal";
import Moments from "../components/Moments/Moments";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";



const component = () =>{
    return(
        <>
        <Navbar/>
        <Corrosal/>
        <Moments name="nirmal"/>
        <Footer/>
 
        </>
    );
}

export default component;
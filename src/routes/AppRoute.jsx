import { BrowserRouter , Routes , Route} from  "react-router-dom";
import Home from "../pages/Home";
import NewMain from "../components/main";
// import page1 from "../pages/page1";
import Page9 from "../pages/page9";
import Book from "../pages/Book";
import Loginn from "../pages/Loginn";



const AppRoute = () => {
    return(
        <BrowserRouter>
           <Routes>
            <Route path="/" element={<Home/>}/>
            {/* <Route path="/page1" element={<Page9/>}/> */}
            <Route path="/fp" element={<Page9/>}/>
            <Route path="/book" element={<Book/>}/>
            <Route path="/login" element={<Loginn/>}/>
         
           </Routes>
        </BrowserRouter>
    );
}
export default AppRoute;
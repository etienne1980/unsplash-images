import ThemeToggle from "./components/ThemeToggle.jsx";
import Gallery from "./components/Gallery.jsx";
import SearchForm from "./components/SearchForm.jsx";

import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {


  return <main>
    <ToastContainer position={"top-center"} autoClose={1000}/>
    <ThemeToggle/>
    <SearchForm/>
    <Gallery/>


  </main>;
};
export default App;

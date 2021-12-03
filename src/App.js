import {Routes, Route} from "react-router-dom";
import {Home, Test} from "./pages";

function App() {


    return <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/test" element={<Test/>}/>
    </Routes>
}

export default App;

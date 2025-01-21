import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from '../src/views/HomeView.tsx';
import DocsView from '../src/views/DocsView.tsx';
import Business from '../src/views/DocsViews/Business.tsx'
import Design from '../src/views/DocsViews/Design.tsx'
import Electronics from '../src/views/DocsViews/Electronics.tsx'
import Manufacturing from '../src/views/DocsViews/Manufacturing.tsx'
import Programming from '../src/views/DocsViews/Programming.tsx'
import GyroNavX from "../src/views/DocsViews/ProgrammingDocsViews/GyroNavX.tsx"
import Radio from "../src/views/DocsViews/ProgrammingDocsViews/Radio.tsx"
import InventoryView from '../src/views/InventoryView.tsx';
import Bolts from '../src/views/InventoryViews/Bolts.tsx';
import Nuts from '../src/views/InventoryViews/Nuts.tsx';
import Screwdriver from '../src/views/InventoryViews/Screwdriver.tsx';
import Screws from '../src/views/InventoryViews/Screws.tsx';
import Washers from '../src/views/InventoryViews/Washers.tsx';
import LoginView from '../src/views/LoginView.tsx';

function App() {

  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeView/>} />
                <Route path="/login" element={<LoginView/>} />
                <Route path="/docs" element={<DocsView/>}>
                    <Route path="design" element={<Design/>}/>
                    <Route path="manufacturing" element={<Manufacturing/>}/>
                    <Route path="electronics" element={<Electronics/>}/>
                    <Route path="programming" element={<Programming/>}>
                        <Route path="gyro-navx" element={<GyroNavX/>}/>
                        <Route path="radio" element={<Radio/>}/>
                    </Route>
                    <Route path="business" element={<Business/>}/>
                </Route>
                <Route path="/inventory" element={<InventoryView/>}>
                    <Route path="bolts" element={<Bolts/>}/>
                    <Route path="nuts" element={<Nuts/>}/>
                    <Route path="screwdrivers" element={<Screwdriver/>}/>
                    <Route path="screws" element={<Screws/>}/>
                    <Route path="washers" element={<Washers/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App

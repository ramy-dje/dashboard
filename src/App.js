import React,{useEffect} from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import { registerLicense } from '@syncfusion/ej2-base'
import './App.css'
import {Navbar,Footer,Sidebar,ThemeSettings} from './components'
import {Area,Bar,Calendar,ColorMapping,ColorPicker,Customers,Ecommerce,Editor,Employees,Financial,Kanban,Line,
  Orders,Pie,Pyramid,Stacked} from './pages'
import {useStateContext} from './contexts/ContextProvider'


function App() {
  const {activeMenu,themeSettings,setthemeSettings,currentColor,currentMode} = useStateContext();
  registerLicense('ORg4AjUWIQA/Gnt2VFhiQlBEfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5UdkNiWX1dcXBST2Nd')
  return (
    <div className={currentMode =="Dark" ? 'dark' :''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{zIndex:'100'}}>
            <TooltipComponent content='Settings' position="top"> 
              <button type="button " className="text-4xl hover:drop-shadow-xl hover:bg-light-gray text-white p-3" 
                style={{backgroundColor:currentColor,borderRadius:'50%'}} onClick={()=>setthemeSettings(true)}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {
            activeMenu ?( 
              <div className="w-72 fixed sidebare dark:bg-secondary-dark-bg bg-white drop-shadow-lg">
                <Sidebar />
              </div>):( 
              <div className="w-0 dark:bg-secondary-dark-bg">
               
              </div>)
          }
          <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen  w-full ${activeMenu ? `md:ml-72`:`flex-2`}`}>
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                <Navbar />
            </div>
        
          <div>
            {themeSettings && <ThemeSettings />}
            <Routes>
              {/* DASHBOARD */}
              <Route path="/" element= {<Ecommerce />}/>
              <Route path="/ecommerce" element= {<Ecommerce />}/>
              {/* PAGES */}
              <Route path="/orders" element= {<Orders />}/>
              <Route path="/employees" element={ <Employees />}/>
              <Route path="/customers" element= {<Customers />}/>
              {/* APPS */}
              <Route path="/kanban" element= {<Kanban />}/>
              <Route path="/editor" element= {<Editor />}/>
              <Route path="/calendar" element= {<Calendar />}/>
              <Route path="/color-picker" element= {<ColorPicker />}/>
              {/* CHARTS */}
              <Route path="/line" element= {<Line />}/>
              <Route path="/area" element= {<Area />}/>
              <Route path="/pie" element= {<Pie />}/>
              <Route path="/financial" element= {<Financial/>}/>
              <Route path="/color-mapping" element= {<ColorMapping />}/>
              <Route path="/pyramid" element= {<Pyramid />}/>
              <Route path="/stacked" element= {<Stacked />}/>

            </Routes>
          </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

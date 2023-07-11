import react,{useContext,createContext,useState} from 'react' ;

const stateContext = createContext();

const initialState = {
    chat : false,
    cart :false,
    userProfile:false,
    notification:false
}
export const ContextProvider = ({children})=>{
    const [activeMenu, setActiveMenu] = useState(false);
    const [isClicked,setIsClicked] = useState(initialState);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setthemeSettings] = useState(false);
    const setMode = (e)=>{
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode',e.target.value);
        setthemeSettings(false);
    }
    const setColor = (color)=>{
        setCurrentColor(color);
        localStorage.setItem('themeColor',color);
        setthemeSettings(false);
    }

    const handleClick = (clicked)=>{
        setIsClicked({...initialState,[clicked]:true})
    }
    const [screenSize, setScreenSize] = useState(undefined)
    return(
        <stateContext.Provider value={{activeMenu,setActiveMenu,isClicked,setIsClicked,handleClick,screenSize,setScreenSize,currentColor,currentMode,setCurrentColor,setCurrentMode,setColor,setMode,themeSettings, setthemeSettings}}>
            {children}
        </stateContext.Provider>
    )
}
export const useStateContext = ()=> useContext(stateContext)
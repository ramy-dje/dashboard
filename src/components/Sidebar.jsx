import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import {SiShopware} from 'react-icons/si'
import {MdOutlineCancel} from 'react-icons/md'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'
import {links} from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'


const Sidebar = () => {
  const {activeMenu,setActiveMenu,screenSize,currentColor} = useStateContext() ;
  const [currentActiveMenuItem,setCurrentActiveMenuItem] = React.useState('Ecommerce');
  const activeLink = `flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-200  text-md m-2`;
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 text-md dark:text-white dark:hover:text-black hover:bg-light-gray m-2';
  const handleSideBar = (name)=>{
    setCurrentActiveMenuItem(name);
    if(activeMenu && screenSize < 900)
      setActiveMenu(false);
  }
  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 '>
      {activeMenu && (<>
        <div className='flex justify-between items-center'>
          <Link to={'/'} className='flex items-center gap-2 mt-2 text-3xl font-extrabold text-slate-900' onClick={()=> setActiveMenu(false)}><SiShopware/> 
            <h3 >shopee</h3></Link>
        </div>
        <TooltipComponent content='menu'  className='absolute right-1 top-1 text-xl'>
          <button type='button' onClick={()=>{setActiveMenu((prv)=>!prv)}}>
            <MdOutlineCancel />
          </button>
        </TooltipComponent>

        <div className='mt-7'>
          {links.map((e,i)=>(
              <div key={e.title} className='hover:cursor-pointer'> 
                <p className='text-gray-400 mt-4 uppercase'> {e.title} </p>
                {
                  e.links.map((link)=>(
                    <NavLink 
                      to={`/${link.name}`}
                      key={link.name}
                      onClick={()=>handleSideBar(link.name)}
                      className={link.name === currentActiveMenuItem  ? activeLink : normalLink}
                      style={link.name === currentActiveMenuItem ?{backgroundColor:currentColor}:{}}
                    >
                      {link.icon}
                      <span className='capitalize'> {link.name}</span>
                    </NavLink>  
                  ))
                }
              </div>
          ))}
        </div>
      </>)}  
      
    </div>
  )
}

export default Sidebar
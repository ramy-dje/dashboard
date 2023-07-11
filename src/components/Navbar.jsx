import React,{useEffect} from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import {FiShoppingCart} from 'react-icons/fi';
import {BsChatLeft} from 'react-icons/bs';
import {RiNotification3Line} from 'react-icons/ri';
import {MdKeyboardArrowDown} from 'react-icons/md';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import {Cart,Chat,Notification,UserProfile} from '.';
import { useStateContext } from '../contexts/ContextProvider';
import  Avatar from '../data/avatar.jpg';

const NavButton = ({title,cutumeFunc,icon,color,dotColor})=>(
  <TooltipComponent content={title} position='BottomCenter'>
    <button type='button' onClick={cutumeFunc} style={{color}}
    className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
      <span style={{background:dotColor}} className='absolute inline-flex rounded-full h-2 w-2'/>{icon}
    </button>
  </TooltipComponent>
)
const Navbar = () => {

  const {activeMenu,setActiveMenu,isClicked,setIsClicked,handleClick,screenSize,setScreenSize,currentColor} = useStateContext();
  

  useEffect(()=>{
    const handleResize = ()=>setScreenSize(window.innerWidth);
    window.addEventListener('resize',handleResize);
    handleResize();
    return ()=>window.removeEventListener('resize',handleResize);
  },[screenSize])

  useEffect(()=>{
    if(screenSize > 900)
      setActiveMenu(true);
    else
      setActiveMenu(false) ; 
  },[screenSize])

  return (
    <div className='flex justify-between p-2 md:mx-6 relative '>
      <NavButton title='Menu' cutumeFunc={()=>setActiveMenu((prev)=>!prev)} color={currentColor} icon={<AiOutlineMenu />}/>
      <div className='flex'>
        <NavButton title='Cart' cutumeFunc={()=>handleClick('cart')} dotColor='#03C9D7' color={currentColor} icon={<FiShoppingCart />}/>
        <NavButton title='Chat' cutumeFunc={()=>handleClick('chat')} dotColor='#03C9D7'  color={currentColor} icon={<BsChatLeft />}/>
        <NavButton title='Notifications' cutumeFunc={()=>handleClick('notification')} dotColor='#03C9D7'  color={currentColor} icon={<RiNotification3Line />}/>
        <TooltipComponent content='profile' position='BottomCenter'>
          <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' 
          onClick={()=>handleClick('userProfile')}>
            <img src={Avatar} className='rounded-full w-8 h-8'/>
            <p>
              <span className='text-gray-400 text-14'>hi, </span>{' '}
              <span className='text-gray-400 font-bold ml-1 text-14'>RAMY</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14'/>
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  )
}

export default Navbar
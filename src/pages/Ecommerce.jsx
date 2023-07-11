import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import {Stacked,Pie,Button,SparkLine} from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats,
dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
const Ecommerce = () => {
  const {currentColor} = useStateContext();
  return (
    <div className='pt-12 dark:bg-main-dark-bg'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:bg-secondary-dark-bg dark:text-gray-200 h-48 rounded-xl  lg:w-3/4 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between flex-col h-full'>
            <div>
              <p className='text-gray-500'>EARNINGS</p>
              <p className='text-2xl'>$64,223.21</p>
            </div>
            <div>
            <Button color='white' bgColor={currentColor} text='Download' borderRadius='10px'size='md'/>
          </div>
          </div>
         
        </div>
      </div>
      <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
        {earningData.map((items)=>(
          <div key={items.title} className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'>
            <button type='button' style={{color:items.iconColor,backgroundColor:items.iconBg}} 
            className='text-2xl rounded-full p-4 hover:drop-shadow-xl'>
              {items.icon}
            </button>
            <p className='mt-3'>
              <span className='text-lg font-semibold'>{items.amount}</span>
              <span className={ (items.percentage[0] == '+')?'text-sm text-green-500 ml-2':'text-sm text-red-500 ml-2' }>{items.percentage}</span>
            </p>
            <p className='text-sm mt-1 text-gray-400'>{items.title}</p>
          </div> 
        ))

        }
      </div>
      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>Revenue Updates</p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span></span>
                <span>expences</span>
              </p>
              <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
                <span></span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className='mt-10 flex gap-10 flex-wrap justify-center'>
            <div className='border-r-1 border-color m-4 pr-10'>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>$93,434</span>
                  <span className='p-1.5 cursor-pointer bg-green-400 rounded-full text-white ml-3 hover:drop-shadow-xl'>23%</span>
                </p>
                <p className='text-gray-400'>Expences</p>
              </div>
              <div className='mt-5'>
                <p>
                  <span className='text-3xl font-semibold'>$210,434</span>
                </p>
                <p className='text-gray-400'>Budget</p>
              </div>
              <div className='mt-5'>
                <SparkLine currentColor={currentColor} id='line-sparkline' type='Line' height='80px' width='250px' 
                data={SparklineAreaData} color={currentColor}/>
                    
              </div>
              <div className='mt-10'>
                <Button color='white' bgColor={currentColor} borderRadius='15px' text='Download Report'/>
              </div>
            </div>
            <div>
              <Stacked height='320px' width='360px'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecommerce
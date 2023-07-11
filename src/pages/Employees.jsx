import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Search,Page, Toolbar, Inject } from '@syncfusion/ej2-react-grids';
import { employeesData, contextMenuItems, employeesGrid } from '../data/dummy';
import { Header } from '../components';
import { sort } from '@syncfusion/ej2-react-charts';


const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
        <Header categeory='Page' title='Employees' />
        <GridComponent id='gridcomp' dataSource={employeesData} allowPaging allowSorting toolbar={['Search']} width={'auto'}>
            <ColumnsDirective>
                {employeesGrid.map((item,index)=>(
                    <ColumnDirective key={index} {...item}/>
                ))}
            </ColumnsDirective>
            <Inject services={[Page,Toolbar,Search]}/>
        </GridComponent>
    </div>
  )
}

export default Employees
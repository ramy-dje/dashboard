import React from 'react'
import {ChartComponent,SeriesCollectionDirective,SeriesDirective,Legend,Category,StackingColumnSeries,Tooltip, Inject} from '@syncfusion/ej2-react-charts'
import {stackedCustomSeries,stackedPrimaryXAxis,stackedPrimaryYAxis} from '../../data/dummy'

const Stacked = ({height,width}) => {
  return (
    <ChartComponent id='charts' height={height} width={width} chartArea={{border:{width:0}}} tooltip={{enable:true}} legendSettings={{background:'white'}} primaryXAxis={stackedPrimaryXAxis} primaryYAxis={stackedPrimaryYAxis}>
      <Inject services={[Legend,Category,StackingColumnSeries,Tooltip]}/>
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item,index)=><SeriesDirective key={index} {...item}/>)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked
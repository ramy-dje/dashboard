import React from 'react'
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import { Header } from '../components';
import { EditorData } from '../data/dummy';
const Editor = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header categeory='App' title='Text editor'/>
      <RichTextEditorComponent>
        <Inject services={[Image,Link,QuickToolbar,HtmlEditor,Toolbar]}/>
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor
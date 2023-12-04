import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PDFViewer } from '@react-pdf/renderer'
import { MyDocument } from './components/DocuPDF.JSX'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     
      <div className="card">
      <PDFViewer style={{width: "100%" , height:"90vh"}}>
        <MyDocument/>
      </PDFViewer>
      </div>
     
    </>
  )
}

export default App

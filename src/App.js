import 'primereact/resources/themes/lara-light-indigo/theme.css' //theme
import 'primereact/resources/primereact.min.css' //core css
import 'primeicons/primeicons.css'

import {Editor} from 'primereact/editor'

import { useState } from 'react'

function App() {
  const [value1, setValue1]=useState("");
  return (
    <div style={{padding: "75px",  display:"flex", gap: "2rem", backgroundColor:"#A9A9A9"}}>

    <div style={{width: "100%", border: "1px solid black"}}>
      <Editor value={value1} onTextChange={(e)=> setValue1(e.htmlValue)} style={{height:"500px"}} />
       </div>
    </div>
  );
}

export default App;

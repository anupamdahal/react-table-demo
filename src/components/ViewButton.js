import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import { useState } from "react"
import { getResult } from "../getData"

import Table from './Table/Table';
import { resultColumn } from "./Table/Colums"


const ViewButton = (props) => {

  const [data, setData] = useState([])
  
  const handler = (tableProps) => {
    const requestId = tableProps.data[tableProps.row.index].request_id
    const [content, error] = getResult(requestId)
    
    if(error) return
    setData(state => content)
  }

  return (
    <button
      onClick={() => handler(props)}
    >
      <Popup trigger={<button> Trigger</button>} position="right center">
        <Table columns={resultColumn} data={data}/>
      </Popup>
    </button>
  )
}

export default ViewButton
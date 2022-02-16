import { getResult } from "../getData"
import { useDispatch } from "react-redux"

import { resultAction } from '../store/resultSlice'

const ViewButton = (props) => {

  const dispatch = useDispatch()
  const handler = async ({ props }) => {

    const requestId = props.data[props.row.index].request_id
    const [content, error] = await getResult(requestId)

    console.log(content, error)
    
    if(error) return
    dispatch(resultAction.updateData(content.result.dataValues))
    dispatch(resultAction.toggleOpen())
  }

  return (
    <button
      onClick={() => handler(props)}
    >
     View
    </button>
  )
}

export default ViewButton
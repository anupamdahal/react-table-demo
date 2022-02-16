import { useDispatch } from "react-redux"
import { resultAction } from '../store/resultSlice'

const CloseButton = () => {

  const dispatch = useDispatch()
  const handler = () => {
    dispatch(resultAction.toggleOpen())
  }

  return (
    <button
      onClick={() => handler()}
      style={{cursor:'pointer', float:'right', marginTop: '5px', width: '20px'}}
    >
     x
    </button>
  )
}

export default CloseButton
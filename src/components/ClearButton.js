import { difference } from "lodash"
import { useSelector, useDispatch } from "react-redux"
import { requestIDActions } from "../store/requestIDSlice"

const ClearButton = () => {
  const requestID = useSelector(state => state.requestID)

  const onClickHandler = () => {
    const activeID = difference(requestID.active, requestID.selected)
    useDispatch(requestIDActions.updateActive(activeID))
    useDispatch(requestIDActions.updateSelected([]))
  }

  return (
    <button onClick={onClickHandler}>
      Clear
    </button>
  )

}

export default ClearButton
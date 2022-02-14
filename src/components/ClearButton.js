import { difference } from "lodash"
import { useSelector, useDispatch } from "react-redux"
import { requestIDActions } from "../store/requestIDSlice"

const ClearButton = () => {
  const dispatch = useDispatch()
  const selector = useSelector()

  const onClickHandler = () => {
    const requestID = selector(state => state.requestID)
    const activeID = difference(requestID.active, requestID.selected)
    dispatch(requestIDActions.updateActive(activeID))
    dispatch(requestIDActions.updateSelected([]))
  }

  return (
    <button onClick={onClickHandler}>
      Clear
    </button>
  )
}

export default ClearButton
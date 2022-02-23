import { difference } from "lodash"
import { useSelector, useDispatch } from "react-redux"
import { requestIDActions } from "../store/requestIDSlice"

import { key } from "../data/metadata"

const ClearButton = () => {
  const dispatch = useDispatch()
  const requestID = useSelector(state => state.requestID)

  const onClickHandler = () => {
    const activeID = difference(requestID.active, requestID.selected)
    localStorage.setItem(key, JSON.stringify(activeID))
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
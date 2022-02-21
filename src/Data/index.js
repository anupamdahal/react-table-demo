import requestData from "../utils/apiHelper"
import { key, getResultURI, getStatusURI } from './metadata'
import { safeResolve } from "../utils/errorHandler"

const getStatus = async (ids) => {
  const body = {
    [key] : ids
  }
  return safeResolve(requestData(getStatusURI, body))
}
const getResult = async (id) => {
  const body = {
    [key]: id
  }
  return safeResolve(requestData(getResultURI, body))
};

export { getResult, getStatus }
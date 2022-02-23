import requestData from "../utils/apiHelper"
import { key, getResultURI, getStatusURI, startCloudWorkflowURL } from './metadata'
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
}

const startCloudWorkflow = async (payload) => {
  return safeResolve(requestData(startCloudWorkflowURL, payload))
}

export { getResult, getStatus, startCloudWorkflow }
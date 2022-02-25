import { key } from "../data/metadata"

export const updateStoredRequestID = (callback, ...params) => {
  const stored = JSON.parse(localStorage.getItem(key))
  const activeIDs = callback(stored, ...params)
  localStorage.setItem(key, JSON.stringify(activeIDs))
  return activeIDs
}

export const getActiveIDs = () => {
  return updateStoredRequestID((stored) => {
    return stored?.length ? stored : []
  })
}

export const pushActiveIDs = (ids) => {
  return updateStoredRequestID((stored) => {
    return [...new Set(stored).add(...ids)]
  })
}
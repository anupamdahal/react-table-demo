const key = "request_id"
const ids = ["1HRUq2kEQQ", "bjAwLPMPwd", "dk00foKRqP", "DB27ynegt9", "NSYq1WYfKM", "FAMB8rfpne"]

const baseURL = "https://n9uowbutv1.execute-api.us-east-1.amazonaws.com/default/"
const getStatusURI = `${baseURL}/get_status`
const getResultURI = `${baseURL}/get_result`
const interval = 5000

export { key, ids, baseURL, getResultURI, getStatusURI, interval }
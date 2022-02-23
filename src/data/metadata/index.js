import boundaryUnits from "./boundaryUnits"
import { orgUnitsMap, enumOrgUnits } from "./organizationUnits"
import { userStore, precipitationData, vegetationData, temperatureData } from "./dataset"
import { MEAN } from "./statType"

const key = "request_id"
const ids = ["1HRUq2kEQQ", "bjAwLPMPwd", "dk00foKRqP", "DB27ynegt9", "NSYq1WYfKM", "FAMB8rfpne"]

const baseURL = "https://n9uowbutv1.execute-api.us-east-1.amazonaws.com/default/"
const getStatusURI = `${baseURL}/get_status`
const getResultURI = `${baseURL}/get_result`
const startCloudWorkflowURL = 'https://9t06h5m4bf.execute-api.us-east-1.amazonaws.com/default/start_cloud_workflow' 
const interval = 5000

export { startCloudWorkflowURL ,userStore, precipitationData, vegetationData, temperatureData, boundaryUnits, orgUnitsMap, enumOrgUnits, key, ids, baseURL, getResultURI, getStatusURI, interval, MEAN }
const userStore = {
  dhis_dist_version : "guinea_2",
  vegetationDataElementId : "bUBLqMJTkp4",
  temperatureDataElementId : "afWPpfBwIaa",
  precipitationDataElementId : "oYJ51K7AJvQ"
}

const precipitationData = {
  product: 'GPM_3IMERGDF_06',
  var_name: 'precipitationCal',
  x_start_stride_stop: '',
  y_start_stride_stop: '',
}

const vegetationData = {
  product: 'MOD13A2',
  var_name: '_1_km_16_days_NDVI',
  x_start_stride_stop: '[0:5:1199]',
  y_start_stride_stop: '[0:5:1199]',
} 


const temperatureData = {
  product: 'MOD11B2',
  var_name: 'LST_Day_6km',
  x_start_stride_stop: '',
  y_start_stride_stop: '',
}

export const PRECIPATION = 'precipation'
export const TEMPERATURE = 'temperature'
export const VEGETATION = 'vegetation'

export const enumDatasets = [
  PRECIPATION,
  TEMPERATURE,
  VEGETATION
]

export const datasets = {
  [PRECIPATION]: precipitationData,
  [TEMPERATURE]: temperatureData,
  [VEGETATION]: vegetationData,
} 

export { userStore, precipitationData, vegetationData, temperatureData }
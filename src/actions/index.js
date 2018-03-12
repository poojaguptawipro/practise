import axios from 'axios';

let config =
{
headers:
  {
 'Content-Type': 'application/json',
 'Ocp-Apim-Subscription-Key': 'a2fe1cf9de1348a2bb328fbebe01a4fa '
  }
}

let data =
{
  "key":"db02f200647c9d5c45e319078a5ddfac",
  "masterIdentifier":"MASTER_MODULES",
  "page":1,
  "limit":5,
  "search":"",
  "order":{"module":1}
}


export function fetchData(){

let array=axios.post(' https://c4tneplantest.azure-api.net/platform/platform/masterdetails/get',data,config)

return {
  type:'fetch',
  payload:array
}

}

export function postData(value){
  let data =
  {
    "key":"db02f200647c9d5c45e319078a5ddfac",
    "masterIdentifier":"MASTER_MODULES",
    "data":value
  }
  let array=axios.post(' https://c4tneplantest.azure-api.net/platform/platform/masterdetails/add',data,config)

  return {
    type:'post',
    payload:array
  }
}

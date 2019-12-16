import ajax from './ajax'
export const req_address = (longitude,latitude)=>ajax(`/position/${latitude},${longitude}`)
export const req_categorys = ()=>ajax('/index_category')
export const req_shops = ({longitude,latitude})=>ajax('/shops')
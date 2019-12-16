import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS} from './mutationtypes'
import {req_address,req_categorys,req_shops} from '../api/index.js'
export default {
  async getaddress({commit,state}){
    const {longitude,latitude} = state
    const result = await req_address(longitude,latitude)
    if(result.code===0){
      const address = result.data
      commit(RECEIVE_ADDRESS,address)
    }
  },
  async getcategorys({commit}){
    const result = await req_categorys()
    if(result.code===0){
      const categorys = result.data
      commit(RECEIVE_CATEGORYS,categorys)
    }
  },
  async getshops({commit,state}){
    const {longitude,latitude} = state
    const result = await req_shops(longitude,latitude)
    if(result.code===0){
      const shops = result.data
      commit(RECEIVE_SHOPS,shops)
    }
  }
  
}
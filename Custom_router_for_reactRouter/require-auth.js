import jwtDecode from 'jwt-decode'
import store from './configureStore'
import { getUser } from '../modules/user/actions/user-actions'

export async function requireAuth() {

  //console.log('requireAuth ', store.getState().user)

  /******************** */
  let token = localStorage.getItem('token')
  if (token) {
    try {
      let decoded = jwtDecode(token)
      if (decoded && decoded.exp) {
        let current_time = Date.now().valueOf() / 1000
        if (current_time > decoded.exp) { /* expired */return false }
        let { user } = store.getState()
        if (!user.username.length) {
          await store.dispatch(getUser())
        }
        return true
      }
    } catch (e) {
      return false
    }
  }
  return false
}

export async function requireAuthPermission(modelName,actionName) {

  let authenticated = await requireAuth()
  let grantsObject = store.getState().user.grants

  let modulesArr = []
    for(var values in grantsObject)
    {
        modulesArr.push({ val: grantsObject[values][modelName][actionName] })
    }
    let grantObjtLength = modulesArr[0].val.length
    if (authenticated &&  grantObjtLength > 0){
        return true
    }else {
        return false
    }
}

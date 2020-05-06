let authState={
    isLoggedIn:true,
    name:"",
    email:"",
    mobile:""
}

export function authReducer(state=authState,action) {
  // console.log(state)
  let stateCopy={...state}
  switch(action.type){
    case "GET_NAME":
      stateCopy.name=action.payload
      return stateCopy
    case "GET_EMAIL":
      stateCopy.email=action.payload
      return stateCopy
     case "GET_MOBILE":
       stateCopy.mobile=action.payload 
       
       return stateCopy  
      case "SIGN_IN":
        stateCopy.isLoggedIn=true
        // console.log(action.payload)
        return stateCopy 
     default:
       return stateCopy 
  }

  
  }
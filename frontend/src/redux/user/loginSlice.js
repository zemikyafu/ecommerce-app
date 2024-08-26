const initialState={
    user:null,
    loggedIn:false
}

const loginReducer=(state=initialState,action)=>
 {
    switch(action.type)
    {
      case 'user/login':
        return {...state, user:action.payload,loggedIn:true};
      case 'user/logout':
        return {...state,user:null,loggedIn:false};
    default:
        return state;

    }

 }
 export default loginReducer
import {useContext} from "react";
import {AppContext} from "../../utils/ContextProvider";

export default function NeedAuth({children}){
	
	const appCtx = useContext(AppContext);
  if(appCtx === null){
    return
  }
    let user = appCtx.user;
    
    if(user.session === 'admin' ){
      return children
    } else {
      return
    }
  }
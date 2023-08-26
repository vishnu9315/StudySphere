export async function login(authDetails){
    const requestOptions = {
            
        method: 'POST',
        headers: {"content-Type": "application/json"},
        body: JSON.stringify(authDetails)
        
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/login`, requestOptions);
    if(!response.ok){
        throw {message : response.statusText, status: response.status}
    }  
    const data = await response.json();
    
    //if we have accesstoken we are storing it in sessionStorage
    if(data.accessToken){
      sessionStorage.setItem("token", JSON.stringify(data.accessToken))
      sessionStorage.setItem("scid", JSON.stringify(data.user.id))
    }
   return data;
}

export async function register(authDetails){
    const requestOptions = {
            
        method: 'POST',
        headers: {"content-Type": "application/json"},
        body: JSON.stringify(authDetails)
        
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/register`, requestOptions);
    if(!response.ok){
        throw {message : response.statusText, status: response.status}
    }  
    const data = await response.json();
    //if we have accesstoken we are storing it in sessionStorage
    if(data.accessToken){
      sessionStorage.setItem("token", JSON.stringify(data.accessToken))
      sessionStorage.setItem("scid", JSON.stringify(data.user.id))
    }
    return data;
}

export function logout(){
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("scid");
}
export async function getUser(){
    const token = JSON.parse(sessionStorage.getItem("token"));
    const scid = JSON.parse(sessionStorage.getItem("scid"));
    const requestOptions =  {
        method: 'GET',
        headers: { 'content-type': "application/json", Authorization: `Bearer ${token}` }
    }
    //restricting the user only user wit particular id and token can be used to fetch the name and email
    const response = await fetch(`http://localhost:8000/600/users/${scid}`, requestOptions)
    if(!response.ok){
        throw {message : response.statusText, status: response.status} //eslint-disable-line
    }  
    const data = await response.json();
    return data;
}

export async function createOrder(cartList, total, user){
    const token = JSON.parse(sessionStorage.getItem("token"));
    const order = {
        cartList: cartList,
        amount_paid: total,
        quantity: cartList.length,
        user: {
            name: user.name,
            email: user.email,
            id: user.id
        }
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders/`, {
        method: 'POST',
        headers: { 'content-type': "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(order)
    })
    if(!response.ok){
        throw {message : response.statusText, status: response.status} //eslint-disable-line
    }  
    const data = await response.json();
    return data;
}

export async function getUserOrders(){
    const token = JSON.parse(sessionStorage.getItem("token"));
    const scid = JSON.parse(sessionStorage.getItem("scid"));
     //restricting the user only user with particular id and token can be used to fetch the products detai;s
     const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${scid}`, {
        method: 'GET',
        headers: { 'content-type': "application/json", Authorization: `Bearer ${token}` }
    })
    if(!response.ok){
        throw {message : response.statusText, status: response.status} //eslint-disable-line
    }  
    const data = await response.json();
    return data;
}
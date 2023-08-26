//ProductList page //featured page
export async function getProductList(searchTerm){
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/products?name_like=${searchTerm ? searchTerm : ""}`); //if searchVaue exits then search that value else pass nothing and return all the products
    //if response get failed
    if(!response.ok){
        throw {message : response.statusText, status: response.status} //eslint-disable-line
    }  
    const data = await response.json();
      return data;
} 

export async function getProduct(id){
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/products/${id}`);
    if(!response.ok){
        throw {message : response.statusText, status: response.status} //eslint-disable-line
    }  
    const data = await response.json();
    return data;
} 

export async function getFeauturedList(){
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/featured_products`)
    if(!response.ok){
        throw {message : response.statusText, status: response.status} //eslint-disable-line
    }  
    const data = await response.json();
    return data;
} 

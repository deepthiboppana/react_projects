//For Add Item To Cart
export const addCart=(product)=>{
    return{
        type : "ADDITEM",
        payload:product
    }
}

//For Add Delete Item To Cart
export const delCart=(product)=>{
    return{
        type : "DELITEM",
        payload:product
    }
}
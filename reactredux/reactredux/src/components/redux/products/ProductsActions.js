import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./ProductsTypes"

export const fetchRequest=()=>{
    return {
        type:FETCH_REQUEST
    }
}

export const fetchSuccess=(products)=>{
    return {
        type:FETCH_SUCCESS,
        payload:products
    }
}

export const fetchError=(error)=>{
    return {
        type:FETCH_ERROR,
        payload:error
    }
}

export const fetchProducts=()=>{
    return (dispatch)=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=> {
            //console.log(res.data)
            const products = res.data;
            console.log(products);
        }
        ).catch(err=>{
            //console.log(err)
            const errorMsg = err.message;
            dispatch(fetchError(errorMsg))
        })
    }
}
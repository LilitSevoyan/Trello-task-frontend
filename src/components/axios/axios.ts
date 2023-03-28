import axios from "axios"

export const getAllCard = ()=>{
    return axios.get("http://localhost:8000")
    .then((response) => {
        return response.data
    })
    .catch(function (error) {
        console.log(error);
    })   
    
}
export const getIdItem = (id:string)=>{
    return axios.get(`http://localhost:8000/${id}`)
    .then((response) => {
        return response.data
    })
    .catch(function (error) {
        console.log(error);
    })   
    
}

export const postAddCard = ()=>{
    return axios.post("http://localhost:8000")
    .then((response) => {
        return response.data
    })
    .catch(function (error) {
        console.log(error);
    })   
    
}
export const postAddCardItem = (TaskId:any,title:any,description:any)=>{
    return axios.post(`http://localhost:8000/${TaskId}`,{
        title,
        description
    })
    .then((response) => {
        return response.data
    })
    .catch(function (error) {
        console.log(error);
    })   
    
}
export const putChangeItem = (TaskId:any,objectId:any,title:any,description:any)=>{
    return axios.put(`http://localhost:8000/update/${TaskId}`,{
        objectId,
        title,
        description
    })
    .then((response) => {
        return response.data
    })
    .catch(function (error) {
        console.log(error);
    })   
    
}

export const putDragAndDrop = (CardId:any,_id:any,object:any)=>{
    return axios.put(`http://localhost:8000/delete/${CardId}`,{
        _id,
        object
    })
    .then((response) => {
        return response.data
    })
    .catch(function (error) {
        console.log(error);
    })   
    
}

import {createAsyncThunk} from "@reduxjs/toolkit"
import {
        postAddCard,
        getAllCard,
        postAddCardItem,
        getIdItem,
        putChangeItem,
        putDragAndDrop
    } from "../../axios/axios"

export const postAddCardAction = createAsyncThunk(
    'main/postAddCard',
    async ()=>{
        const addCard = await postAddCard()
        return addCard
    }
)

export const getAllCardAction = createAsyncThunk(
    'main/getAllCard',
    async ()=>{
        const allCard = await getAllCard()
        return allCard
    }
)
export const getIdItemAction = createAsyncThunk(
    'main/getIdItem',
    async (id:string)=>{
        const IdItem = await getIdItem(id)
        return IdItem
    }
)
export const postAddCardItemAction = createAsyncThunk(
    'main/postAddCardItem',
    async ({TaskId,title,description}:any)=>{
        const cardItem = await postAddCardItem(TaskId,title,description)
        return cardItem
    }
)
export const putChangeItemAction = createAsyncThunk(
    'main/putChangeItem',
    async ({TaskId,objectId,title,description}:any)=>{
        const changeItem = await putChangeItem(TaskId,objectId,title,description)
        return changeItem
    }

)//putDragAndDrop

export const putDragAndDropAction = createAsyncThunk(
    'main/putDragAndDrop',
    async({CardId,_id,object}:any)=>{
        await putDragAndDrop(CardId,_id,object)
        return {
            CardId,
            _id,
            object
        }
    }
)
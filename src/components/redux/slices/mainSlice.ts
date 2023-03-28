import { createSlice } from "@reduxjs/toolkit"
import {
        postAddCardAction,
        getAllCardAction,
        postAddCardItemAction,
        getIdItemAction,
        putChangeItemAction,
        putDragAndDropAction
    } from "../actions/mainAction"

const initialState: {loading:boolean,card:any[]} ={
    loading:false,
    card:[],
    
}

export const mainSlice = createSlice({
    name:"main",
    initialState,
    reducers:{},
    extraReducers: (build) => {
        build
            .addCase(postAddCardAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(postAddCardAction.fulfilled, (state, action) => {
                state.card.push(action.payload);
                state.loading = false;
            })
            .addCase(postAddCardAction.rejected, (state) => {
                state.card = [];
                state.loading = false;
            })
            .addCase(getAllCardAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllCardAction.fulfilled, (state, action) => {
                state.card = action.payload;
                state.loading = false;
            })
            .addCase(getAllCardAction.rejected, (state) => {
                state.card = [];
                state.loading = false;
            })
            .addCase(postAddCardItemAction.pending,(state)=>{
                state.loading = true;
            })
            .addCase(postAddCardItemAction.fulfilled, (state, action) => {
                state.card.push(action.payload);
                state.loading = false;
            })
            .addCase(postAddCardItemAction.rejected, (state) => {
                state.card = [];
                state.loading = false;
            })
            .addCase(getIdItemAction.pending,(state)=>{
                state.loading = true;
            })
            .addCase(getIdItemAction.fulfilled, (state, action) => {
                state.card.push(action.payload);
                state.loading = false;
            })
            .addCase(getIdItemAction.rejected, (state) => {
                state.card = [];
                state.loading = false;
            })
            .addCase(putChangeItemAction.pending,(state)=>{
                state.loading = true;
            })
            .addCase(putChangeItemAction.fulfilled, (state, action) => {
                state.card.push(action.payload);
                state.loading = false;
            })
            .addCase(putChangeItemAction.rejected, (state) => {
                state.card = [];
                state.loading = false;
            })
            .addCase(putDragAndDropAction.pending,(state)=>{
                state.loading = true;
            })
            .addCase(putDragAndDropAction.fulfilled, (state, action) => {
                const { _id, CardId, object } = action.payload;
                const target = state.card.findIndex((card) => card._id === _id)
                const parent = state.card.findIndex((card) => card._id ===CardId )
                const oldPosition = state.card[target].card.findIndex((item: any) => item._id === object._id)
                state.card[target].card.push(object);
                state.card[parent].card.splice(oldPosition, 1)
                // state.card.push(action.payload);
                
                state.loading = false;
            })
            .addCase(putDragAndDropAction.rejected, (state) => {
                state.card = [];
                state.loading = false;
            })
           
    }              

            
})
export default mainSlice.reducer
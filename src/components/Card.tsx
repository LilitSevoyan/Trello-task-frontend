import React,{useEffect, useState} from "react"
import Banner from "./Banner/Baner";
import {Data} from "./interface/Interface"
import {useDrag } from "react-dnd" 
import {useDrop} from "react-dnd"
import {  useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../components/redux/store'
import {putDragAndDropAction} from "../components/redux/actions/mainAction"

const Card:React.FC<any>= (id)=>{
    
    const dispatch:AppDispatch = useDispatch()
 
    const [banner,setBanner]= React.useState<boolean>(false);
    const [data,setData]=useState<Data>({
        title:"Add Title",
        description:"Add Desciption"
    })
    
    const card = useSelector((state:RootState) => state.main.card)
   
    useEffect(()=>{

    },[card])

    const [{isDragging},drag] = useDrag(()=>({
        type:"task",
        item:{id:id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
            
        })
    }))
    
    const[{isOver},drop] = useDrop(() => ({
        accept:"task",
        drop: (item) => transferTask(item),

        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
        
    }))
    
    const transferTask = (id:any) => {
        const CardId = id.id.id.id1
        const object = id.id.item
        const cardList = card.map((item)=>item.card.filter((arr:any)=>arr === id))
        dispatch(putDragAndDropAction({CardId,_id:"62835c7ece113235930ad6be",object}))
        console.log(cardList)
    }
    
    const handleClick = (event: React.MouseEvent)=>{
        setBanner(!banner)
    }

    return (
       
        <div className="TaskWrapper" ref={drop} style={{border:isOver ? "5px solid red" : "0px"}}>
            <div className="TitleWrapper" onClick={handleClick} ref={drag} style={{border:isDragging ? "5px solid pink" : "0px"}}>
               {id.item?.title}
                
            </div>
            
                {banner?
                    <Banner id={id} data={data} setData={setData} setBanner={setBanner} banner={banner}/>
                    :null
                }
        </div>
       
    )
}
export default Card
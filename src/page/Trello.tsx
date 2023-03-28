import React,{useEffect}from "react";
//import {AddTitle} from "../components/interface/Interface"
import "./trello.css"
import Column from "../components/Column";

import {postAddCardAction,getAllCardAction} from "../components/redux/actions/mainAction"
import {  useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../components/redux/store'



const Trello: React.FC<any> = (data) => {

    //const [add,setAdd] = useState<AddTitle[]>([])
    const dispatch: AppDispatch = useDispatch()
    
    const card = useSelector((state:RootState) => state.main.card)
    useEffect(()=>{
        dispatch(getAllCardAction())
    },[dispatch])
    
    useEffect(()=>{
        
    },[card])
    const handleAdd = (e:React.MouseEvent) => {
        e.preventDefault()
       // setAdd(add.concat(<Column key={add.length} />))   
        dispatch(postAddCardAction())
    }
    
    return(

        <div className="container">
            <div className="header">
                Trello
            </div>
        
            <div className="trelloWrapper">
                <div className="addColumn" onClick={handleAdd}>+ Add a Column</div>
                <>
                {card?.map((arr,i)=>
                    <Column key={i} id1={arr._id}  arr={arr.card} />
                )}
                    
               
                </>
               
                
            </div>
        </div>
    
        
        
    )
}
export default Trello;
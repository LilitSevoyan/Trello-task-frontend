
import React,{ChangeEvent,KeyboardEvent,useEffect} from "react"
import "./banner.css"
import { ReactComponent as Close } from "./close.svg"

import {putChangeItemAction} from "../../components/redux/actions/mainAction"
import {  useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../../components/redux/store'



const Banner:React.FC<any> = ({id,data,setData,setBanner,banner})=>{
    
    const dispatch: AppDispatch = useDispatch()
    const card = useSelector((state:RootState) => state.main.card)

    useEffect(()=>{

    },[id])

    useEffect(()=>{

    },[card])

   
    const [showTitle,setShowTitle] = React.useState<boolean>(false)
    const [showDescription,setShowDescription] = React.useState<boolean>(false)
    
   
    const handleTitle =(e: React.MouseEvent)=>{
        e.preventDefault()
        setShowTitle(!showTitle)

    }   
    const handleDescription =(e:React.MouseEvent)=>{
        e.preventDefault()
        setShowDescription(!showDescription)
    }
    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const handleKeyDown = (e:KeyboardEvent<HTMLInputElement>)=>{
        if(e.key === 'Enter'){
            setShowTitle(!showTitle)            
        }
    }
    const handleKeyDown1 = (e:KeyboardEvent<HTMLInputElement>)=>{
        if(e.key === 'Enter'){
            setShowDescription(!showDescription)
        }
    }
  
    
    const handleSubmit =(e:React.MouseEvent,TaskId:any,objectId:any,title:any,description:any)=>{
       e.preventDefault()
        setBanner(!banner)
       
        dispatch(putChangeItemAction({TaskId,objectId,title,description}))
              
    }
    const handleClick =(e:React.MouseEvent)=>{
        e.preventDefault()
         setBanner(!banner)
               
    }

 return(
        <div className="MainContent" >
            <div className="banner">
                <div className="bannerWrapper">
                    <div className="Close" onClick={(e:React.MouseEvent)=>{handleClick(e)}}>
                       <Close/> 
                    </div>
                    
                    <div className="banner-title">
                        Title
                        {showTitle
                            ? <input type="text" className="title" value ={data.title} name="title" onChange={handleChange} onKeyDown={handleKeyDown}/> 
                            : <div className="title" onClick={handleTitle}>{data.title}</div>
                        }
                        
                    </div>
                    <div className="banner-description">
                        Description
                        {showDescription
                            ? <input type="text" className="description" value={data.description} name="description" onChange={handleChange} onKeyDown={handleKeyDown1} />
                            : <div className="description" onClick={handleDescription}>{data.description}</div>
                        }
                        
                    </div>
                    <div className="submit">
                       <button type="submit" onClick={(e:React.MouseEvent)=>{handleSubmit(e,id.id.id1,id.item._id,data.title,data.description)}}>Submit</button>  
                    </div>
                    
                </div>
                
            </div>
        </div>
    )

}
export default Banner
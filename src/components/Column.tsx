import React, { useState, useEffect, ChangeEvent } from "react"
import { ChangeList } from "./interface/Interface"
import Card from "./Card"

import { useSelector, useDispatch } from 'react-redux'
import type { RootState, AppDispatch } from '../components/redux/store'
import { postAddCardItemAction } from "./redux/actions/mainAction"
import { AddTitle } from "../components/interface/Interface"

const Column: React.FC<any> = (id1, arr) => {
    useEffect(() => {
        
    }, [id1, arr])

    const [data, setData] = useState<ChangeList>({ title: "Add title" })
    const [addCard, setAddCard] = useState<AddTitle[]>([])
    
    const dispatch: AppDispatch = useDispatch()
    const card = useSelector((state: RootState) => state.main.card)

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    useEffect(() => {
        const cardArray = card.find(({ _id }) => {
            return _id === id1.id1;
        })?.card;
        setAddCard(cardArray)
    }, [addCard, card, id1])

    const handleClick = (e: React.MouseEvent, TaskId: any, title: any) => {
        e.preventDefault()
        dispatch(postAddCardItemAction({ TaskId, title }))
    }
    return (
        <div className="Column">
            <div className="titleWrapper">
                <div className="Addtitle" ><input type="text" name="title" onChange={changeTitle} value={data.title} /></div>
                <div className="edit">...</div>
            </div>
            <>
                {id1.arr?.map((item: any, i: any) =>
                    <Card key={i} id={id1} item={item} />
                )}

            </>
            <div className="Card" onClick={(e: React.MouseEvent) => { handleClick(e, id1.id1, data.title) }}> + Add a card</div>

        </div>
    )
}
export default Column;
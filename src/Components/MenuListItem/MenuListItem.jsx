import { useState } from "react"
import s from "./style.module.css"

export function MenuListItem(props){

    const [isHover,setHover] = useState(false);
    
    function activate(){
        setHover(true)
    }

    function deactivate(){
        setHover(false)
    }

    function click(){
        props.onClick(props.difficulty);
    }

    function getColor(){
        if(isHover){
            return "#a5e9ff";
        }
        else{
            if(props.isSelected){
                return "#26baea";
            }
            else{
                return "#eff0ef";
            }
        }
    }

    return (<div 
        onClick={click} 
        className={s.c} 
        onMouseEnter={activate} 
        onMouseLeave={deactivate} 
        style={{backgroundColor : getColor()}}> 
        Set to : {props.difficulty} </div>)
}
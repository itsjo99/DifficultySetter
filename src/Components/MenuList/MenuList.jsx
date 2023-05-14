import s from "./style.module.css"
import { MenuListItem } from "../MenuListItem/MenuListItem"

export const MenuList = (props) => {

    
    
    return(
        <div className={s.c}>
            <MenuListItem isSelected = {props.difficulty === "Low"} onClick = {props.onItemClick} difficulty = "Low"/>
            <MenuListItem isSelected = {props.difficulty === "Medium"} onClick = {props.onItemClick} difficulty = "Medium"/>
            <MenuListItem isSelected = {props.difficulty === "High"} onClick = {props.onItemClick} difficulty = "High"/>
            <MenuListItem isSelected = {props.difficulty === "Insane"} onClick = {props.onItemClick} difficulty = "Insane"/>
        </div>
    )
}
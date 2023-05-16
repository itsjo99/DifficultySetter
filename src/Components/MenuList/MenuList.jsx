import s from "./style.module.css"
import { MenuListItem } from "../MenuListItem/MenuListItem"
import { DIFFICULTIES } from "./Constants"
export const MenuList = (props) => {

    
    return(
        <div className={s.c}>
            {
                DIFFICULTIES.map((difficulty) => <MenuListItem isSelected = {props.difficulty === difficulty} onClick = {props.onItemClick} difficulty = {difficulty} />
                )
            }
        </div>
    );
}
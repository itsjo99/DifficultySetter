import { useState } from "react";
import { DisplayDifficulty } from "./Components/DisplayDifficulty/DisplayDifficulty";
import { MenuList } from "./Components/MenuList/MenuList";
import s  from "./style.module.css"

export function App(){
    const [currentDifficulty, setDifficulty] = useState("")

    const onMenuListClick = (difficulty) => {
        setDifficulty(difficulty)
    }

    return <div className={s.all}>
        <h1 style={{display: "flex", alignItems: "center", justifyContent: "space-evenly", height: 150}}>Select your Difficulty</h1>
        <div className={s.home}>
            <MenuList onItemClick = {onMenuListClick} difficulty = {currentDifficulty}/>
            <DisplayDifficulty difficulty ={currentDifficulty}/>
        </div>
    </div>;
}
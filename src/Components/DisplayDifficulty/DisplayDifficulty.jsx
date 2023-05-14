import s from "./style.module.css"

export function DisplayDifficulty(props){



    return (<div class = {s.c1}>
        {
            props.difficulty ? 'Difficulty set to ' + props.difficulty : "No Difficulty set"
        }
    </div>);

}
import React, { useContext } from "react";
import LanguageItem from "./LanguageItem";
import { Context } from "../../../context/Context";
import './language.css';


const LanguageList=()=>{
    
    const { Listlanguages } = useContext(Context)
    const arrCount = []
   {Listlanguages&&  Listlanguages.data.map((language)=>(arrCount.push(language.num_exercises)))} 
    const countNumExercises= arrCount.reduce((a, c)=>a+c,0)
    return(
        <ul className="language-list">
        <LanguageItem  key="ksksk" slug='' title="all" icon="/assets/icons/languageIcon.png" count={Listlanguages&&countNumExercises}/>
        {
            Listlanguages?Listlanguages.data.map((language)=>(<LanguageItem key={language.id} slug={language.slug} title={language.title} icon={language.icon_url} count={language.num_exercises}/>)
            ):<p>loading...</p>
        }
        </ul>
    )
}

export default LanguageList;
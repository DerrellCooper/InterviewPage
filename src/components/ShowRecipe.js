import React from "react";
import { ViewContext,RecipeDataContext, RecipeIDContext } from "../App";


export default function ShowRecipe(props){
    const recipeID = React.useContext(RecipeIDContext)
    const allDrinks = React.useContext(RecipeDataContext)
    let recipe = ""
    
    allDrinks.map(
        (currentItem)=> {
            if (currentItem.id == recipeID[0]){
                recipe =
                    <div>
                        <h1>{currentItem.title}</h1>
                        <p>{currentItem.ingredients}</p>
                        <p>{currentItem.steps}</p>

                    </div>
                
            }
        }
    )

    return(
        <div>
            {recipe}
        </div>
    )
    
}
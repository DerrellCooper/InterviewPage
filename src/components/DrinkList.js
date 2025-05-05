import React from "react";
import { ViewContext, RecipeDataContext, RecipeIDContext } from "../App";


export default function DrinkList(props){
    console.log(props.allDrinks)
    return(
        <div>
            
            <ShowRecipeList allDrinks = {props.allDrinks}/>
            
        </div>
    )
}

function ShowRecipeList(props){
    const view = React.useContext(ViewContext);
    const allDrinks = React.useContext(RecipeDataContext)
    const recipeID = React.useContext(RecipeIDContext)
    console.log(view)

    

        const showRecipes = allDrinks.map(
            (currentItem) => {
                return(
                <>
                
                <div className="col-4 card ">
                    <div className="card-body">
                        <h2>{currentItem.title}</h2>
                        <button onClick={() => {view[1]("View Recipe"); recipeID[1](`${currentItem.id}`)}}>View Recipe</button>
                    </div>
                </div>
                </>
                )
            }
        )
        return(
            <div className="row">
                {showRecipes}
            </div>
        )
    
}


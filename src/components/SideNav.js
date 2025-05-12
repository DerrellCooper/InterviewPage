import React from "react";
import { RecipeDataContext,ViewContext,RecipeIDContext } from "../App";

export default function SideNav(props){
    const view = React.useContext(ViewContext)
    const allDrinks = React.useContext(RecipeDataContext)
    const recipeID = React.useContext(RecipeIDContext)
    const [showList, setShowList] = React.useState(false)
    
    
        

        function ShowRecipes(){
            
            const listItems = allDrinks.map(
                (currentItem) =>{
                    
                    return(
                        <>
                            <li>
                                <button className="btn" type="button" onClick={()=>{view[1]("View Recipe"); recipeID[1](currentItem.id)}}>
                                    <h5>{currentItem.title}</h5>
                                </button>
                            </li>
                        </>
                    
                    )
                }
            
            )

            return(
                <ul>
                    <li>
                        <button className="btn" type="button" onClick={()=> view[1]("View All")}>
                            <h5>Full List</h5>
                        </button>
                    </li>
                    {listItems}
                </ul>
            )
        }
    
    
    
    return(
        
    
            <div>

                <button className="btn" type="button" onClick={()=> setShowList(!showList)}>
                    <h2>Recipes</h2>
                </button>
                {showList ? <ShowRecipes/>: null}
            </div>
                    
                        
    
        
    )
}
import React from "react";
import { RecipeDataContext,ViewContext,RecipeIDContext } from "../App";

export default function SideNav(props){
    const view = React.useContext(ViewContext)
    const allDrinks = React.useContext(RecipeDataContext)
    const recipeID = React.useContext(RecipeIDContext)
    const [showList, setShowList] = React.useState(false)
    
    
        

        // function handleClick(){
        //     view[1]("View Recipe");
        //     // recipeID[1](`${id}`);
        // }
        const list = allDrinks.map(
            (currentItem) =>{
                
                return(
                        <>
                            <button className="btn" type="button" onClick={()=>{view[1]("View Recipe"); recipeID[1](currentItem.id)}}>
                                <h5>{currentItem.title}</h5>
                            </button>
                        </>
                    
                )
            }
            
        )
    
    
    
    return(
        
    <div className="accordion" id="navAccordion">
                <button className="btn" type="button" onClick={()=> setShowList(true)}>
                    <h2>Recipes</h2>
                </button>
                <button className="btn" type="button" onClick={()=> view[1]("View All")}>
                    <h5>Full List</h5>
                </button>
                    {list}
                        
    </div>
        
    )
}
import React from "react";
import DrinkList from "./DrinkList";
import Header from "./Header";
import { ViewContext } from "../App";
import ShowRecipe from "./ShowRecipe";
import SideNav from "./SideNav";



function LoadApp(props){
    const [page,setPage] = React.useState('')
    const view = React.useContext(ViewContext)
        
    
        
            switch (view[0]){
            case "View All":
                
                return(
                    <>
                    <Header/>
                    <div className="row">
                        <div className="col-3">
                            <SideNav/>
                        </div>
                        <div className="col-9">
                    <       DrinkList allDrinks = {props.allDrinks}/>
                            
                        </div>
                    </div>
                    </>
                )
            case "View Recipe":
                
                return(
                    <>
                    <Header/>
                    <div className="row">
                        <div className="col-3">
                            <SideNav/>
                        </div>
                        <div className="col-9">
                            <ShowRecipe/>
                        </div>
                    </div>
                    </>
                )
            }
            
    
    return(
        <>
        
        </>
    )
    
    
}

export default LoadApp
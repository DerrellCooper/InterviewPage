import React from "react";
import Header from "./components/Header";
import DrinkList from "./components/DrinkList";
import LoadApp from "./components/LoadApp";

// Create contexts to pass data from parent to children
export const RecipeDataContext = React.createContext();
export const ViewContext = React.createContext();
export const RecipeIDContext = React.createContext();

function App(){
    // create useState for data needed
    const [allDrinks, setAllDrinks] = React.useState([]);
    const [view, setView] = React.useState("View All");
    const [recipeID, setRecipeID] = React.useState()
    
    // Collect Data From Api
    React.useEffect(() => {
        console.log("useEffect ran")
        fetch('http://127.0.0.1:8000/api/all/')
        .then(response => response.json())
        .then(data => setAllDrinks(data))

    },[])
    

    if (allDrinks.length > 0 && ViewContext){ // Render App based on if the allDrinks state has data
        console.log(view)
        return(
        <div className="container-fluid">
            <RecipeDataContext.Provider value={allDrinks}>
            <ViewContext.Provider value={[view,setView]}>
            <RecipeIDContext.Provider value={[recipeID,setRecipeID]}>
                <LoadApp allDrinks = {allDrinks}/>
            </RecipeIDContext.Provider>
            </ViewContext.Provider>
            </RecipeDataContext.Provider>
            
        </div>
        )
    }else {
        return( // Render if Api fetch does not complete
            <div>
                <h1>Error</h1>
            </div>
        )
    }



    
    
}

export default App
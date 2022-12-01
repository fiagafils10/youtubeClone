import { createContext, useState } from "react";



export const CategoryContext = createContext<any|null>(null)


 const CategoryContextProvider = (props:any) => {
    const [selectedCategory, setSelectedCategory] = useState('New')
    

    return(
        <CategoryContext.Provider value={{setSelectedCategory, selectedCategory}}>
                {props.children}
        </CategoryContext.Provider>
    )
}

export default CategoryContextProvider
import { createContext, useState } from "react"

export const FavoritesContext = createContext({
    ids: [''],
    addFavorite: (id: string) => { },
    removeFavorite: (id: string) => { }
})

interface Props {
    children: string
}

function FavoritesContextProvider({ children }: Props) {
    const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([])

    function addFavorite(id: string) {
        setFavoriteMealIds((currentFavIds) => [...currentFavIds, id])
    }

    function removeFavorite(id: string) {
        setFavoriteMealIds((currentFavIds) => currentFavIds.filter((mealId) => mealId !== id))
    }

    const value = { ids: favoriteMealIds, addFavorite, removeFavorite }

    return <FavoritesContext.Provider value={value}>
        {children}
    </FavoritesContext.Provider>
}

export default FavoritesContextProvider
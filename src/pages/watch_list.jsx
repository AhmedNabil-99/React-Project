import { useContext } from "react"
import contextFavList from "../context/context"
import DscpCards from "../components/cards_with_descp.jsx/descp_cards"

export default function WatchList() {

    const {favList, setFavList} = useContext(contextFavList)
    console.log(favList)

    return (
        <div className="container-fluid mt-4 ms-4">
            <p style={{ fontSize: "32px", fontWeight: 600 }}>Watch List</p>
            <DscpCards />
        </div>
    )
}
import Welcom from "../components/welcoming/welcom"
import { axiosInstance } from "../netwotking/axiosinstance"

export default function Home() {
    axiosInstance.get('discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc')
    .then(response => {
        console.log(response.data.results)
        })
    .catch(error => {
        console.error(error)
        })
    return (
        <Welcom />
    )
}
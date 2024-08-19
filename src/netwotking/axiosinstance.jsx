import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDQyMWEwY2I0NTkxMmM2YjRjYmI4MmU1Yzg2ZjFmNSIsIm5iZiI6MTcyMzc1OTE0MS45Mzk2NzgsInN1YiI6IjY2YmU3ODdkNjU3MmQxNjBiNzliODc0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.th0MH8EnXPhQ8reHjo1rgtDTywJPveJ1pmG3NOSHq9c'
    }
})
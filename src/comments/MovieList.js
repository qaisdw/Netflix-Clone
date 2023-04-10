import MovieFun from "./Movie"
import { Link } from "react-router-dom";

export default function MovieListFun(props){
    return (
        <>
        {
            props.moviesData.map((data=>{
                return(
                    <Link>
                        <MovieFun movie={data}/>
                    </Link>
                )
            }))
        }
        </>
        )
}
import MovieFun from "./Movie"

export default function MovieListFun(props){
    return (
        <>
        {
            props.moviesData.map((data=>{
                return(
                    
                    <MovieFun movie={data}/>
                )
            }))
        }
        </>
        )
}
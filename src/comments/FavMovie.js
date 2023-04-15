import FavCard from './FavCard';

export default function FavMovie(props){
    return(
        <section className='favMovie'>
            <div className="title">
                <h1>My List</h1>
            </div>
            <div>
                {
                    props.data.map((element)=>{
                        return(
                            <FavCard data={element} delete={props.delete} update={props.update} />
                        )
                    })
                }
            </div>
        </section>
    )
}
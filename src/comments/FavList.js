import { useEffect } from "react";
import { useState } from "react";
import FavMovie from './FavMovie';

export default function FavListFun(){
    const [movies,setMovie]=useState([]);
    const [favMovies,setFavMovie]=useState([]);

    async function getMovies(){
        const url=process.env.REACT_APP_SERVER_URL;
        const response= await fetch(`${url}/trending`);
        const jsonData=await response.json();
        setMovie(jsonData);
    }
    
    useEffect(()=>{
        getMovies();
    },[]);

    async function favMovie(){
        const url=process.env.REACT_APP_SERVER_URL;
        const response= await fetch(`${url}/getMovies`);
        const jsonData=await response.json();
        setFavMovie(jsonData);
    }
    useEffect(()=>{
        favMovie();
    },[]);

    async function handleDelete(id){
        let url =`${process.env.REACT_APP_SERVER_URL}/DELETE/${id}`;
        let response = await fetch(url,{
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
        })
        if(response.status===201){
            favMovie();
        }
    }

    async function handleUpdate(id,title,comment){
        let url =`${process.env.REACT_APP_SERVER_URL}/UPDATE/${id}`;
        let data = {
            name:title,
            myComment: comment
        };
        let response = await fetch(url,{
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        if(response.status===201){
            favMovie();
        }
    }    

    let list=[];
    favMovies.map((element)=>{
        movies.map((x)=>{
            if(x.title===element.moviename){
                x.comment=element.comment;
                x.id=element.id;
                list.push(x);
            }
        })
    })
    return(
        <main>
           <FavMovie data={list} delete={handleDelete} update={handleUpdate} />
        </main>
    )
}
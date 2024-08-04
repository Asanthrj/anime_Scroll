"use server"

import Card from "./components/card";

export const fetchAnime = async (page:number)=>{
    const response = await  fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`)
    const data =await response.json()
    
    return data.map((value:any ,index:number) => <Card key={index} item={value} index={index}/>) 

    
}
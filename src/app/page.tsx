import Image from "next/image";
import {data} from "./data"
import { fetchAnime } from "./action";
import Card from "./components/card";
import Loading from "./components/loading";

export default async function Home() {
 const data =  fetchAnime(1)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <section className=" flex flex-wrap w-[90vw] px-2 justify-between items-center ">
    {data}
   </section>
     <Loading/>
    </main>
  );
}

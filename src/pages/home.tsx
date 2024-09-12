'use client'
import {LayoutApp} from "@/app/layoutApp"; 
import { HomeBoard } from "@/components/maindashboard/Home/HomeBoard";

export default function Home(){
  return (
    <LayoutApp>
            <HomeBoard />      
    </LayoutApp>
  );
}

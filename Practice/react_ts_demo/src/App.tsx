import { useState } from "react";
import ImgSrc from "./assets/goals.jpg";
import CourseGoalList from "./components/CourseGoalList.tsx";
import Header from "./components/Header";
import NewGoal from './components/NewGoal.tsx';
export type CourseGoal ={
  title: string;
  description: string;
  id:number;
}


export default function App() {
const [goals, setGoals] =  useState<CourseGoal[]>([]);

function handleAddGoal(goal : string, summary: string){
  setGoals( prevGoal => {
    const newGoal: CourseGoal ={
      id: Math.random(),
      title: goal,
      description: summary
    }
    return [...prevGoal, newGoal]
  } );
}

function handleDeleteGoal(id: number){
  setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id));
}

return <main>
    <Header image={{src: ImgSrc , alt: "A list of Course Goals"}}>
      <h1>Your course goals</h1>
    </Header>
   <NewGoal onAddGoal={handleAddGoal}/>
   <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
    
  </main>;
}

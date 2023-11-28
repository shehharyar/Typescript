import { type CourseGoal as CGoal } from "../App.tsx";
import CourseGoal from "./CourseGoal.tsx";



  type GoalsListProps ={
    goals: CGoal[];
    onDeleteGoal: (Id : number) => void;
  }


export default function CourseGoalList({ goals, onDeleteGoal }:GoalsListProps){
    return(
        <ul>
        {
          goals.map((goal) => (
            <li key={goal.id}>
            <CourseGoal 
              id={goal.id}
              title= {goal.title}
              onDelete ={onDeleteGoal}
              >
            <p>{goal.description}</p>
            </CourseGoal>
            </li>
          ))
        }
       </ul>
    );
}
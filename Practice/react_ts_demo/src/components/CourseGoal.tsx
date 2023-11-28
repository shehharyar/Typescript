// interface CourseGoalProps {
//     title: string;
//     description: string;

import { type PropsWithChildren } from "react";

//   }
// interface CourseGoalProps {
//     title: string;
//     children: ReactNode;
// }

type CourseGoalProps = PropsWithChildren<
{ 
  id:number;
  title: string; 
  onDelete: (id: number) => void;
}

>

function CourseGoal({
  id,
  title,
  onDelete,
 children
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h1>{title}</h1>
        {children}
        {/* <p>{description}</p> */}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}

// const CourseGoal: FC<CourseGoalProps> = ({title, children}) =>{
//     return (
//         <article>
//         <div>
//           <h1>{title}</h1>
//           {children}
//           {/* <p>{description}</p> */}
//         </div>
//         <button>Delete</button>
//       </article>
//     )
// }


export default CourseGoal;

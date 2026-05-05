import { MoveUpRight, User } from "lucide-react";

const AdminProfileCard = (props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-secondary to-purple-600 text-white rounded-3xl py-4 px-6 shadow-xl">
      
     
      <h1 className="text-md flex items-center gap-10 text-center">
        {props.heading}
      </h1>

      
      <h2 className="text-2xl md:text-4xl font-medium">
        {props.number}+
      </h2>

     
      <p className="text-sm md:text-base text-white/80">
        {props.text} 
      </p>
    </div>
  );
};

export default AdminProfileCard;
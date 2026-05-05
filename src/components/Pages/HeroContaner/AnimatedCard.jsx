import { useState } from "react";

const AnimatedCard=()=>{

    const[open, setOpen] =useState(null);

    const handleClick=(id)=>(
        setOpen(id)
    )

    return(
        <div className="flex px-4 md:px-16 py-6 gap-2 w-full h-[80vh]">

        
           
            <div 
            onClick={()=>handleClick(1)}
            className={!open ===1?"w-[300px] h-[300px] border bg-secondary ": "w-[100px] h-[300px] border bg-secondary"}>
                
            </div>
            <div 
            onClick={()=>handleClick(2)}
            className={open ===(2)?"w-[300px] h-[300px] border bg-secondary ": "w-[100px] h-[300px] border bg-secondary"}>
                
            </div>
            <div 
            onClick={()=> handleClick(3)}
            className={open ===(3)?"w-[300px] h-[300px] border bg-secondary ": "w-[100px] h-[300px] border bg-secondary"}>
                
            </div>
            <div 
            onClick={()=>handleClick(4)}
            className={open===(4) ?"w-[300px] h-[300px] border bg-secondary ": "w-[100px] h-[300px] border bg-secondary"}>
                
            </div>
            

        </div>
    )
}

export default AnimatedCard;
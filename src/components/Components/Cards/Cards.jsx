import { BookAudio } from "lucide-react"
// import Button from "../buttons/ButtonComponents"


const Cards =(props)=>{
    return(
        <>
            <div className="flex  flex-col gap-6 w-auto md:w-80 lg:w-72 xl:w-96 border relative bg-white shadow-lg px-6 py-6 rounded-lg my-10 dark:bg-gray-900 dark:border-none">
                <div className="flex gap-2 ">
                    {props.logo}
                     <h1 className="text-xl md:text-[16px] md:tracking-tighter md:leading-5 lg:text-xl md:font-semibold font-medium ">{props.h1}</h1>
                </div>
                <div>
                    <p className="text-[12px] lg:text-[14px] text-textcolor dark:text-white ">
                        {props.p}
                    </p>
                </div>
                <button onClick={props.open} className="px-4 py-2 mt-auto text-[12px] lg:text-[14px] bg-secondary rounded-sm text-white font-bold hover:bg-textcolor transition duration-300">{props.text}</button>
            </div>
        </>
    )
}

export default Cards
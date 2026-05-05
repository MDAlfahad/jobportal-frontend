import {Upload} from "lucide-react"

const CompanyForm2 = () => {
  return (
    <>
      <div className=" w-[700px] flex flex-col items-center justify-center text-textcolor2 ">
        

        <div className=" w-[700px] flex flex-col items-center justify-center mt-20 ">
            <div>
            <h1 className="text-xl md:text-4xl font-semibold py-4 text-black">Company Varifiaction</h1>
            </div>
            <div className="border rounded-md p-4  text-textcolor text-sm">
            <p className="text-md py-4">Using any one of the options below, get your organization verified and start posting internships/jobs</p>

            <div className="flex flex-col gap-8">
                <div className="flex gap-2">
                    <input type="radio" /> 
                    <h1 className="font-semibold">Company website</h1>  
                </div> 
                <div className="flex flex-col">
                    <label className="font-semibold" htmlFor="websitelink">website URL</label>
                    <input className="w-full px-2 py-2 outline-none border rounded-md" type="text" placeholder="eg: www.company.com"/>
                </div>
                <div className="flex gap-2">
                    <input type="radio" /> 
                    <h1 className="font-semibold" >Official company documents</h1>  
                </div> 
                <div className="flex flex-col gap-2">
                    <h1 className="font-semibold">
                        Verify using any government-issued business registration document
                    </h1>
                    <div>
                        <label htmlFor="fileupload" className="flex font-semibold items-center gap-2 border-dashed border-2 border-secondary w-40 justify-center px-2 py-2 bg-blue-100 text-secondary cursor-pointer"><Upload strokeWidth={1.5} size={16} />Upload</label>
                        <input type="file" id="fileupload" hidden />
                    </div>
                </div>
                <div className="flex gap-2">
                    <input type="radio" />
                    <h1 className="font-semibold" >I have none of this documnets.</h1>
                </div>

            </div>
        </div>
        </div>
 
      </div>
    </>
  );
};

export default CompanyForm2;

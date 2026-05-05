import { useState } from "react";
import CompanyFrom from "./Sidebarmenu/companyform";
import CompanyForm2 from "./Sidebarmenu/Companyform2";
import CompanyForm3 from "./Sidebarmenu/CompanyForm3";
import Button from "../../Components/buttons/ButtonComponents";
import FooterContainer from "../HeroContaner/FooterContainer";
import { useNavigate } from "react-router-dom";

const CompanyDashboard = () => {

    const navigate = useNavigate()
  const [step, setStep] = useState(1);

  const steps = ["Company Details"];

  const nextStep = () => {
    if (step < steps.length) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <>
      <div className="pt-20 max-w-[1800px] w-full m-auto md:px-12 px-6 py-6 flex flex-col items-center justify-center  dark:bg-black dark:text-white">
        <div className="w-full flex gap-6 py-4 border-b-2 ">
          <p className="text-md font-semibold hover:text-secondary cursor-pointer"
          onClick={()=>navigate("/Dashboard-Company")}
          >
            Dashboard
          </p>
          
        </div>

        <div className="flex  mt-10">
          {steps.map((label, index) => {
            const stepNumber = index + 1;

            return (
              <div key={index} className="flex items-center w-full ">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-semibold 
                  ${
                    step >= stepNumber
                      ? "bg-blue-500"
                      : "bg-gray-300 text-black"
                  }`}
                  >
                    {step > stepNumber ? "✓" : stepNumber}
                  </div>
                  <span className="text-sm mt-2 text-center">{label}</span>
                </div>

                {index !== steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2
                  ${step > stepNumber ? "bg-blue-500" : "bg-gray-300"}`}
                  />
                )}
              </div>
            );
          })}
        </div>

        {step === 1 && <CompanyFrom />}
        {/* {step === 2 && <CompanyForm2 />} */}

        <div className="flex justify-between items-center gap-10 my-10 ">
          {step > 1 && <Button text="Back" onClick={prevStep} />}

          {step < steps.length && <Button text="Next" onClick={nextStep} />}

          {/* {step === steps.length && (
            // <Button text="Submit" onClick={() => alert("Form Submitted")} />
          )} */}
        </div>
      </div>
      <FooterContainer />
    </>
  );
};

export default CompanyDashboard;

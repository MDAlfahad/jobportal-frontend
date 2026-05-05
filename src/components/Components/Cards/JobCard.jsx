
const JobCard = (props) => {
  return (
    <>
      <div className="w-96 shadow-xl flex flex-col gap-10 rounded-lg py-6 bg-white">
        <div className="w-28 h-20 overflow-hidden">
          <img className="w-40" src={props.logo} alt="logo" />
        </div>
        <div>
          <p className="text-md md:text-lg text-textcolor">
          {props.offer}
          </p>
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold md:font-bold">{props.position}</h1>
          <p className="text-sm md:text-lg">
            {props.requirement}
          </p>
        </div>
        <button className="px-6 py-3 mt-auto w-full bg-secondary rounded-lg text-white font-bold hover:bg-textcolor">{props.text}</button>
      </div>
    </>
  );
};

export default JobCard;

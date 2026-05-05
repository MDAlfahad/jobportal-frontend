const Notificationpage = () => {
  let data = "";

  return (
    <div className="pt-20 max-w-[1800xp] m-auto px-4 md:px-12 py-6">
      {data ? (
        <div className="w-full border rounded-md border-secondary p-2 text-sm capitalize">
          {" "}
        </div>
      ) : (
        <div className="flex w-full justify-center py-4 text-sm md:text-2xl font-light text-textcolor">No Notification</div>
      )}
    </div>
  );
};

export default Notificationpage;

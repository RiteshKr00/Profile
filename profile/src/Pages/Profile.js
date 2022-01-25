import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const UpdateDetails = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/");
      console.log(response.data);
      setDetails(response.data.results[0]);
      setIsLoading(false);
      console.log(details);
    } catch (err) {
      console.log(err.response.data);
    }
  };
  function capitalize(s) {
    return s && s[0].toUpperCase() + s.slice(1);
  }
  useEffect(() => {
    UpdateDetails();
  }, []);
  return (
    <>
      {isLoading ? ( //Checkif if is loading
        <div className="flex bg-gray-800 h-screen xl:h-full p-10">
          <div class="w-full  bg-gradient-to-br from-green-400 to-blue-500 m-auto rounded-lg border border-gray-200 shadow-lg py-10 px-10 md:px-20">
            <div class="rounded-full mx-auto  bg-slate-200 h-40 w-40"></div>
            <div class="animate-pulse flex  space-x-4 py-10">
              {/* <div class="rounded-full bg-slate-200 h-40 w-40"></div> */}
              <div class="h-6 bg-slate-200 rounded col-span-2"></div>
              <div class="flex-1 space-y-6 py-1">
                <div class="h-6 bg-slate-200 rounded"></div>{" "}
                <div class="h-6 bg-slate-200 rounded col-span-1"></div>
                <div class="space-y-8">
                  <div class="grid grid-cols-3 gap-6">
                    <div class="h-6 bg-slate-200 rounded col-span-2"></div>
                    <div class="h-6 bg-slate-200 rounded col-span-1"></div>
                    <div class="h-6 bg-slate-200 rounded col-span-3"></div>
                    <div class="h-6 bg-slate-200 rounded col-span-"></div>
                  </div>
                  <div class="h-6 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex bg-gray-800 p-10">
          <div className="w-full  bg-gradient-to-br from-green-400 to-blue-500 m-auto rounded-lg border border-gray-200 shadow-lg mx-4 py-10 px-12 md:px-20">
            <h2 className="text-2xl text-center pt-4 pb-5 text-primary	text-bold ">
              Profile Page
            </h2>{" "}
            <div className=" flex flex-col justify-center items-center">
              <div className=" text-center">
                <img
                  className="rounded-full h-48 w-48 transform transition duration-500  hover:scale-110 drop-shadow-2xl"
                  src={details ? details.picture.large : " "}
                  alt="profilepic"
                />
                <h1 className="text-xl py-3 text-gray-700">
                  {details.name.title +
                    " " +
                    details.name.first +
                    " " +
                    details.name.last}
                </h1>
              </div>

              <div className="w-full">
                <h3 className="text-2xl font-medium">User Details</h3>
                <div className="mt-4">
                  <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start py-3 border-t border-gray-300 last:border-none">
                    <span className="w-full sm:w-1/3 font-medium text-center sm:text-left">
                      Full name
                    </span>
                    <span className="flex-1 text-center sm:text-left">
                      {details.name.title +
                        " " +
                        details.name.first +
                        " " +
                        details.name.last}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start py-3 border-t border-gray-300 last:border-none">
                    <span className="w-full sm:w-1/3 font-medium text-center sm:text-left">
                      Email Address
                    </span>
                    <span className="flex-1 text-center sm:text-left">
                      {details.email}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start py-3 border-t border-gray-300 last:border-none">
                    <span className="w-full sm:w-1/3 font-medium text-center sm:text-left">
                      Phone Number
                    </span>
                    <span className="flex-1 text-center sm:text-left">
                      {details.cell}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start py-3 border-t border-gray-300 last:border-none">
                    <span className="w-full sm:w-1/3 font-medium text-center sm:text-left">
                      Username
                    </span>
                    <span className="flex-1 text-center sm:text-left">
                      {details.login.username}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start py-3 border-t border-gray-300 last:border-none">
                    <span className="w-full sm:w-1/3 font-medium text-center sm:text-left">
                      Gender
                    </span>
                    <span className="flex-1 text-center sm:text-left">
                      {capitalize(details.gender)}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start py-3 border-t border-gray-300 last:border-none">
                    <span className="w-full sm:w-1/3 font-medium text-center sm:text-left">
                     DOB
                    </span>
                    <span className="flex-1 text-center sm:text-left">
                    Born On {Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        day: "numeric",
                        month: "long",
                        weekday: "long",
                      }).format(new Date(details.dob.date))}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start py-3 border-t border-gray-300 last:border-none">
                    <span className="w-full sm:w-1/3 font-medium text-center sm:text-left">
                      Join Date
                    </span>
                    <span className="flex-1 text-center sm:text-left">
                      {details.registered.age} year ago on{" "}
                      {Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        day: "numeric",
                        month: "long",
                        weekday: "long",
                      }).format(new Date(details.registered.date))}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start py-3 border-t border-gray-300 last:border-none">
                    <span className="w-full sm:w-1/3 font-medium text-center sm:text-left">
                      Address
                    </span>
                    <span className="flex-1 text-center sm:text-left">
                      {details.location.street.number +
                        " " +
                        details.location.street.name +
                        " , " +
                        details.location.city +
                        " , " +
                        details.location.state +
                        " , " +
                        details.location.postcode +
                        " , " +
                        details.location.country}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start py-3 border-t border-gray-300 ">
                    <span className="w-full sm:w-1/3 font-medium text-center sm:text-left">
                      Timezone
                    </span>
                    <span className="flex-1 text-center sm:text-left">
                      {details.location.timezone.description}
                    </span>
                  </div>
                </div>
              </div>
              <button
                className="m-10 rounded-md p-2 bg-gray-800 text-white"
                onClick={() => UpdateDetails()}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;

import React from "react";

const Body = () => {
  return (
    <div className=" space-y-4 lg:flex">
      <div className=" lg:flex-1 lg:order-2">
        <img src="./assets/girl.jpg" alt="ist" className=" lg:has-[400px]:" />
      </div>
      <div className="space-y-1 lg:flex-1 lg:order-1">
        <h1 className=" text-5xl font-bold font-playfair leading-tight">Host your website in less than 5 minutes </h1>
        <p className="font-lato text-gray-400">With Hoster , get your website up and running in no less 5 minutes with the most competitive pricing packages available online</p>
        <form action="" className="flex flex-col gap-4 md:flex-row">
          <input className="rounded-md px-4 py-3 placeholder:text-gray-400" type="email" placeholder="Enter email address" />
          <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">Join Waitlist</button>
        </form>
        <div className="flex gap-2 ">
          <img src="./assets/image.png" alt="checkmark" width={25} />
          <p className="font-lato text-gray-400">No spam ,ever,unsubscribe anytime</p>
        </div>
      </div>
    </div>
  );
};

export default Body;

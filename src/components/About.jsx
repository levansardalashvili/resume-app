import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
        2018 - 2022 | Georgian Technical University <br/>
          Bachelor of Informatics And Managment Systems - Software Engineering
        </p>
        <br />
        <p className="text-xl">
        2022 - Present | Georgian Technical University <br/>
          Master's Degree in Informatics And Management Systems
        </p>
        <br />
        <p className="text-xl">
        Phone: 555 49 01 27 <br/>
          Gmail: sardalashvili.levan@gtu.ge
        </p>
      </div>
    </div>
  );
};

export default About;

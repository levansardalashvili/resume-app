import React from "react";
import github from "../assets/github.png"
import quiz from "../assets/portfolio/quiz.JPG";
import movies from "../assets/portfolio/movies.JPG";
import search from "../assets/portfolio/search.JPG";
import weather from "../assets/portfolio/weather.JPG";
import animalsnft from "../assets/portfolio/animalsnft.JPG";
import buildhouse from "../assets/portfolio/build-house.JPG";
import food from "../assets/portfolio/food.JPG";
import travelreact from "../assets/portfolio/travelreact.JPG";
import teamsnft from "../assets/portfolio/teamsnft.JPG";
import travel from "../assets/portfolio/travel.JPG";
import cars from "../assets/portfolio/cars.JPG";
import wine from "../assets/portfolio/wine.JPG";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: quiz,
      deployed_url: 'https://levansardalashvili.github.io/quiz-app/',
      github_url: 'https://github.com/levansardalashvili/quiz-app',
    },
    {
      id: 2,
      src: movies,
      deployed_url: 'https://levansardalashvili.github.io/movies-app/',
      github_url: 'https://github.com/levansardalashvili/movies-app',
    },
    {
      id: 3,
      src: search,
      deployed_url: 'https://levansardalashvili.github.io/react-search-image-app/',
      github_url: 'https://github.com/levansardalashvili/react-search-image-app',
    },
    {
      id: 4,
      src: weather,
      deployed_url: 'https://levansardalashvili.github.io/weather-app/',
      github_url: 'https://github.com/levansardalashvili/weather-app',
    },
    {
      id: 5,
      src: animalsnft,
      deployed_url: 'https://levansardalashvili.github.io/Animals-Nfts/',
      github_url: 'https://github.com/levansardalashvili/Animals-Nfts',
    },
    {
      id: 6,
      src: buildhouse,
      deployed_url: 'https://levansardalashvili.github.io/building-house-react-app/',
      github_url: 'https://github.com/levansardalashvili/building-house-react-app',
    },
    {
      id: 7,
      src: food,
      deployed_url: 'https://levansardalashvili.github.io/food-app/',
      github_url: 'https://github.com/levansardalashvili/food-app',
    },
    {
      id: 8,
      src: travelreact,
      deployed_url: 'https://levansardalashvili.github.io/travel-react-app/',
      github_url: 'https://github.com/levansardalashvili/travel-react-app',
    },
    {
      id: 9,
      src: teamsnft,
      deployed_url: 'https://levansardalashvili.github.io/nft-app/',
      github_url: 'https://github.com/levansardalashvili/nft-app',
    },
    {
      id: 10,
      src: travel,
      deployed_url: 'https://naughty-bhaskara-b540c0.netlify.app/',
      github_url: 'https://naughty-bhaskara-b540c0.netlify.app/',
    },
    {
      id: 11,
      src: cars,
      deployed_url: 'https://dreamy-payne-b20cdc.netlify.app/',
      github_url: 'https://dreamy-payne-b20cdc.netlify.app/',
    },
    {
      id: 12,
      src: wine,
      deployed_url: 'https://infallible-swirles-f32bb4.netlify.app/',
      github_url: 'https://infallible-swirles-f32bb4.netlify.app/',
    },
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pt-1">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-4 md:grid-cols-4 gap-5 px-12 sm:px-0">
          {portfolios.map(({ id, src, deployed_url, github_url }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button>
                <a href={github_url} target="_blank" rel="noopener noreferrer" >
                    <img src={github} alt="github link" className="w-20 px-6 py-2 m-2 duration-200 hover:scale-105"/>
                    </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href={deployed_url} target="_blank" rel="noopener noreferrer" > Demo </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

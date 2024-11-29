import React from 'react';
import IMG1 from '../assets/proj-2.png';
import IMG2 from '../assets/proj1.png';
import IMG3 from '../assets/proj3.png';
import IMG4 from '../assets/proj4.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Weather App',
    link:'weather-app-sable-nine.vercel.app',
    github: 'https://github.com/Shivashankarisivakumar/weather-app.git',
  },
  {
    id: 2,
    image: IMG2,
    link:'#',
    title: 'Portfolio',
    github: 'https://github.com/Shivashankarisivakumar',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Medicare',
    link:'#',
    github: 'https://github.com/Shivashankarisivakumar/medicare-proj.git',
  },
  {
    id: 4,
    image: IMG4,
    title: 'MVP Studio',
    link:'https://mvpstudio.tech/',
    github: 'https://github.com/Shivashankarisivakumar/weather-app.git',
  },
];

const Project = () => {
  return (
    <section id="projects" className="py-10">
      <h5 className="text-center text-light text-sm">My Recent Work</h5>
      <h2 className="text-center text-primary font-semibold text-2xl mb-8">Projects</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5 sm:px-8 lg:px-16">
        {data.map(({ id, image, title, link ,github }) => (
          <article
            key={id}
            className="bg-bg_variant  p-6 rounded-2xl border border-transparent transition-all duration-700 hover:border-primary_variant hover:bg-transparent cursor-pointer">
            <div className="rounded-xl overflow-hidden mb-4">
              <img src={image} alt={title} className="w-full h-full object-cover"/>
            </div>
            <a href={link} target="_blank" className="text-light font-medium text-sm p-1 mb-5">{title}</a>
            <div className="flex gap-4">
              <a href={github} target="_blank"rel="noopener noreferrer" className="px-4 py-2 bg-primary text-sm mt-3 text-white rounded-md hover:bg-white hover:text-bg transition-all duration-300">
                Github
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Project;

import styled from 'styled-components';
import ProjectCard from './projectCard';
import monaDemo from '../assets/projects/demo.png';
import carHub from '../assets/projects/car-hub.png';
import spaceTravelers from '../assets/projects/space-travelers.png';
import todo from '../assets/projects/todo.png';

const projects = [
  {
    id: 4,
    name: 'Space Travelers App',
    type: ['SOLO', 'Front End Dev', '2023'],
    description:
      'A Space-Travelers gateway app for Rockets reserving and participating in captivating space missions.',
    technology: ['HTML', 'CSS', 'Redux', 'React'],
    image: spaceTravelers,
    link: 'https://github.com/musangamfure/Space-Travelers/',
    liveDemo: 'https://dev--adorable-pegasus-239e60.netlify.app/',
  },
  {
    id: 3,
    name: 'Car Hub',
    type: ['SOLO', 'Full-Stack Dev', '2023'],
    description:
      'Carhub App is the React client of a robust full-stack web application powered by the Ruby on Rails API.The go-to destination for effortless car reservation and purchasing',
    technology: ['React', 'CSS', 'Ruby on Rails', 'Tailwind'],
    image: carHub,
    link: 'https://github.com/musangamfure/Car-Hub/',
    liveDemo: 'https://carreservation.netlify.app/',
  },
  {
    id: 2,
    name: 'Mona Ecommerce Store',
    type: ['SOLO', 'Front End Dev', '2023'],
    description:
      'This is a highly customizable, visually appealing and user-friendly modern ecommerce template is designed to adapt seamlessly to all device screens.',
    technology: ['HTML', 'JavaScript', 'CSS'],
    image: monaDemo,
    link: 'https://github.com/musangamfure/mona-ecommerce-website',
    liveDemo: 'https://musangamfure.github.io/mona-ecommerce-website/',
  },
  {
    id: 1,
    name: 'To-Do-List',
    type: ['Microverse', 'Front End Dev', '2023'],
    description:
      'A minimalistic and simple todo-list app which allow users to add, edit and remove tasks.',
    technology: ['HTML', 'JavaScript', 'CSS', 'Webpack'],
    image: todo,
    link: 'https://github.com/musangamfure/Todo-List-App',
    liveDemo: 'https://musangamfure.github.io/Todo-List-App/dist/',
  },
];

const Projects = () => (
  <Section id="projects" className="py-28">
    <ul className="flex flex-col items-center">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ul>
  </Section>
);

export default Projects;

const Section = styled.section``;

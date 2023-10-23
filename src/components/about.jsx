import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Connect from './connect';
import DropdownMenu from './dropdown';

const borderRadiusValue = '0 4rem 0 0';
const About = () => {
  const [showFullText, setShowFullText] = useState(false);

  const handleReadMoreClick = () => {
    setShowFullText(!showFullText);
  };

  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(true);
    setIsOpen2(false);
    setIsOpen3(false);
  };

  const toggleDropdown2 = () => {
    setIsOpen1(false);
    setIsOpen2(true);
    setIsOpen3(false);
  };

  const toggleDropdown3 = () => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(true);
  };
  const handleResumeClick = (e) => {
    e.preventDefault();
    window.open(
      'https://drive.google.com/file/d/1ART-LbVD010zPDxeQuDcGs3NT_AqwGGd/view?usp=sharing',
    );
  };
  return (
    <Section
      id="about-me"
      className="p-6 flex flex-col justify-center items-center bg-white md:flex-row md:p-32"
    >
      <article>
        <h1 className="text-4xl text-left w-full font-bold leading-relaxed">
          About Me
        </h1>
        <p className="text-lg text-left py-4">
          Hello, I&apos;m Emmanuel, a recent graduate of Microverse&apos;s
          Full-Stack development program, and my path to becoming a software
          engineer is a unique one. With a background in Construction Management
          and Technology (Quantity Surveyor) and Agriculture, my journey into
          the world of software development began with a childhood dream of
          building a health companion robot. Through my experiences and
          relentless pursuit of knowledge, I&apos;ve transitioned into a
          full-fledged software engineer.
          {showFullText ? (
            <>
              <br />
              <br />
              During my time at Microverse, I honed my software engineering
              skills by dedicating over 1,300 hours to mastering the
              fundamentals, collaborating on global coding projects through pair
              programming, and building 30+ projects. I delved deep into
              Algorithms & Data Structures and embraced a wide range of
              technologies, preparing myself for the ever-evolving tech
              landscape.
              <br />
              <br />
              My journey has been marked by entrepreneurial endeavors, including
              African Holdings for Development LTD, GOLDEN BRIDGE LTD, and
              BIOPROTECT RWANDA LTD. These ventures, spanning financial,
              construction, and agriculture sectors, were not just experiences
              but profound lessons. They taught me resilience, problem-solving,
              and decision-making while introducing me to diverse perspectives
              and people. Ultimately, these experiences steered me towards my
              true calling as a software engineer.
              <br />
              <br />
              Outside of work, I find solace in the pages of spiritual,
              metaphysical, and fiction books. I believe that a holistic
              approach to life, both mentally and physically, is crucial. I
              balance my sedentary work hours with runs, allowing me to
              rejuvenate and return to my code with a fresh perspective
              <br />
              <br />
              If you are interested in connecting or discussing potential
              collaborations, please feel free to reach out. Let&apos;s embark
              on this exciting journey together.
            </>
          ) : null}
        </p>
        <button
          className="underline pb-10"
          type="button"
          onClick={handleReadMoreClick}
        >
          {showFullText ? 'Read Less' : 'Read More'}
        </button>

        <Connect />
        <Button button handleClick={handleResumeClick}>
          Get my resume
        </Button>
      </article>
      <article className="md:flex-col md:pl-5 w-full">
        <DropdownMenu
          title="Languages"
          items={['JavaScript', 'SQL', 'Ruby', 'HTML', 'CSS']}
          isOpen={isOpen1}
          toggleDropdown={toggleDropdown1}
        />
        <DropdownMenu
          title="Frameworks"
          items={[
            'ReactJS',
            'Ruby on Rails',
            'Bootstrap',
            'Tailwind CSS',
            'Sass/SCSS',
            'ExpressJS',
          ]}
          isOpen={isOpen2}
          toggleDropdown={toggleDropdown2}
        />
        <DropdownMenu
          title="Tools"
          items={[
            'Git',
            'GitHub',
            'VS Code',
            'Chrome Dev Tools',
            'PostgreSQL',
            'Webpack',
            'Heroku',
          ]}
          isOpen={isOpen3}
          toggleDropdown={toggleDropdown3}
        />
      </article>
    </Section>
  );
};

export default About;

const Section = styled.section`
  border-radius: ${(props) => props.borderRadius};
`;

Section.defaultProps = {
  borderRadius: borderRadiusValue,
};

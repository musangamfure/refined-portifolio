import styled from 'styled-components';
import Connect from './connect';
import headlineShapes from '../assets/headline-shapes.svg';

const borderRadiusValue = '0 0 0 4rem';
const Welcome = () => (
  <Section
    id="headline"
    className="p-6 flex flex-col justify-center items-center pt-40 pb-32 bg-white md:p-56 mt-14"
  >
    <h1 className="text-4xl text-left w-full font-bold leading-relaxed">
      I&apos;m Emmanuel 👋
      <br />
      Glad to see you!
    </h1>
    <p className="text-lg text-left py-4">
      I&apos;m a software developer with a unique blend of carrier backgrounds
      from Construction Management and Technology (Quantity Surveyor) and
      Agriculture and A co-founder of Three companies. I&apos;m passionate about
      creating digital solutions with code. Explore my work, and let&apos;s
      bring your projects to life. Got a coding project in mind? Let&apos;s
      chat! 🚀
    </p>
    <Connect />
  </Section>
);

export default Welcome;

const Section = styled.section`
  border-radius: ${(props) => props.borderRadius};
  background-image: url(${headlineShapes});
`;

Section.defaultProps = {
  borderRadius: borderRadiusValue,
};

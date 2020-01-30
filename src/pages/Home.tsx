import React from 'react';

import HeroImage from 'components/HeroImage';
import Section from 'components/Section';

const Home: React.FC = () => {
  return (
    <div>
      <HeroImage
        image={require('assets/island.jpg')}
        title="Hero Heading"
        subTitle="This is a sub heading."
      />
      <Section title="Information">
        This project is build using React, Redux, Redux-Saga, Typescript, Styled Components,
        Firebase, Formik...
      </Section>
    </div>
  );
};

export default Home;

import React from 'react';
import Input from 'components/input';

const AboutPage = () => {
  return (
    <div>
      welcome to Next.js! from About
      <Input
        label="label Name of Input"
        type="text"
        id="firstName"
        name="firstName"
      />
    </div>
  );
};
export default AboutPage;

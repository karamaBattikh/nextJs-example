import { useRouter } from 'next/router';
import styled from 'styled-components';
import Button from 'components/common/button';

const HomeWrapper = styled.div`
  text-align: center;
`;

const Home = () => {
  const router = useRouter();

  return (
    <HomeWrapper>
      <Button
        type="button"
        bgColor="darkPurple"
        color="white"
        size="large"
        handleClick={(e) => {
          e.preventDefault();
          router.push('/student');
        }}
      >
        Je suis un étudiant
      </Button>

      <Button
        type="button"
        bgColor="darkPurple"
        color="white"
        size="large"
        handleClick={(e) => {
          e.preventDefault();
          router.push('/company');
        }}
      >
        Je suis une entreprise
      </Button>

      <Button
        type="button"
        bgColor="darkPurple"
        color="white"
        size="large"
        handleClick={(e) => {
          e.preventDefault();
          router.push('/faculty');
        }}
      >
        Je suis un responsable de stage
      </Button>
    </HomeWrapper>
  );
};
export default Home;

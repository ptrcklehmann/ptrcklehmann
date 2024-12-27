import { Container } from "./styled";
import Intro from "./intro";
import { Profile } from "../profile";

export const MainContainer = () => {
  return (
    <Container>
      <Intro />
      <Profile />
    </Container>
  );
};

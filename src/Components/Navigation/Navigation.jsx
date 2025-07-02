import Logo from "./Logo";
import MainNav from "./MainNav";
import { NaviagtionMainContainer } from "./navigationStyle";

const NavigationComponent = () => {
  return (
    <NaviagtionMainContainer>
      <Logo />
      <MainNav />
    </NaviagtionMainContainer>
  );
};

export default NavigationComponent;

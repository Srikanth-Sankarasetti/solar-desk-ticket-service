import { HeaderMainContainer } from "./headerStyle";
import UserAvatar from "./UserAvatar";
import HeaderMenu from "./HeaderMenu";

const HeaderComponent = () => {
  return (
    <HeaderMainContainer>
      <UserAvatar />
      <HeaderMenu />
    </HeaderMainContainer>
  );
};

export default HeaderComponent;

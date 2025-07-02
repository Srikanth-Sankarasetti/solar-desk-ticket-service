import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../ui/themeContext";
const StyledLogo = styled.div`
  text-align: center;
`;

const MainLogoDashboard = styled(NavLink)`
  text-decoration: none;
`;

const LogoImage = styled.img`
  width: auto;
  height: 9.6rem;
`;

const Logo = () => {
  const { isDark } = useContext(ThemeContext);
  const image = isDark
    ? "https://res.cloudinary.com/ducrzzdqj/image/upload/v1749896713/solar_desk_dark_logo_xyh5xz.svg"
    : "https://res.cloudinary.com/ducrzzdqj/image/upload/v1749878248/solar_ticket_logo_4_ijwnps.svg";
  return (
    <StyledLogo>
      <MainLogoDashboard to="/">
        <LogoImage src={image} alt="logo" />
      </MainLogoDashboard>
    </StyledLogo>
  );
};

export default Logo;

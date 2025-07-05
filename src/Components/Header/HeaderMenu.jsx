import { styled } from "styled-components";
import { HiOutlineUser } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { MdLightMode, MdDarkMode } from "react-icons/md";

import { IoLogOutOutline } from "react-icons/io5";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../ui/themeContext";
import { useGlobalUserContext, USERACTION } from "../../ui/userContext";

const StyledHeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.8rem;
`;

const StyledHeaderNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.8rem;
  & svg {
    color: var(--iconColor);
  }
`;

const StyledThemeChangeButton = styled.button`
  color: black;
  background: none;
  border: none;
  font-size: 1.8rem;

  & svg {
    color: var(--iconColor);
  }
`;

const HeaderMenu = () => {
  const { isDark, setDark } = useContext(ThemeContext);
  const { userDispatch } = useGlobalUserContext();
  const navigate = useNavigate();

  const handleLogoutFunction = () => {
    Cookies.remove("token");
    userDispatch({ type: USERACTION.CLEAR_USER });
    navigate("/login", { replace: true });
  };

  const handleDarkThemeChange = () => {
    setDark((prev) => !prev);
    localStorage.setItem("theme", isDark);
  };

  return (
    <StyledHeaderMenu>
      <li>
        <StyledHeaderNavLink to="settings">
          <HiOutlineUser />
        </StyledHeaderNavLink>
      </li>
      <li>
        <StyledThemeChangeButton>
          {isDark ? (
            <MdDarkMode onClick={handleDarkThemeChange} />
          ) : (
            <MdLightMode onClick={handleDarkThemeChange} />
          )}
        </StyledThemeChangeButton>
      </li>
      <li>
        <StyledThemeChangeButton onClick={handleLogoutFunction}>
          <IoLogOutOutline title="logout" />
        </StyledThemeChangeButton>
      </li>
    </StyledHeaderMenu>
  );
};

export default HeaderMenu;

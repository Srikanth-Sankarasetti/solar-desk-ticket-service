import { styled } from "styled-components";

import { useGlobalUserContext } from "../../ui/userContext";
import getuserRole from "../../utils/getuserRole";
const StyledUserAvatar = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.5rem;
  color: var(--textBody);
`;

const Avatar = styled.img`
  display: block;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--borderColor);
`;

const UserAvatar = () => {
  const { loginuserstate } = useGlobalUserContext();
  const { name } = getuserRole();

  return (
    <StyledUserAvatar>
      <Avatar
        src={
          loginuserstate?.image
            ? loginuserstate.image
            : "https://res.cloudinary.com/ducrzzdqj/image/upload/v1748444223/default_wehzad.jpg"
        }
        alt={loginuserstate.name}
      />
      <span>Hi, {name}</span>
    </StyledUserAvatar>
  );
};

export default UserAvatar;

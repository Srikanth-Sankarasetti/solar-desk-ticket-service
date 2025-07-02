import { styled } from "styled-components";

import { useGlobalUserContext } from "../../ui/userContext";
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

  return (
    <StyledUserAvatar>
      <Avatar src={loginuserstate.image} alt={loginuserstate.name} />
      <span>
        Hi, {loginuserstate?.name ? loginuserstate.name : "Hello, User"}
      </span>
    </StyledUserAvatar>
  );
};

export default UserAvatar;

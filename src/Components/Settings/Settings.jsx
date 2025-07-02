import UserDataUpdate from "./UserDataUpdate";
import PasswordUpdate from "./PasswordUpdate";
import { StyledSettingHeader, StyledSettingMainHeader } from "./settings";

const Settings = () => {
  return (
    <StyledSettingMainHeader>
      <StyledSettingHeader>Update your account</StyledSettingHeader>
      <UserDataUpdate />
      <PasswordUpdate />
    </StyledSettingMainHeader>
  );
};

export default Settings;

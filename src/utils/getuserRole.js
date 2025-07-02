import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

const getuserRole = () => {
  const token = Cookies.get("token");
  if (!token) {
    return null;
  }

  try {
    const decode = jwtDecode(token);

    return {
      id: decode.id,
      role: decode.role,
      name: decode.name,
      email: decode.email,
      image: decode.image,
    };
  } catch (err) {
    return null;
  }
};

export default getuserRole;

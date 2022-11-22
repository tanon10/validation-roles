import { useNavigate } from "react-router-dom";
import { PublicRoutes } from "../../models";
import { UserKey } from "../../redux/states/user";
import { clearLocalStorage } from "../../utilities";

function Logout() {
  const navigate = useNavigate();
  const logout = () => {
    clearLocalStorage(UserKey);
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  };

  return <button onClick={logout}>Logout</button>;
}
export default Logout;

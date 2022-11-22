import { getMorty } from "../../services";
import { createUser, resetUser, UserKey } from "../../redux/states/user";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes, Roles } from "../../models";
import { useEffect } from "react";
import { clearLocalStorage } from "../../utilities";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    clearLocalStorage(UserKey);
    dispatch(resetUser());
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  }, []);

  const login = async () => {
    try {
      const result = await getMorty();
      //rol:Roles.ADMIN solo es una manera de colocar el rol del usuario a la fuerza
      dispatch(createUser({ ...result, rol: Roles.ADMIN }));
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
    } catch (error) {}
  };

  return (
    <div>
      <h2>Hola a este Login</h2>
      <button onClick={login}>Login</button>
    </div>
  );
}
export default Login;

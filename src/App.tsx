import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { PrivateRoutes, PublicRoutes, Roles } from "./models";
import { AuthGuard, RoleGuard } from "./guards";
import { RoutesWithNotFound } from "./utilities";
import { lazy, Suspense } from "react";
import { Dashboard } from "./pages/Private";

const Login = lazy(() => import("./pages/Login/Login"));
const Private = lazy(() => import("./pages/Private/Private"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<>Cargando</>}>
        <BrowserRouter>
          <RoutesWithNotFound>
            <Route path="/" element={PrivateRoutes.PRIVATE} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route element={<AuthGuard privateValidation={true} />}>
              <Route
                path={`${PrivateRoutes.PRIVATE}/*`}
                element={<Private />}
              />
            </Route>
            <Route element={<RoleGuard rol={Roles.ADMIN} />}>
              <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
            </Route>
          </RoutesWithNotFound>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;

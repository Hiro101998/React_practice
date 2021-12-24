import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const HomeRoutes = [
  {
    path: "home",
    exact: true,
    element: <Home />
  },
  {
    path: "home/user_management",
    exact: false,
    element: <UserManagement />
  },
  {
    path: "home/setting",
    exact: false,
    element: <Setting />
  }
];

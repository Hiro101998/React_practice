import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { HomeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templeates/HeaderLayout";

export const ORouter: FC = memo((props) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="*" element={<Page404 />} />
        {HomeRoutes.map((val) => (
          <Route
            key={val.path}
            path={val.path}
            element={<HeaderLayout>{val.element}</HeaderLayout>}
          />
        ))}
      </Routes>
    </div>
  );
});

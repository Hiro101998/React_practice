import { FC, memo, ReactNode } from "react";
// import { Outlet } from "react-router-dom";
import { Header } from "../organisms/layout/Header";

type Props = {
  childeren: ReactNode;
};
export const HeaderLayout: FC = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});

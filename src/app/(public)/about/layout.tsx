import { FC } from "react";

interface IProps {
  children: React.ReactNode;
}

const aboutLayout: FC<IProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default aboutLayout;

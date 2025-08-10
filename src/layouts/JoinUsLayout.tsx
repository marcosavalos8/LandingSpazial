import { ReactNode } from "react";

interface JoinUsProps {
  children: ReactNode;
}
const JoinUsLayout = ({ children }: JoinUsProps) => {
  return <main className="w-full px-4 md:px-8 mt-4">{children}</main>;
};

export default JoinUsLayout;

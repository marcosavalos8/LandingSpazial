import { ReactNode } from "react";

interface JoinUsProps {
  children: ReactNode;
}
const JoinUsLayout = ({ children }: JoinUsProps) => {
  return (
    <main className=" max-w-7xl mx-auto px-6 md:px-10 mt-4">{children}</main>
  );
};

export default JoinUsLayout;

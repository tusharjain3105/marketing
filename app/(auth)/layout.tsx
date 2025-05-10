import { unstable_ViewTransition as ViewTransition } from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ViewTransition>
      <div className="flex flex-col justify-end md:justify-center items-center bg-gradient-to-br from-blue-100 to-purple-200 h-screen">
        {children}
      </div>
    </ViewTransition>
  );
};
export default AuthLayout;

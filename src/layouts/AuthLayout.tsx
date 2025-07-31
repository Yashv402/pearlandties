import SidePanel from "@/components/components/SidePanel";
import React from "react";

interface AuthLayoutProps {
 children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
 return (
    <div>
     <SidePanel />
     {children}
    </div>
 );
};

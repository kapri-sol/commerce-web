import React, { createContext, ReactNode, useState } from "react";

interface Props {
    children: ReactNode;
}

export const SidebarContext = createContext<any>(null);

const SidebarProvider = ({ children }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
    };
    return <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>{children}</SidebarContext.Provider>;
};

export default SidebarProvider;

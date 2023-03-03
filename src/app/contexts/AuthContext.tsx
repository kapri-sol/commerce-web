import axios from "axios";
import React, { createContext, useEffect, useState, ReactNode } from "react";
import MainApi from "../api/main.api";

interface Props {
    children: ReactNode;
}

export const AuthContext = createContext<any>([]);

const AuthProvider = ({ children }: Props) => {
    const [isAuthed, setIsAuthed] = useState(false);

    return <AuthContext.Provider value={{ isAuthed, setIsAuthed }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

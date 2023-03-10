import React, { createContext, useState, ReactNode, useEffect } from "react";
import MainApi from "../api/main.api";

interface Props {
    children: ReactNode;
}

type Account = {
    email: string;
    name?: string;
};

export const AccountContext = createContext<any>([]);

const AccountProvider = ({ children }: Props) => {
    const [account, setAccount] = useState<Account | null>(null);

    const getAccount = async () => {
        try {
            const { data } = await MainApi.get("/accounts/me");
            setAccount({
                email: data.email,
                name: data.name
            });
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getAccount();
    }, []);

    return <AccountContext.Provider value={{ account, setAccount }}>{children}</AccountContext.Provider>;
};

export default AccountProvider;

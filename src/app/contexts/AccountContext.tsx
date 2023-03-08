import React, { createContext, useState, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

type Account = {
    email: string;
    password: string;
};

export const AccountContext = createContext<any>([]);

const AccountProvider = ({ children }: Props) => {
    const [account, setAccount] = useState<Account | null>(null);

    return <AccountContext.Provider value={{ account, setAccount }}>{children}</AccountContext.Provider>;
};

export default AccountProvider;

import { ReactNode, createContext, useContext, useState } from "react";

interface Props { 
    authVal: {"access_token": string, "login": boolean, "token_type": string, "user": string},
    setAuthClear: () => void,
    setAuthVal: (params: any) => any
 }
 

const val = {"access_token": "", "login": false, "token_type": "", "user": ""}
const AuthContext = createContext<Props>({
    authVal: {
        access_token: "",
        login: false,
        token_type: "",
        user: ""
    },
    setAuthClear: function (): void {
        throw new Error("Function not implemented.");
    },
    setAuthVal: function (params: any) {
        throw new Error("Function not implemented." + params);
    }
})

export default function AuthProvider({ children }: { children?: ReactNode }) {
    const [authVal, setAuthVal] = useState(val)
    function setAuthClear() { setAuthVal(() => { return val }) }

    return (
        <AuthContext.Provider value={{authVal, setAuthVal, setAuthClear}}>
            {children}
        </AuthContext.Provider>
    )
}

export const Auth = () => useContext(AuthContext)

import { userProfile } from "@/services/AuthApiService";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem("isLoggedIn") === "1"
  );
  const [isAdmin, setIsAdmin] = useState(false);
  const [refresher,setRefresher] = useState(0);

  const getProfile = async () => {
    const data = await userProfile();
    if (data?.success) {
      setUser(data?.data);
    } else {
      setUser({});
    }
  };

  useEffect(() => {
     getProfile();
  }, [isLoggedIn,refresher]);

  useEffect(() => {
    setIsAdmin(user?.isAdmin);
    setIsLoggedIn(user?.email);
  }, [user]);

  const auth = {
    user,
    setUser,
    isLoggedIn,
    setIsLoggedIn,
    isAdmin,
    setIsAdmin,
    refresher,
    setRefresher,
  };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAdminContext must be used within an AdminContextProvider"
    );
  }
  return context;
};

// Export the provider and hook
export { AuthContextProvider, useAuthContext };

import { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

export const AuthContext = createContext<AuthType | null>(null);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // watch for changes to the user state
    const unsubscibe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          email: user.email,
          uid: user.uid,
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscibe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, setIsLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

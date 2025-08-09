import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  user: any | null; // Change User to a more generic type or define a basic User interface
  loading: boolean;
  signInWithGoogle: () => Promise<{ error: Error | null }>;
  signOut: () => Promise<{ error: Error | null }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any | null>(null); // Change User to any
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    // Placeholder for future Firebase implementation
    console.log("signInWithGoogle called (placeholder)");
    return { error: new Error("Firebase not initialized") };
  };
  const signOut = async (): Promise<{ error: Error | null }> => {
    // Placeholder for future Firebase implementation
    console.log("signOut called (placeholder)");
    return { error: new Error("Firebase not initialized") };
  };

  // Provide a basic context without Firebase functionality initially
  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signInWithGoogle,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

/* eslint-disable react/prop-types */
import { createContext, useContext } from 'react';

// TEMP DEV:  Context is user (admin) ID.
const UserContext = createContext();

function UserProvider({ children }) {
  return (
    <UserContext.Provider value="6494666f44696915c33d76d5">
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) throw new Error('UserContext outside of scope');
  return context;
}

export { UserProvider, useUser };

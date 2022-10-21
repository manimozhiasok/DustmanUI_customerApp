import { FC, useState, createContext } from 'react';
type LoginDrawerContext = {
  isLoginDrawerOpen: any;
  closeLoginDrawer: () => void;
  toggleLoginDrawer: () => void;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const LoginDrawerContext = createContext<LoginDrawerContext>(
  {} as LoginDrawerContext
);

export const LoginDrawerProvider: FC = ({ children }) => {
  const [isLoginDrawerOpen, setIsLoginDrawerOpen] = useState(false);
  const closeLoginDrawer = () => {
    setIsLoginDrawerOpen(false);
  };
  const toggleLoginDrawer = () => {
    setIsLoginDrawerOpen(true);
  };

  return (
    <LoginDrawerContext.Provider
      value={{ isLoginDrawerOpen, closeLoginDrawer, toggleLoginDrawer }}
    >
      {children}
    </LoginDrawerContext.Provider>
  );
};

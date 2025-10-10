import StoreProvider from "./StoreProvider";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Providers = ({ children }:any) => {
  return <StoreProvider>{children}</StoreProvider>;
};

export default Providers;

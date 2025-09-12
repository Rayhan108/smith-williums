
import { Navbar } from "@/Component/Shared/Navbar";


const WithoutFooterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
          <Navbar />
        <div className="min-h-screen ">
          {children}
        </div>
    
      </div>
    </>
  );
};

export default WithoutFooterLayout;

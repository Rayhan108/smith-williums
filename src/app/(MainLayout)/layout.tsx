
import Footer from "@/Component/Shared/Footer";
import { Navbar } from "@/Component/Shared/Navbar";


const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
          <Navbar />
        <div className="min-h-screen ">
          {children}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainLayout;

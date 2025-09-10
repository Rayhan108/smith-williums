import Footer from "@/Component/Shared/Footer";
import { Navbar } from "@/Component/Shared/Navbar";



const MainLayout = ({ children }: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div>
        <div className="min-h-screen ">
          <Navbar />
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

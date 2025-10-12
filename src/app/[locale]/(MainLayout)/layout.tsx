import Footer from "@/Component/Shared/Footer";
import { Navbar } from "@/Component/Shared/Navbar";

const MainLayout = ({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) => {
  return (
    <>
      <div>
        {/* Pass locale into Navbar */}
        <Navbar locale={locale} />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;

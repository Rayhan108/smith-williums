
import { Navbar } from "@/Component/Shared/Navbar";


const WithoutFooterLayout = ({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) => {
  return (
    <>
      <div>
          <Navbar locale={locale}/>
        <div className="min-h-screen ">
          {children}
        </div>
    
      </div>
    </>
  );
};

export default WithoutFooterLayout;

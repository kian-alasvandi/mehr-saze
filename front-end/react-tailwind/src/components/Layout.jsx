import { useLocation } from 'react-router-dom';
import Header from './Header';
import SimpleHeader from './SimpleHeader';
import Footer from './Footer';

const Layout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      {isHomePage ? (
        <>
          <Header />
          {children}
        </>
      ) : (
        <>
          <SimpleHeader />
          <main>{children}</main>
        </>
      )}
      <Footer /> {/* 👈 در هر دو حالت، فوتر در انتها قرار می‌گیره */}
    </>
  );
};

export default Layout;

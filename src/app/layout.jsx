import Navbar from "../components/common/Narbar";


const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="max-w-6xl mx-auto p-6">
        {children}
      </main>
    </div>
  );
};

export default Layout;

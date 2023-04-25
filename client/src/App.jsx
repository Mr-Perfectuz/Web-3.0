import { Footer, Navbar, Services, Transactions, Welcome } from "./components";

const App = () => {
  return (
    <div className=" min-h-screen text-5xl font-bold ">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;

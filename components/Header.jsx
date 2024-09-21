import Link from "next/link";
import { Button } from "./ui/button";

// INFO: Importing the components
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  return (
    <header className="py-8 text-white xl:py-12">
      <div className="container flex items-center justify-between mx-auto">
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            Menath<span className="text-accent">.</span>
          </h1>
        </Link>

        <div className="items-center hidden gap-8 xl:flex">
          <Navbar />
          <Link href={"/contact"}>
            <Button>Hire me</Button>
          </Link>
        </div>

        <div className="xl:hidden">
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
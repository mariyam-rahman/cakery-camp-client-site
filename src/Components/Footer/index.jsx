import { Footer } from "flowbite-react";
import logo from "../../assets/logo3.png";
const Footers = () => {
  return (
    <div>
      <Footer className="bg-slate-300" container>
        <div className="w-full ">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <Footer.Brand alt=" Logo" src={logo} className="h-10 sm:h-24" />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Flowbite</Footer.Link>
                  <Footer.Link href="#">Tailwind CSS</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Github</Footer.Link>
                  <Footer.Link href="#">Discord</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms & Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright by="Flowbite™" href="#" year={2022} />
            {/* <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={u} />
              <Footer.Icon href="#" icon={i} />
              <Footer.Icon href="#" icon={l} />
              <Footer.Icon href="#" icon={e} />
              <Footer.Icon href="#" icon={n} />
            </div> */}
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default Footers;
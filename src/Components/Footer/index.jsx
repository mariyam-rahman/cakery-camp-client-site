import { Footer } from "flowbite-react";
import logo from "../../assets/logo.png";
const Footers = () => {
  return (
    <div>
      <Footer className="bg-yellow-50" container>
        <div className="w-full ">
          <div className="grid w-full justify-between sm:flex sm:justify-around md:flex md:grid-cols-1">
            <div>
              <Footer.Brand alt=" Logo" src={logo} className="h-10 sm:h-24" />
              <p className="w-96">
                Experience the sweetest summer at our cake bakery summer camp!
                Learn baking skills, decorate delicious cakes, and make lifelong
                memories with friends.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="Menu" />
                <Footer.LinkGroup col>
                  <Footer.Link href="/classes">Classes</Footer.Link>
                  <Footer.Link href="/instructors">Instructors</Footer.Link>
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
          <div className="w-full sm:items-center sm:justify-between">
            <Footer.Copyright by="The Cakery Camp" href="#" year={2023} />
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default Footers;

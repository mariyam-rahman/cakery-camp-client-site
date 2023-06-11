import { Avatar, Dropdown, Navbar, Tooltip } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "./../../AuthProvider";
import logo from "../../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const { signIn, user, logout, token } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location);

  return (
    <div>
      <Navbar fluid={true} rounded={true} className=" bg-[#ffffff] h-24 ">
        <Navbar.Brand
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <img src={logo} className="h-10 sm:h-20" alt=" Logo" />
          {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            The Cakery Camp
          </span> */}
        </Navbar.Brand>
        <Tooltip id="my-tooltip" />

        {/* <div className="flex md:order-2">
          {user ? (
            // <button onClick={logout} className="btn">
            //   Logout
            // </button>

            <a
              data-tooltip-id="my-tooltip"
              data-tooltip-content={user?.displayName}
            >
              <Dropdown
                className="block"
                arrowIcon={false}
                inline={true}
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Hello world!"
                label={
                  <Avatar
                    alt="User settings"
                    // img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    onClick={(e) => {
                      console.log(e);
                    }}
                    img={
                      user && user.photoURL
                        ? user.photoURL
                        : "https://www.w3schools.com/howto/img_avatar.png"
                    }
                    rounded={true}
                  />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">{user?.displayName}</span>
                  <span className="block truncate text-sm font-medium">
                    {user?.email}
                  </span>
                </Dropdown.Header>

                <Dropdown.Divider />
                <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
              </Dropdown>
            </a>
          ) : (
            <Link to={"/login"}>
              <button className="btn">Login </button>
            </Link>
          )}
          <Navbar.Toggle />
        </div> */}

        <Navbar.Collapse>
          <Link to={"/"}>
            <Navbar.Link active={location.pathname == "/"}>Home</Navbar.Link>
          </Link>
          <Link to={"/classes"}>
            <Navbar.Link
              active={location.pathname == "/classes"}
              to={"/classes"}
            >
              Classes
            </Navbar.Link>
          </Link>

          <Link to={"/instructors"}>
            <Navbar.Link active={location.pathname == "/instructors"}>
              Instructors
            </Navbar.Link>
          </Link>
          <Link to={"/dashboard"}>
            <Navbar.Link active={location.pathname == "/dashboard"}>
              Dashboard
            </Navbar.Link>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

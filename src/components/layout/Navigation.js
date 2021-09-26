import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Home from "../home/Home";
import Contact from "../contact/Contact";
import About from "../about/About";
import Hotels from "../hotels/Hotels";
import Login from "../login/Login";
import AddHotelPage from "../hotels/AddHotelPage";
import Messages from "../messages/Messages";
import Enquieries from "../enquiries/Enquiries";
import HotelDetail from "../hotels/HotelDetail";
import logodazee from "../../images/logodazee.png";
import MakeEnquiries from "../enquiries/MakeEnquiries";

function Navigation() {
  const [auth, setAuth] = useContext(AuthContext);

  const history = useHistory();

  function logout() {
    setAuth(null);
    history.push("contact");
  }

  return (
    <>
      <div className="wrapper">
        <Router>
          <Navbar position="fixed" expand="sm" collapseOnSelect>
            <Navbar.Brand href="/">
              <img
                src={logodazee}
                width="60px"
                height="60px"
                alt="Circle with logo name, Holidaze inside, with three houses to symbolize the famous Bryggen in Bergen"
              />{" "}
            </Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="mr-auto">
                <NavLink exact to="/" className="nav-link">
                  Home
                </NavLink>
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
                <NavLink to="/hotels" className="nav-link">
                  Hotels
                </NavLink>

                {auth ? (
                  <>
                    <NavDropdown title="Admin">
                      <NavDropdown.Item
                        href="/addhotelpage"
                        className="nav-link"
                      >
                        Add hotel
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/messages" className="nav-link">
                        Messages
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/enquieries" className="nav-link">
                        Enquiries
                      </NavDropdown.Item>
                    </NavDropdown>
                    {/*                     <p>Logged in as {auth.user.username}</p> */}
                    <Nav>
                      <button className="btn__logout" onClick={logout}>
                        Log out
                      </button>
                    </Nav>
                  </>
                ) : (
                  <NavLink to="/login" className="nav-link">
                    Login
                  </NavLink>
                )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/hotels" component={Hotels} />
            <Route path="/login" component={Login} />
            <Route path="/addhotelpage" component={AddHotelPage} />
            <Route path="/messages" component={Messages} />
            <Route path="/enquieries" component={Enquieries} />
            <Route path="/makeenquiry" component={MakeEnquiries} />
            <Route path="/hoteldetail/makeenquiry/:name">
              <MakeEnquiries />
            </Route>
            <Route path="/hoteldetail/:id">
              <HotelDetail />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default Navigation;

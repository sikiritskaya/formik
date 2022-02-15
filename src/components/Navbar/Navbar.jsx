import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  padding: 20px;
  .active {
    color: gold;
  }
`;
const StyledLink = styled(NavLink)`
  color: #000;
  font-weight: bold;
  font-size: 20px;
  :hover {
    text-decoration: underline;
  }
`;
const Navbar = () => {
  return (
    <Nav>
      <div>
        <StyledLink to="/posts" activeClassName="active">
          Posts
        </StyledLink>
      </div>
      <div>
        <StyledLink to="/users" activeClassName="active">
          Users
        </StyledLink>
      </div>
    </Nav>
  );
};

export default Navbar;

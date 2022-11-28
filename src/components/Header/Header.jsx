import { Heading } from "react-bulma-components";
import "./Header.css";

const Header = ({ headerData }) => {
  return (
    <header>
      <Heading className=" header mb-5 py-1">Employee List</Heading>
      <Heading className=" header mb-5 py-1" subtitle>
        Employees {headerData.from} to {headerData.to}
      </Heading>
    </header>
  );
};

export default Header;

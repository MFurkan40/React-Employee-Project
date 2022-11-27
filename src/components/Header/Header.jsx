import { Heading } from "react-bulma-components";
import "./Header.css";

const Header = ({ headerData }) => {
  return (
    <header>
      <Heading className=" mb-5 py-1">Employee List</Heading>
      <Heading className=" mb-5 py-1" subtitle>
        Employees {headerData.from} to {headerData.to}
      </Heading>
    </header>
  );
};

export default Header;

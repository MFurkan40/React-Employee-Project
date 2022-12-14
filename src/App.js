import Header from "./components/Header/Header";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import PaginationButton from "./components/Pagination/PaginationButton";

import "./App.css";
import "bulma/css/bulma.min.css";
import { Box } from "react-bulma-components";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [peoplePerPage, setPeoplePerPage] = useState(4);
  const [result, setResult] = useState(true);

  //! windowSize
  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  };

  //! windowSize setPeoplePerPage
  window.addEventListener("resize", () => {
    if (getWindowSize().innerWidth > 1980) {
      setResult(true);
      setPeoplePerPage(5);
    } else if (getWindowSize().innerWidth < 768) {
      setResult(false);
      setPeoplePerPage(3);
    } else {
      setResult(true);
      setPeoplePerPage(4);
    }
  });

  useEffect(() => {
    const fetchPeople = async () => {
      setLoading(true);
      // const res = await axios.get("/db/data.json");
      const res = await axios.get(
        "https://raw.githubusercontent.com/MFurkan40/data-repos/main/data.json"
      );
      setPeople(res.data);
      setLoading(false);
    };

    fetchPeople();
  }, []);

  //! Get the current person

  const indexOfLastPerson = currentPage * peoplePerPage;
  const indexOfFirstPerson = indexOfLastPerson - peoplePerPage;
  const currentPerson = people.slice(indexOfFirstPerson, indexOfLastPerson);

  //! header data info

  const setHeaderDataTo = () => {
    if (getWindowSize().innerWidth > 1980) {
      return (currentPage - 1) * peoplePerPage + 1 + 4;
    } else if (getWindowSize().innerWidth < 768) {
      return (currentPage - 1) * peoplePerPage + 1 + 2;
    } else {
      return (currentPage - 1) * peoplePerPage + 1 + 3;
    }
  };

  const headerData = {
    from: (currentPage - 1) * peoplePerPage + 1,
    to: setHeaderDataTo(),
  };

  // //! Change page (used bulma components )
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Box>
      <Header headerData={headerData} />
      <EmployeeList people={currentPerson} loading={loading} />
      <PaginationButton
        currentPage={currentPage}
        peoplePerPage={peoplePerPage}
        totalPeople={people.length}
        setCurrentPage={setCurrentPage}
        result={result}
      />
    </Box>
  );
}

export default App;

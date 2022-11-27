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

  //! windowSize setPeoplePerPage
  window.addEventListener("resize", () => {
    if (getWindowSize().innerWidth > 1980) {
      setPeoplePerPage(5);
    } else if (getWindowSize().innerWidth < 768) {
      setPeoplePerPage(3);
    } else {
      setPeoplePerPage(4);
    }
  });

  useEffect(() => {
    const fetchPeople = async () => {
      setLoading(true);
      const res = await axios.get("/db/data.json");
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
      />
    </Box>
  );
}

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default App;

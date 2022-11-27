import { Pagination } from "react-bulma-components";

const PaginationButton = ({
  currentPage,
  setCurrentPage,
  peoplePerPage,
  totalPeople,
}) => {
  return (
    <Pagination
      className="mt-6 p-2"
      current={currentPage}
      showFirstLast
      total={Math.ceil(totalPeople / peoplePerPage)}
      onChange={(current) => setCurrentPage(current)}
      size="small"
    />
  );
};

export default PaginationButton;

// const pageNumbers = [];

// for (let i = 1; i <= Math.ceil(totalPeople / peoplePerPage); i++) {
//   pageNumbers.push(i);
// }
//  <nav>
// <ul className="pagination">
//   {pageNumbers.map((number) => (
//     <li key={number} className="page-item">
//       <a onClick={() => paginate(number)} href="!#" className="page-link">
//         {number}
//       </a>
//     </li>
//   ))}
// </ul>
// </nav>

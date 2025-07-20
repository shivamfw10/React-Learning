import { useState } from "react";
import { ITEMS } from "./item";
import "./pagination.css";
import "../style.css";

const ITEMS_PER_PAGE = 5;
const TOTAL_PAGES = Math.ceil(ITEMS.length / ITEMS_PER_PAGE);

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;
  const currentItems = ITEMS.slice(startIdx, endIdx);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="section-box">
      <h3>Pagination Example</h3>
      <p>Navigate through pages to view items.</p>
      <ul className="pagination-list">
        {currentItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="pagination-controls">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {Array.from({ length: TOTAL_PAGES }, (_, i) => (
          <button
            key={i + 1}
            className={currentPage === i + 1 ? "active" : ""}
            onClick={() => goToPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === TOTAL_PAGES}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Pagination;

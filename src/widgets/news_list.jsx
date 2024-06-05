import Article from "../blocks/article";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import ArrowLeft from "../elements/arrow_left";
import ArrowRight from "../elements/arrow_right";

function NewsList({ items, selectedMonth, selectedYear }) {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  const filteredItems = items.filter((item) => {
    const date = new Date(item.date_created);
    return (
      (selectedMonth == -1 || date.getMonth() === selectedMonth) &&
      (selectedYear == -1 || date.getFullYear() === selectedYear)
    );
  });
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredItems.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  let news = currentItems.map((article) => (
    <Article data={article} key={article.id} />
  ));
  return (
    <div className="w-full flex flex-col gap-20">
      {news}
      <ReactPaginate
        breakLabel="..."
        nextLabel={<ArrowRight />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<ArrowLeft />}
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default NewsList;

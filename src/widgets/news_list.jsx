import Article from "../blocks/article";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import ArrowLeft from "../elements/arrow_left";
import ArrowRight from "../elements/arrow_right";

function NewsList({ items }) {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
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

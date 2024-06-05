import Archive from "../blocks/archive";
import TextHeader from "../elements/text_header";
import TextSubheader from "../elements/text_subheader";
import axios from "axios";
import NewsList from "../widgets/news_list";
import React, { useState } from "react";

function PageNews() {
  const [items, setPost] = React.useState([]);
  const [months, setMonths] = React.useState([]);
  const [selectedMonth, setSelectedMonth] = React.useState(-1);
  const [selectedYear, setSelectedYear] = React.useState(-1);
  const baseURL =
    "https://backend.xn----jtbfcagdcajpep7b9a1k.xn--p1ai/news/?format=json";
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      setMonths(
        response.data.map((item) => {
          const date = new Date(item.date_created);
          return { month: date.getMonth(), year: date.getFullYear() };
        })
      );
    });
  }, []);
  return (
    <div className="flex flex-col gap-6">
      <div className="w-full h-px border-2 border-slate-700"></div>
      {/* Колонки */}
      <div className="flex gap-20">
        {/* Левая колонка */}
        <div className="flex flex-col items-center w-full gap-6">
          <TextHeader toptext="Новости" />
          <NewsList
            items={items}
            selectedMonth={selectedMonth}
            selectedYear={selectedYear}
          />
        </div>
        {/* Правая колонка*/}
        <div className="flex mt-[84px] w-96 h-min p-4 items-center bg-white rounded-3xl flex-col">
          <TextSubheader toptext="Архив новостей" />
          <Archive
            months={months}
            selectMonth={setSelectedMonth}
            selectYear={setSelectedYear}
          />
        </div>
      </div>
    </div>
  );
}

export default PageNews;

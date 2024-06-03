import TextHeader from "../elements/text_header";
import TextSubheader from "../elements/text_subheader";
import Header from "../widgets/header";
import NewsList from "../widgets/news_list";

function PageNews() {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-full h-px border-2 border-slate-700"></div>
      {/* Колонки */}
      <div className="flex gap-20">
        {/* Левая колонка */}
        <div className="flex flex-col items-center w-full gap-6">
          <TextHeader toptext="Новости" />
          <NewsList />
        </div>
        {/* Правая колонка*/}
        <div className="flex mt-[84px] w-96 h-48 p-4 justify-center bg-white rounded-3xl">
          <TextSubheader toptext="Архив новостей" />
        </div>
      </div>
    </div>
  );
}

export default PageNews;

import TextSubheader from "../elements/text_subheader";
import ArticleInfo from "./article_info";

function Article({ data }) {
  return (
    <a href={`/news/${data.id}/`} className="relative">
      <div className="flex flex-col gap-5 w-full h-[584px] p-4 bg-white rounded-3xl overflow-hidden z-0">
        <TextSubheader toptext={data.title} />
        <ArticleInfo date={data.date_created} views={data.views} />
        <div
          dangerouslySetInnerHTML={{ __html: data.content }}
          className="z-0"
        />
      </div>
      <div className="h-[300px] w-full bg-gradient-to-b from-transparent to-white hover:to-80% z-10 bottom-0 absolute flex justify-center items-end p-4 text-stone-700 text-xl font-normal font-['Alegreya']">
        Читать далее
      </div>
    </a>
  );
}

export default Article;

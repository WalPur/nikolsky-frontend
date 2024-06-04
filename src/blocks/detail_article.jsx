import TextSubheader from "../elements/text_subheader";

function DetailArticle({ data }) {
  return (
    <div className="flex flex-col gap-5 w-full p-4 bg-white rounded-3xl overflow-hidden z-0">
      <TextSubheader toptext={data.title} />
      <div dangerouslySetInnerHTML={{ __html: data.content }} className="z-0" />
    </div>
  );
}

export default DetailArticle;

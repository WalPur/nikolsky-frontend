import TextSubheader from "../elements/text_subheader";

function Article({ data }) {
  return (
    <div className="flex flex-col gap-5 w-full p-4 bg-white rounded-3xl overflow-hidden">
      <TextSubheader toptext={data.title} />
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
    </div>
  );
}

export default Article;

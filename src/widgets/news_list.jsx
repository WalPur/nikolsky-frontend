import Article from "../blocks/article";
import axios from "axios";
import React from "react";

const baseURL =
  "https://backend.xn----jtbfcagdcajpep7b9a1k.xn--p1ai/news/?format=json";
function NewsList() {
  const [posts, setPost] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  let news = posts.map((article) => (
    <Article data={article} key={article.id} />
  ));
  return <div className="w-full">{news}</div>;
}

export default NewsList;

import { useParams } from "react-router-dom";
import axios from "axios";
import React from "react";
import DetailArticle from "../blocks/detail_article";

const baseURL = "https://backend.xn----jtbfcagdcajpep7b9a1k.xn--p1ai/news/";
function PageDetailNews() {
  const { id } = useParams();
  const [article, setArticle] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL + id + "/").then((response) => {
      setArticle(response.data);
    });
  }, []);
  return (
    <div className="flex flex-col gap-6">
      <DetailArticle data={article} />
    </div>
  );
}

export default PageDetailNews;

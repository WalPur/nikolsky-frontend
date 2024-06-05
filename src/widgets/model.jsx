import { Link } from "react-router-dom";

function Model({ data }) {
  return (
    <Link to={data.model}>
      <div className="w-[1328px] bg-white rounded-[20px] p-20 flex justify-between">
        <div>
          <div className="text-stone-700 text-[32px] font-medium font-['Alegreya']">
            {data.name}
          </div>
          <div className="w-[600px] h-[0px] border border-slate-700"></div>
          <div className="w-[601px] h-[341px]">
            <span className="text-black text-2xl font-normal font-['Alegreya']">
              {data.content}
            </span>
          </div>
        </div>
        <div>
          <img
            className="w-[475px] h-[404px] rounded-[20px] crp"
            src={data.image}
          />
        </div>
      </div>
    </Link>
  );
}

export default Model;

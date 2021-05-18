import { useSelector } from "react-redux";

export const ResultSearch = ({ datos }) => {
  const search = useSelector((state) => state.search);
  return (
    <div>
      <h3>Results: </h3>
      {search.loading && <div>Searching...</div>}
      {search.characters.length >= 1 && (
        <div>
          <p>{search.characters[0].name}</p>
          {/* <img className="data-img" src={datos.image} alt="" /> */}
        </div>
      )}
      {search.error !== "" && <span>{search.error}</span>}
    </div>
  );
};
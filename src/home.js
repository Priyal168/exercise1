import { useEffect, useState } from "react";
import Search from "./filter";
import TableData from "./table";
import "./home.css"

const HomePage = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [sortedAsc, setSortedAsc] = useState(true);
  const getApiData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((user) => {
        console.log(user);
        setData(
          user.sort((a, b) => {
            if (a?.name < b?.name) {
              return -1;
            }
            if (a?.name > b?.name) {
              return 1;
            }
            return 0;
          })
        );
        setFilterData(user);
      });
  };

  const handleSort = (e) => {
    const prevData = [...filterData];
    prevData.reverse();

    setFilterData(prevData);

    setSortedAsc((cur) => !cur);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div>
      <div className="whole">
      <div className="search">
      <Search data={data} setFilterData={setFilterData} />
      </div>
      <button onClick={handleSort}>
        {sortedAsc ? "DSC" : "ASC"}
      </button>
      </div>
      <div className="table-users">
      <h2 className="users">USERS</h2>
      <TableData data={filterData} />
      </div>
    </div>
  );
};

export default HomePage;

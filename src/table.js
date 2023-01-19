import "./table.css"

const TableData = ({ data }) => {
    // const [data]=props
    return (
      <table cellSpacing={0}>
        <thead className="heading">
          <tr>
            <th className="name">Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Website</th>
            <th>Address</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => {
            return (
              <tr key={d.id}>
                <td>{d.name}</td>
                <td>{d.username}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td>{d.website}</td>
                <td>
                  {d.address.street}
                  {d.address.suite} {d.address.city} {d.address.zipcode}{" "}
                  {d.address.geo.lat} {d.address.geo.lng}
                </td>
                <td>
                  {d.company.name} {d.company.catchPhrase} {d.company.bs}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  
export default TableData;
  
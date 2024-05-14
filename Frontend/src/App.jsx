import { useEffect, useState } from "react";

function App() {
  const [data, setdata] = useState();
  let [count, setcount] = useState(0);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      let res = await fetch("http://localhost:4545/stoke");
      let data = await res.json();
      setdata(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  // setTimeout(() => {
  //   setcount(() => count++);
  // }, 1000);
  return (
    <>
      <table style={{ margin: "auto", border: "1px solid red" }}>
        <thead>
          <tr>
            <th>Stock Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Buy</th>
            <th>Sell</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((ele, index) => (
            <tr key={index}>
              <td>{ele.name}</td>

              <td>
                {count < 10
                  ? (ele.price,
                    setTimeout(() => {
                      setcount(() => count++);
                    }, 1500))
                  : (ele.price,
                    setTimeout(() => {
                      setcount(() => count--);
                    }, 2000))}
              </td>
              <td>{ele.quantity}</td>
              <td
                style={{
                  backgroundColor: "green",
                  color: "white",
                  borderRadius: "4px",
                  padding: "8px",
                }}
              >
                Buy
              </td>
              <td
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  borderRadius: "4px",
                  padding: "8px",
                }}
              >
                Sell
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;

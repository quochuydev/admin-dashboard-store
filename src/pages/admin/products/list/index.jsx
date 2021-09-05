import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

import Layout from "../../../../components/Layout";
import config from "../../../../utils/config";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `${config.server}/api/products`,
    })
      .then(function (response) {
        console.log(response.data?.items);
        setProducts(response.data?.items);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      <nav>
        {products.map((e, i) => (
          <ul key={i}>
            <li>[{i}]</li>
            <li>{e._id}</li>
            <li>{e.title}</li>
            <li>{e.price}</li>
            <li>{e.sku}</li>
            <li>{moment(e.createdAt).format("DD-MM-YYYY HH:mm:ss")}</li>
          </ul>
        ))}
      </nav>
    </Layout>
  );
}

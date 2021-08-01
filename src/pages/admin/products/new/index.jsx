import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Layout, Button, Checkbox, TextField } from "@shopify/polaris";

import Editor from '../../../../components/Editor'
import DropZone from '../../../../components/DropZone'
import Variants from './Variants'
import ProductType from './ProductType'
import Vendor from './ProductType'
import Tags from './ProductType'
import Options from './Options'

export default function OfficeProductNew() {
  const [data, setData] = useState({
    title: null,
    handle: null,
    description: null,
    variants: [
      {
        image: null,
        title: null,
        sku: null,
        price: 0,
      },
    ],
    productType: 'type1',
    vendor: 'type1',
    tags: []
  });

  useEffect(() => {
    const options = {
      method: "get",
      url: `${process.env.NEXT_PUBLIC_SERVER_URL}/orders`,
    }
    axios(options)
      .then(function (response) {
        console.log(response.data?.items);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function onSubmit(e) {
    e.preventDefault()
    console.log(data);

    const options = {
      method: "get",
      url: `${process.env.NEXT_PUBLIC_SERVER_URL}/products`,
    }
    axios(options)
      .then(function (response) {
        console.log(response.data?.items);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const setFieldValue = useCallback(
    (name, value) => setData(data => ({ ...data, [name]: value })),
    [],
  );

  const [checked, setChecked] = useState(false);
  const handleChange = useCallback((newChecked) => setChecked(newChecked), []);

  return (
    <>
      <form onSubmit={onSubmit}>
        <Layout>
          <Layout.Section>
            <p>{JSON.stringify(data)}</p>
            <TextField label="Title" value={data.title} onChange={e => setFieldValue('title', e)} />
            <Editor initValue={data.description} onData={e => setFieldValue('description', e)} />
            <DropZone product={data} />
            <Checkbox label="Product has many variants" checked={checked} onChange={handleChange} />
            <Options product={data} />
            <Variants product={data} onData={e => setFieldValue('variants', e)}/>
            <Button submit>Save</Button>
          </Layout.Section>
          <Layout.Section secondary>
            <ProductType value={data.productType} onData={e => setFieldValue('productType', ...e)}/>
            <Vendor value={data.vendor} onData={e => setFieldValue('vendor', ...e)}/>
            <Tags value={data.tags} onData={e => setFieldValue('tags', e)} allowMultiple={true}/>
          </Layout.Section>
        </Layout>
      </form>
    </>
  );
}

import { Button } from "@mui/material";
import { Fragment } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
interface Pros {
    products: Product[];
    addProduct: () => void;
}
export default function Catalog(props: Pros){
    return (
        <Fragment>
                   <ProductList products={props.products}/>
                <Button variant="contained" onClick={props.addProduct}>Add product</Button>
        </Fragment>
    )
}
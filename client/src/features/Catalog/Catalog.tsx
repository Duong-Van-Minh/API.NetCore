import { Fragment } from "react";

export default function Catalog(props: any){
    return (
        <Fragment>
                    <ul>
                    {props.products.map((products: any) => (
                    <li>{products.name} - {products.price}</li>
                    ))}
                </ul>
        </Fragment>
    )
}
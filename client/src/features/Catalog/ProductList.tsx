import { Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { spacing } from "@mui/system";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

interface Props {
    products: Product[];
}
export default function ProductList({ products }: Props) {
    return (
        <Grid container spacing={4}>
            {
                products.map(p => (
                    <Grid item xs={4}>
                        <ProductCard key={p.id} products={products} />
                    </Grid>
                ))}
        </Grid>
    )
}
 // <ListItem key={p.id}>
            //         <ListItemAvatar>
            //             <Avatar src={p.pictureUrl}/>
            //         </ListItemAvatar>
            //         <ListItemText>
            //         {p.name} - {p.price}
            //         </ListItemText>
            // </ListItem>
import { Chip, TableCell, TableRow } from '@mui/material';
// import { ProductItem } from 'data/product-data';
import { ReactElement } from 'react';

const ProductItemRow = ({ productItem }: { productItem: any }): ReactElement => {
  return (
    <TableRow>
      <TableCell
        align="left"
        component="th"
        variant="head"
        scope="row"
        sx={{
          color: 'common.white',
          fontSize: 'body1.fontSize',
        }}
      >
        {productItem.id}
      </TableCell>
      <TableCell
        align="left"
        sx={{
          whiteSpace: 'nowrap',
        }}
      >
        {new Date(productItem.datetime).toLocaleString()}
      </TableCell>
      <TableCell align="left">
        <Chip
          label={`${productItem.slottype}`}
          color={productItem.slottype === "IN" ? "warning" : "success"}
          variant="outlined"
          size="medium"
        />
      </TableCell>
      <TableCell 
        align="left"
        sx={{
          whiteSpace: 'nowrap',
        }}
      >
        {productItem.slotleft}
      </TableCell>
    </TableRow>
  );
};

export default ProductItemRow;

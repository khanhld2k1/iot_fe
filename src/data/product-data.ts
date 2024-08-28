import { LinearProgressProps } from '@mui/material';

export interface ProductItem {
  id?: string;
  datetime: number;
  slottype: string;
  slotleft: number;
}

export const productTableRows: ProductItem[] = [
  {
    id: '01',
    datetime: 1693056000000,
    slottype: 'IN',
    slotleft: 78,
  },
  {
    id: '02',
    datetime: 1693077600000,
    slottype: 'IN',
    slotleft: 80,
  },
  {
    id: '03',
    datetime: 1693063200000,
    slottype: 'OUT',
    slotleft: 90,
  },
  {
    id: '04',
    datetime: 1693084800000,
    slottype: 'OUT',
    slotleft: 50,
  },
  {
    id: '05',
    datetime: 1693084800000,
    slottype: 'IN',
    slotleft: 50,
  },
  {
    id: '06',
    datetime: 1693084800000,
    slottype: 'IN',
    slotleft: 50,
  },
];

import { useState, useEffect } from 'react';
import {
  Chip,
  Paper,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  TablePagination,
  CircularProgress,
} from '@mui/material';
import SimpleBar from 'simplebar-react';
import axios from 'axios';

const TopProducts = (): React.ReactElement => {
  interface ProductItem {
    id?: string;
    timestamp: number;
    slottype: string;
    slotleft: number;
  }
  const [data, setData] = useState<ProductItem[]>([]); // State to hold the fetched data
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4); // Set rows per page to 4

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://dummyjson.com/c/ce5a-c71d-4ffb-9cd5'); // Replace with your API endpoint
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle page change
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page
  };

  // Calculate the rows to display on the current page
  const displayedRows = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Paper sx={{ p: { xs: 4, sm: 8 }, height: 1 }}>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <TableContainer component={SimpleBar}>
            <Table sx={{ minWidth: 440 }}>
              <TableHead>
                <TableRow>
                  <TableCell align="left">#</TableCell>
                  <TableCell align="left">Time Stamp</TableCell>
                  <TableCell align="left">Slot Type</TableCell>
                  <TableCell align="center">Slot left</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {displayedRows.map((product, index) => (
                  <TableRow key={product.id}>
                    <TableCell align="left">{index + 1 + page * rowsPerPage}</TableCell>
                    <TableCell align="left">
                      {new Date(product.timestamp).toLocaleString()}
                    </TableCell>
                    <TableCell align="left">
                      <Chip
                      label={`${product.slottype}`}
                      color={product.slottype === "IN" ? "warning" : "success"}
                      variant="outlined"
                      size="medium"
                      />
                    </TableCell>
                    <TableCell align="center">{product.slotleft}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            component="div"
            count={data.length} 
            page={page} 
            onPageChange={handleChangePage} 
            rowsPerPage={rowsPerPage} 
            onRowsPerPageChange={handleChangeRowsPerPage} 
            rowsPerPageOptions={[4]}
          />
        </>
      )}
    </Paper>
  );
};

export default TopProducts;

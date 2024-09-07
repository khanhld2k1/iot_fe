import { useState } from 'react';
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

interface ParkingInput {
  ParkingID: number;
  SlotID: number;
  EntryTime: number;
  ExitTime: number;
}
const TopProducts = (
  {parkingData, loading}: {parkingData:ParkingInput[]; loading:boolean}
): React.ReactElement => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4); // Set rows per page

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page
  };

  const displayedRows = parkingData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

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
                  <TableCell align="left">Slot ID</TableCell>
                  <TableCell align="left">Time Stamp</TableCell>  
                  <TableCell align="left">Slot Type</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {displayedRows.map((product, index) => (
                  <TableRow key={product.ParkingID}>
                    <TableCell align="left">{index + 1 + page * rowsPerPage}</TableCell>
                    <TableCell align="left">{product.SlotID}</TableCell>
                    <TableCell align="left">
                      {new Date(product.EntryTime == null ? product.ExitTime : product.EntryTime).toLocaleString()}
                    </TableCell>
                    <TableCell align="left">
                      <Chip
                      label={`${product.EntryTime == null ? "OUT" : "IN"}`}
                      color={product.EntryTime === null ? "success" : "warning"}
                      variant="outlined"
                      size="medium"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            component="div"
            count={parkingData.length} 
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

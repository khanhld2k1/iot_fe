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

const ParkingSlot = ({handleSlotChange}:{handleSlotChange:(data: any) => void;}): React.ReactElement => {
  interface SlotStatus {
    SlotID:number;
    SlotPosition: number;
    Status: number;
  }
  const [data, setData] = useState<SlotStatus[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4); // Set rows per page

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/slots'); // api/ParkingSlot
        console.log({response})
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const displayedRows = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);


  const filterAvalibleSlots = data.filter(slot => slot.Status === 0);
  useEffect(() => {
    handleSlotChange(filterAvalibleSlots.length);
  }, [filterAvalibleSlots, handleSlotChange]);

  useEffect
  return (
    <Paper sx={{ p: { xs: 4, sm: 8 }, height: 1 }}>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <TableContainer component={SimpleBar}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="left">Slot Position</TableCell>
                  <TableCell align="left">Slot Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {displayedRows.map((product) => (
                  <TableRow key={product.SlotID}>
                    <TableCell align="left">
                      {product.SlotPosition}
                    </TableCell>
                    <TableCell align="left">
                      <Chip
                      label={`${product.Status == 1 ? `Parked` : `Empty`}`}
                      color={product.Status == 1 ? "warning" : "success"}
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

export default ParkingSlot;
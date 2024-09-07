import { ReactElement, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';

import VisitorInsights from 'components/sections/dashboard/visitor-insights/VisitorInsights';
import TopProducts from 'components/sections/dashboard/top-products/TopProducts';
import ParkingSlot from './Parkingslot';
import SlotleftBox from './SlotLeft';

const Dashboard = (): ReactElement => {
  interface ParkingInput {
    ParkingID: number;
    SlotID: number;
    EntryTime: number;
    ExitTime: number;
  }
  const [parkingData, setParkingData] = useState<ParkingInput[]>([]);
  const [loading, setLoading] = useState(true);
  const [slotLeftNum, setSlotLeftNum] = useState();

  const handleSlotChange = (data: any) => {
    setSlotLeftNum(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://dummyjson.com/c/f40d-8a58-47d2-af29'); // api/ParkingTrack
        setParkingData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  return (
    <>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3.5} style={{padding:"20px"}}>
        <Box gridColumn={{ xs: 'span 12', lg: 'span 4' }}  order={{ xs: 0 }}>
          <ParkingSlot handleSlotChange={handleSlotChange}/>
        </Box>
        <Box gridColumn={{ xs: 'span 12', lg: 'span 6' }}  >
          <TopProducts 
            parkingData={parkingData}
            loading={loading}
          />
        </Box>
        <Box 
          gridColumn={{ xs: 'span 12', lg: 'span 2' }}  
        >
          <SlotleftBox slotLeftNum={slotLeftNum} />
        </Box>
        
        <Box gridColumn={{ xs: 'span 12', xl: 'span 12' }}>
          <VisitorInsights/>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;

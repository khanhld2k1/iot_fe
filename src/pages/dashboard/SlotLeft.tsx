import { useState, useEffect } from 'react';
import {
  Paper,
  Box,
} from '@mui/material';

const SlotleftBox = ({slotLeftNum}:{slotLeftNum:any}): React.ReactElement => { 
    const [slotLeft, setSlotLeft] = useState();
    useEffect(() => {
        setSlotLeft(slotLeftNum);
    }, [ slotLeftNum]);
  return (
    <Paper sx={{ p: { xs: 4, sm: 8 }, height: 1 }}>
        <>
          <Box
            style = {{
                padding: "auto",
                paddingTop: "65px",
                paddingBottom: "65px",
                display: "flex",
                color: "white",
                flexDirection: "column",
                textAlign: "center",
                justifyContent: "center",
                alignItems:"center",
            }}
          >
            <Box
                style={{
                    fontSize: "30px"
                }}
            >Slot Left</Box>
            <Box
                style={{
                    fontSize: "100px"
                }}
            >{slotLeft}</Box>
          </Box>
        </>
    </Paper>
  );
};

export default SlotleftBox;
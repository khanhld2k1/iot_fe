import { ReactElement } from 'react';
import { Box } from '@mui/material';

import VisitorInsights from 'components/sections/dashboard/visitor-insights/VisitorInsights';
import TopProducts from 'components/sections/dashboard/top-products/TopProducts';

const Dashboard = (): ReactElement => {
  return (
    <>
      <Box display="grid" gap={3.5}>
        <Box gridColumn={{ xs: 'span 12', lg: 'span 8' }} order={{ xs: 2, '2xl': 2 }}>
          <TopProducts />
        </Box>
        <Box gridColumn={{ xs: 'span 12', xl: 'span 8' }} order={{ xs: 5, xl: 4, '2xl': 5 }}>
          <VisitorInsights />
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;

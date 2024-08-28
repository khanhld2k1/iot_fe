import { ReactElement } from 'react';
import { Box } from '@mui/material';

import CustomerFulfillment from 'components/sections/dashboard/customer-fulfilment/CustomerFulfillment';
import VisitorInsights from 'components/sections/dashboard/visitor-insights/VisitorInsights';
import TodaysSales from 'components/sections/dashboard/todays-sales/TodaysSales';
import TopProducts from 'components/sections/dashboard/top-products/TopProducts';
import TrendingNow from 'components/sections/dashboard/trending-now/TrendingNow';
import Customers from 'components/sections/dashboard/customers/Customers';
import Earnings from 'components/sections/dashboard/earnings/Earnings';
import Level from 'components/sections/dashboard/level/Level';

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

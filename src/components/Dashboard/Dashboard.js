import React from 'react';
import DashboardStatsGrid from '../DashboardStatsGrid/DashboardStatsGrid';
import TransactionChart from '../TransactionChart/TransactionChart';
import BuyerProfilePieChart from '../BuyerProfilePieChart/BuyerProfilePieChart';
import RecentOrderData from '../RecentOrderData/RecentOrderData';
import PopularProducts from '../PopularProducts/PopularProducts';

const Dashboard = () => {
    return (
        <div className="flex flex-col gap-4">
            <DashboardStatsGrid />
            <div className="flex flex-row gap-4 w-full">
                <TransactionChart />
                <BuyerProfilePieChart />
            </div>
            <div className="flex flex-row gap-4 w-full">
                <RecentOrderData/>
                <PopularProducts />
            </div>
        </div>
    );
};

export default Dashboard;
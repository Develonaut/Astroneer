import React from "react";
import CreateAdUnit from "components/forms/CreateAdUnit/CreateAdUnit";
import DashboardItem from "components/dashboard/DashboardItem/DashboardItem";

const Home = () => {
  return (
    <React.Fragment>
      <DashboardItem title="Create A Push Notification" third>
        <CreateAdUnit />
      </DashboardItem>
    </React.Fragment>
  );
};

export default Home;

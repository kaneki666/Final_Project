import React from "react";
// react plugin for creating charts

import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
  Sector,
} from "recharts";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import ReportIcon from "@material-ui/icons/Assessment";

import DashboardIcon from "@material-ui/icons/RateReview";
import Cloud from "@material-ui/icons/Cloud";
import People from "@material-ui/icons/People";
import Money from "@material-ui/icons/AttachMoney";
import Seller from "@material-ui/icons/Person";
// core ../../components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Table from "../../components/Table/Table.js";
import Tasks from "../../components/Tasks/Tasks.js";
import CustomTabs from "../../components/CustomTabs/CustomTabs.js";
import Danger from "../../components/Typography/Danger.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";

import { bugs, website, server } from "../../variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "../../variables/charts.js";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const useStyles = makeStyles(styles);
const colors = scaleOrdinal(schemeCategory10).range();
const getPath = (x, y, width, height) => `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
  x + width / 2
}, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
  y + height
} ${x + width}, ${y + height}
          Z`;

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

TriangleBar.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <People />
              </CardIcon>
              <p className={classes.cardCategory}>Total Customer</p>
              <h3 className={classes.cardTitle}>5000</h3>
            </CardHeader>
            {/* <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Get more space
                </a>
              </div>
            </CardFooter> */}
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Total Product</p>
              <h3 className={classes.cardTitle}>3000</h3>
            </CardHeader>
            {/* <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
            </CardFooter> */}
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Seller />
              </CardIcon>
              <p className={classes.cardCategory}>Total Supplier</p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardHeader>
            {/* <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                Tracked from Github
              </div>
            </CardFooter> */}
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Money />
              </CardIcon>
              <p className={classes.cardCategory}>Total Sales</p>
              <h3 className={classes.cardTitle}>245</h3>
            </CardHeader>
            {/* <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter> */}
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem>
          <Card chart>
            <CardHeader color="success">
              <LineChart
                width={400}
                height={300}
                data={dailySalesChart}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#f24338"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#2a81ea" />
              </LineChart>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Daily Sales</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today sales.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem>
          <Card chart>
            <CardHeader color="danger">
              <PieChart width={400} height={300}>
                <Pie
                  data={data}
                  cx={120}
                  cy={200}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Completed Tasks</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem>
          <Card chart>
            <CardHeader color="warning">
              <BarChart
                width={400}
                height={300}
                data={dailySalesChart}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="uv" />
                <YAxis />
                <Bar
                  dataKey="pv"
                  fill="#8884d8"
                  shape={<TriangleBar />}
                  label={{ position: "top" }}
                >
                  {dailySalesChart.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                  ))}
                </Bar>
              </BarChart>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Best Sale Product</h4>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> 2020 April
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem>
          <CustomTabs
            title="Report"
            headerColor="primary"
            tabs={[
              {
                tabName: "Today's Overview",
                tabIcon: DashboardIcon,
                tabContent: (
                  <Card>
                    <CardHeader color="warning">
                      <p className={classes.cardCategoryWhite}>
                        Report on 15th April, 2020
                      </p>
                    </CardHeader>
                    <CardBody>
                      <Table
                        tableHeaderColor="info"
                        tableHead={[
                          "Total Sales",
                          "Total Purchase",
                          "Last Sales",
                        ]}
                        tableData={[["$10000", "$99866", "$45"]]}
                      />
                    </CardBody>
                  </Card>
                ),
              },
              {
                tabName: "Today's Sales Report",
                tabIcon: ReportIcon,
                tabContent: (
                  <Card>
                    <CardHeader color="warning">
                      <p className={classes.cardCategoryWhite}>
                        Report on 15th April, 2020
                      </p>
                    </CardHeader>
                    <CardBody>
                      <Table
                        tableHeaderColor="warning"
                        tableHead={[
                          "ID",
                          "Customer Name",
                          "Invoice No",
                          "Total Amount",
                          "Paid Amount",
                        ]}
                        tableData={[
                          ["1", "Dakota Rice", "45", "$36,738", "$36,738"],
                          ["2", "Minerva Hooper", "466", "$23,789", "$23,789"],
                          [
                            "3",
                            "Sage Rodriguez",
                            "34546",
                            "$56,142",
                            "$56,142",
                          ],
                          [
                            "4",
                            "Philip Chaney",
                            "890890",
                            "$38,735",
                            "$38,735",
                          ],
                        ]}
                      />
                    </CardBody>
                  </Card>
                ),
              },
            ]}
          />
        </GridItem>
      </GridContainer>

      {/* <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
              <p className={classes.cardCategoryWhite}>
                New employees on 15th September, 2016
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Name", "Salary", "Country"]}
                tableData={[
                  ["1", "Dakota Rice", "$36,738", "Niger"],
                  ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                  ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                  ["4", "Philip Chaney", "$38,735", "Korea, South"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem> */}
    </div>
  );
}

import React from "react";
import Posts from "./Posts";
import Users from "./Users";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        <li>
          <Link to="/dashboard/posts">Posts</Link>
        </li>
        <li>
          <Link to="/dashboard/users">Users</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/dashboard/posts">
          <Posts />
        </Route>
        <Route path="/dashboard/users">
          <Users />
        </Route>
      </Switch>

      {/* TODO: you will need to render the Posts and Users components here hint: Switch :) */}
    </div>
  );
};

export default Dashboard;

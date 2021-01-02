import React from "react";
import "sonwan-ui/build/style.min.css";
import SonWan from "sonwan-ui";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
const { Input, Card, CardItem, ListItem } = SonWan;

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
     <Card>
  <div className="opacity-50 my-1 text-black dark:text-white">
    Recent Contacts
  </div>
  <CardItem
    title="Samantha"
    className="py-4"
    subtitle="Bank - 0987 3422 8756"
    avatar={
      <img
        src="https://randomuser.me/api/portraits/women/17.jpg"
        className="rounded-full"
      />
    }
  />
  <CardItem
    title="Karen William"
    className="py-4"
    subtitle="Bank - 0987 3422 8756"
    avatar={
      <img
        src="https://randomuser.me/api/portraits/women/2.jpg"
        className="rounded-full"
      />
    }
  />
  <CardItem
    title="Angela Smith"
    className="py-4"
    subtitle="Bank - 0987 3422 8756"
    avatar={
      <img
        src="https://randomuser.me/api/portraits/women/8.jpg"
        className="rounded-full"
      />
    }
  />
  </Card>
  <div className="dark">
  <Card>
    <div className="opacity-50 my-1 text-black dark:text-white">
      Recent Contacts
    </div>
    <CardItem
      title="Samantha"
      className="py-4"
      subtitle="Bank - 0987 3422 8756"
      avatar={
        <img
          src="https://randomuser.me/api/portraits/women/17.jpg"
          className="rounded-full"
        />
      }
    />
    <CardItem
      title="Karen William"
      className="py-4"
      subtitle="Bank - 0987 3422 8756"
      avatar={
        <img
          src="https://randomuser.me/api/portraits/women/2.jpg"
          className="rounded-full"
        />
      }
    />
    <CardItem
      title="Angela Smith"
      className="py-4"
      subtitle="Bank - 0987 3422 8756"
      avatar={
        <img
          src="https://randomuser.me/api/portraits/women/8.jpg"
          className="rounded-full"
        />
      }
    />
  </Card>  
</div> 
    </>
  )
}

function About() {
  return (
    <div>
    <Card>
  <CardItem
    title="Bambang Eko"
    subtitle="0821 - 7654 - 3210"
    avatar={
      <img
        src="https://randomuser.me/api/portraits/men/19.jpg"
        className="rounded"
      />
    }
  />
</Card>
<div className="dark">
  <Card>
    <CardItem
      title="Putri Saputri"
      subtitle="0821 - 7654 - 3210"
      avatar={
        <img
          src="https://randomuser.me/api/portraits/women/1.jpg"
          className="rounded"
        />
      }
    />
  </Card>
</div>      
</div>
  );
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}
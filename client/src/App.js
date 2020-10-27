import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  const [savedBooks, setSavedBooks] = useState([]);
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/books"]}>
            <Books setSavedBooks={setSavedBooks}/>
          </Route>
          <Route exact path="/saved">
            <Saved savedBooks={savedBooks} setSavedBooks={setSavedBooks}/>
          </Route>
          {/*
          <Route exact path="/saved/:id">
            <SavedSingle savedBooks={savedBooks}/>
          </Route>
          */}
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
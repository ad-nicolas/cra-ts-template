import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Home from "pages/Home/Home";
import NotFound from "pages/NotFound/NotFound";

const MainWrapper = styled.main`
    padding: 24px;
`;

function Main() {
  return (
    <MainWrapper>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/**" component={NotFound} />
      </Switch>
    </MainWrapper>
  );
}

export default Main;

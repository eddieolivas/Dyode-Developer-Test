import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import IndexPage from './pages/index';

const App = () => {
  const routes = (
    <Switch>
      <Route path="/" component={IndexPage} />
    </Switch>
  )

  return (
    <Layout>
      {routes}
    </Layout>
  );
}

export default withRouter(App);
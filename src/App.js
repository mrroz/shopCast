import {Component} from 'react';
import Layout from './components/Layout/Layout'
import Shopping from './containers/Shopping/Shopping';


class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>

        <Layout>
        

          <Shopping/>
      
    
        </Layout>


      </div>
     );
  }
}
 
export default App;
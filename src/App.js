import React from 'react';

import Board from './containers/Board/Board';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <div>
       <Layout>
           <Board/>
       </Layout>
    </div>
  );
}

export default App;

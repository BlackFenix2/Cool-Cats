import React from 'react';

import { Layout, Affix } from 'antd';
import { Header } from './Header';
import { Body } from './Body';
import { Footer } from './Footer';
// import antd CSS
import 'antd/dist/antd.css';

const App = ({ children }) => <AppLayout>{children}</AppLayout>;

const AppLayout = ({ children }) => (
  <Layout className="layout">
    <Affix>
      <Layout.Header>
        <Header />
      </Layout.Header>
    </Affix>
    <Layout.Content>
      <Body>{children}</Body>
    </Layout.Content>
    <Layout.Footer>
      <Footer />
    </Layout.Footer>
  </Layout>
);

export default App;

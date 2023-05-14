import { ConfigProvider, Layout } from 'antd';
import { RouterProvider } from 'react-router-dom';
import './app.scss';
import Footer from './components/footer/footer';
import { router } from './router';

export default function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#d3adf7',
          fontSize: 16,
          fontSizeHeading1: 30,
          fontSizeHeading2: 22,
          fontSizeHeading3: 20,
          fontSizeHeading4: 16
        }
      }}>
      <Layout className="full-page">
        <RouterProvider router={router} />
        <Footer />
      </Layout>
    </ConfigProvider>
  );
}

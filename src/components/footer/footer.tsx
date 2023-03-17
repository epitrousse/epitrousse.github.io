import { BranchesOutlined } from '@ant-design/icons';
import { Layout, Typography } from 'antd';
import { fr as commonFr } from '../../common/i18n/fr';
import './footer.scss';

export default function Footer() {
  return (
    <Layout.Footer className="footer">
      <BranchesOutlined />
      <Typography.Text strong>{commonFr.appName}</Typography.Text>
    </Layout.Footer>
  );
}

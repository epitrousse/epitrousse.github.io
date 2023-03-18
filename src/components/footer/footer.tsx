import { BranchesOutlined, CopyrightOutlined } from '@ant-design/icons';
import { Layout, Typography } from 'antd';
import { fr as commonFr } from '../../common/i18n/fr';
import './footer.scss';

export default function Footer() {
  return (
    <Layout.Footer className="footer">
      <div className="flex-center">
        <BranchesOutlined className="logo" />
        <Typography.Text strong>{commonFr.appName}</Typography.Text>
      </div>
      <div className="flex-center">
        <CopyrightOutlined className="copyright-logo" />
        <Typography.Text className="copyright-text">
          2023 Martine Deschênes. All rights reserved
        </Typography.Text>
      </div>
    </Layout.Footer>
  );
}

import { Typography } from 'antd';
import { fr } from './i18n/fr';

export default function About() {
  return (
    <div className="max-viewport-width margin-page-view">
      <div className="white-background content-container">
        <Typography.Title level={1}>{fr.title}</Typography.Title>
      </div>
    </div>
  );
}

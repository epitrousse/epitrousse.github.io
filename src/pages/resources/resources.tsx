import { Typography } from 'antd';
import { fr } from './i18n/fr';

export default function Resources() {
  return (
    <div className="max-viewport-width margin-page-view">
      <div className="white-background content-container">
        <Typography.Title level={2}>{fr.title}</Typography.Title>
        <ul>
          {fr.bibliography.map((b) => (
            <li key={b} dangerouslySetInnerHTML={{ __html: b }}></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

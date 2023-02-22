import { Typography } from 'antd';
import { fr } from './i18n/fr';

export default function Resources() {
  return (
    <div className="max-viewport-width margin-page">
      <div className="white-background content-container">
        <Typography.Title level={2}>{fr.title}</Typography.Title>
        {fr.bibliography.map((b) => (
          <p key={b} dangerouslySetInnerHTML={{ __html: b }}></p>
        ))}
      </div>
    </div>
  );
}

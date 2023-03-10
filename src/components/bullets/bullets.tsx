import { BulletWithSubBullets } from '../../models/bulletWithSubBullets';
import './bullets.scss';

interface BulletsProps {
  bullets: (string | BulletWithSubBullets)[];
}

export default function Bullets({ bullets }: BulletsProps) {
  const displayBullets = (bullets: (string | BulletWithSubBullets)[]) => {
    return bullets.map((bullet) => {
      if (typeof bullet === 'string') {
        return <li key={bullet}>{bullet}</li>;
      } else {
        return (
          <>
            <li>{bullet.text}</li>
            <ul>{displayBullets(bullet.bullets)}</ul>
          </>
        );
      }
    });
  };

  return (
    <div className="bullets">
      <ul>{displayBullets(bullets)}</ul>
    </div>
  );
}

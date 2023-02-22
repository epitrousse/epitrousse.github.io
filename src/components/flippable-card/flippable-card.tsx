import { Typography } from 'antd';
import { ReactNode, useState } from 'react';
import './flippable-card.scss';

interface FlippableCardProps {
  frontContent: ReactNode;
  backContent: ReactNode;
}

export default function FlippableCard({
  frontContent,
  backContent
}: FlippableCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card" onClick={flipCard}>
      <div className={`card-body ${isFlipped && 'is-flipped'}`}>
        <div className="card-front">
          <Typography.Text className="card-title">
            {frontContent}
          </Typography.Text>
        </div>
        <div className="card-back">{backContent}</div>
      </div>
    </div>
  );
}

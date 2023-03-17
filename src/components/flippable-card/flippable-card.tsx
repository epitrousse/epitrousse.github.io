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
    <div className="flippable-card">
      <div className="card" onClick={flipCard}>
        <div className={`card-body ${isFlipped && 'is-flipped'}`}>
          <div className="card-front">
            <p className="card-title">{frontContent}</p>
          </div>
          <div className="card-back">{backContent}</div>
        </div>
      </div>
    </div>
  );
}

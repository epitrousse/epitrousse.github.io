import { ArrowRightOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../models/enums/routes.enum';
import './card-wrapper.scss';

interface CardWrapperProps {
  title: string;
  img: string;
  routeToNavigate: AppRoutes;
}

export default function CardWrapper(props: CardWrapperProps) {
  const navigate = useNavigate();

  return (
    <Card
      className="card-wrapper"
      hoverable
      cover={<img src={props.img} />}
      onClick={() => navigate(props.routeToNavigate)}>
      <div className="card-bottom">
        <span className="title">{props.title}</span>
        <ArrowRightOutlined />
      </div>
    </Card>
  );
}

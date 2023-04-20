import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import memoryImg from '../../../../../assets/img/impacts/adults/memory.png';
import { fr as commonFr } from '../../../../../common/i18n/fr';
import Bullets from '../../../../../components/bullets/bullets';
import TitleSectionKit from '../../../../../components/title-section-kit/title-section-kit';
import { AppRoutes } from '../../../../../models/enums/routes.enum';
import { fr } from './i18n/fr';

export default function Memory() {
  return (
    <div className="max-viewport-width margin-page-view">
      <TitleSectionKit imgTopic={memoryImg} title={fr.title}></TitleSectionKit>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>
          <Link to={AppRoutes.Home}>{commonFr.home}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={AppRoutes.Kit}>{commonFr.kit}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={AppRoutes.Impacts}>{commonFr.impacts}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={AppRoutes.AdultsImpacts}>{commonFr.adult}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{fr.title}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="white-background content-container">
        <p>{fr.p1}</p>
        <p>{fr.memoryIssues.question}</p>
        <Bullets bullets={fr.memoryIssues.bullets} />
        <p>{fr.memoryStrategies.title}</p>
        <Bullets bullets={fr.memoryStrategies.bullets} />
        <p>{fr.brainDamage.question}</p>
        <p>
          <span>{fr.brainDamage.answerBefore}</span>
          <Link to={AppRoutes.BeWitness}>{fr.brainDamage.link}</Link>
          <span>{fr.brainDamage.answerAfter}</span>
        </p>
      </div>
    </div>
  );
}

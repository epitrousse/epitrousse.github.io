import { Breadcrumb, Typography } from 'antd';
import { Link } from 'react-router-dom';
import topic2 from '../../assets/img/topic-2.jpg';
import Bullets from '../../components/bullets/bullets';
import CrysisCategoriesSection from '../../components/crysis-categories-section/crysis-categories-section';
import TitleSectionKit from '../../components/title-section-kit/title-section-kit';
import { AppRoutes } from '../../models/enums/routes.enum';
import { fr as commonFr } from './../../common/i18n/fr';
import { fr } from './i18n/fr';

export default function BeWitness() {
  return (
    <div className="max-viewport-width margin-page-view">
      <TitleSectionKit imgTopic={topic2} title={fr.title}></TitleSectionKit>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>
          <Link to={AppRoutes.Home}>{commonFr.home}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={AppRoutes.Kit}>{commonFr.kit}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{fr.title}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="white-background content-container">
        <p>{fr.p1}</p>
        <p>{fr.p2}</p>
        <p>{fr.p3}</p>
        <CrysisCategoriesSection
          focalTitle={fr.ss1.title}
          focalBullets={fr.ss1.bullets}
          myoclonicBullets={fr.ss2.sss4.bullets}
          tonicoClonicBullets={fr.ss2.sss2.bullets}
          absenceBullets={fr.ss2.sss1.bullets}
          atonicBullets={fr.ss2.sss3.bullets}
          generalizedCrysisTitle={fr.ss2.title}
          generalizedBloc={
            <>
              <Typography.Title level={3}>{fr.ss3.title}</Typography.Title>
              <Bullets bullets={fr.ss3.bullets} />
            </>
          }
        />
      </div>
    </div>
  );
}

import { Col, Row, Typography } from 'antd';
import { ReactNode, useState } from 'react';
import imgAbsence from '../../assets/img/about-epilepsy/absence.png';
import imgAtonic from '../../assets/img/about-epilepsy/atonic-crysis.png';
import imgFocalCrysis from '../../assets/img/about-epilepsy/focal-crysis.png';
import imgGeneralizedCrysis from '../../assets/img/about-epilepsy/generalized-crysis.png';
import imgMyoclonic from '../../assets/img/about-epilepsy/myoclonic-crysis.png';
import imgTonicoClonic from '../../assets/img/about-epilepsy/tonico-clonic-crysis.png';
import { BulletWithSubBullets } from '../../models/bulletWithSubBullets';
import { CrysisType } from '../../models/enums/crysis-type.enum';
import Bullets from '../bullets/bullets';
import GeneralizedCrysisTypeModal from '../generalized-crysis-type-modal/generalized-crysis-type-modal';
import './crysis-categories-section.scss';
import { fr } from './i18n/fr';

interface CrysisCatgegoriesSectionProps {
  focalBullets: (string | BulletWithSubBullets)[];
  focalTitle: string;
  myoclonicBullets: (string | BulletWithSubBullets)[];
  tonicoClonicBullets: (string | BulletWithSubBullets)[];
  absenceBullets: (string | BulletWithSubBullets)[];
  atonicBullets: (string | BulletWithSubBullets)[];
  generalizedCrysisTitle: string;
  generalizedCrysisText?: string;
  generalizedBloc?: ReactNode;
}

export default function CrysisCategoriesSection(
  props: CrysisCatgegoriesSectionProps
) {
  const [crysisToDisplay, setCrysisToDisplay] = useState(null);

  const displayFocalCrysis = () => (
    <>
      <Typography.Title level={3}>{props.focalTitle}</Typography.Title>
      <Bullets bullets={props.focalBullets} />
    </>
  );

  const displayGeneralizedCrysis = () => (
    <>
      <Typography.Title level={3}>
        {props.generalizedCrysisTitle}
      </Typography.Title>
      <p>{props.generalizedCrysisText}</p>
      <Row style={{ width: 'fit-content' }} gutter={[16, 16]}>
        <Col className="flex-center" xs={24} sm={12} lg={6}>
          <GeneralizedCrysisTypeModal
            title={fr.generalizedCrysisCategories.absence.title}
            bullets={props.absenceBullets}
            type={fr.generalizedCrysisCategories.absence.type}
            img={imgAbsence}
          />
        </Col>
        <Col className="flex-center" xs={24} sm={12} lg={6}>
          <GeneralizedCrysisTypeModal
            title={fr.generalizedCrysisCategories.tonicoClonic.title}
            bullets={props.tonicoClonicBullets}
            type={fr.generalizedCrysisCategories.tonicoClonic.type}
            img={imgTonicoClonic}
          />
        </Col>
        <Col className="flex-center" xs={24} sm={12} lg={6}>
          <GeneralizedCrysisTypeModal
            title={fr.generalizedCrysisCategories.atonic.title}
            bullets={props.atonicBullets}
            type={fr.generalizedCrysisCategories.atonic.type}
            img={imgAtonic}
          />
        </Col>
        <Col className="flex-center" xs={24} sm={12} lg={6}>
          <GeneralizedCrysisTypeModal
            title={fr.generalizedCrysisCategories.myoclonic.title}
            bullets={props.myoclonicBullets}
            type={fr.generalizedCrysisCategories.myoclonic.type}
            img={imgMyoclonic}
          />
        </Col>
      </Row>
      {props.generalizedBloc}
    </>
  );

  const displayCrysisCategory = (imgSource, crysis) => (
    <div
      className={`box ${crysis === crysisToDisplay && 'selected'}`}
      onClick={() => setCrysisToDisplay(crysis)}>
      <img className="crysis-img" src={imgSource} />
      <Typography.Text strong>{fr.type[crysis]}</Typography.Text>
    </div>
  );

  return (
    <div className="crysis-categories-section">
      <div className="crysisCategories">
        {displayCrysisCategory(imgFocalCrysis, CrysisType.Focal)}
        {displayCrysisCategory(imgGeneralizedCrysis, CrysisType.Generalized)}
      </div>
      <>{CrysisType.Focal === crysisToDisplay && displayFocalCrysis()}</>
      <>
        {CrysisType.Generalized === crysisToDisplay &&
          displayGeneralizedCrysis()}
      </>
    </div>
  );
}

import { Collapse, Typography } from 'antd';
import Bullets from '../bullets/bullets';
import { fr } from './i18n/fr';

export default function ChildrenImpacts() {
  return (
    <Collapse accordion ghost>
      <Collapse.Panel header={fr.s1.title} key="1">
        <p>{fr.s1.p1}</p>
        <p>{fr.s1.tellToSchool.p1}</p>
        <Bullets bullets={fr.s1.tellToSchool.bullets} />
        <p>{fr.s1.schoolServices.p1}</p>
        <Bullets bullets={fr.s1.schoolServices.bullets} />
        <p>{fr.s1.p2}</p>
      </Collapse.Panel>

      <Collapse.Panel header={fr.s2.title} key="2">
        <p>{fr.s2.p1}</p>
        <p>{fr.s2.promoteWellBeing.question}</p>
        <Bullets bullets={fr.s2.promoteWellBeing.bullets} />
        <p>{fr.s2.p2}</p>
        <p>{fr.s2.p3}</p>
        <Typography.Title level={3}>{fr.s2.tips.title}</Typography.Title>
        <Bullets bullets={fr.s2.tips.bullets} />
      </Collapse.Panel>

      <Collapse.Panel header={fr.s3.title} key="3">
        <p>{fr.s3.p1}</p>
      </Collapse.Panel>
    </Collapse>
  );
}

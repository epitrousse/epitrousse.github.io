import { Collapse, Typography } from 'antd';
import Bullets from '../bullets/bullets';
import { fr } from './i18n/fr';

export default function AdultsImpacts() {
  return (
    <Collapse accordion ghost>
      <Collapse.Panel header={fr.s1.title} key="1">
        <p>{fr.s1.p1}</p>
        <p>{fr.s1.p2}</p>
      </Collapse.Panel>

      <Collapse.Panel header={fr.s2.title} key="2">
        <p>{fr.s2.p1}</p>
        <p>{fr.s2.p2}</p>
        <p>{fr.s2.notRecommendedJob.title}</p>
        <Bullets bullets={fr.s2.notRecommendedJob.bullets} />
        <p>{fr.s2.generalTips.title}</p>
        <Bullets bullets={fr.s2.generalTips.bullets} />
        <p>{fr.s2.p3}</p>
        <p>{fr.s2.p4}</p>
        <p>{fr.s2.p5}</p>
        <p>{fr.s2.p6}</p>
        <p>{fr.s2.p7}</p>
        <p>{fr.s2.p8}</p>
        <Typography.Title level={3}>{fr.s2.ss1.title}</Typography.Title>
        <p>{fr.s2.ss1.p1}</p>
        <Bullets bullets={fr.s2.ss1.bullets} />
      </Collapse.Panel>

      <Collapse.Panel header={fr.s3.title} key="3">
        <p>{fr.s3.p1}</p>
        <p>{fr.s3.p2}</p>
        <p>{fr.s3.p3}</p>
        <p>{fr.s3.p4}</p>
        <Typography.Title level={3}>{fr.s3.ss1.title}</Typography.Title>
        <p>{fr.s3.ss1.classes.class5.p1}</p>
        <p>{fr.s3.ss1.classes.class5.p2}</p>
        <p>{fr.s3.ss1.classes.class5.exceptions.text}</p>
        <Bullets bullets={fr.s3.ss1.classes.class5.exceptions.bullets} />
        <p>{fr.s3.ss1.classes.class5.p3}</p>
        <p>{fr.s3.ss1.classes.class5.p4}</p>
        <p>{fr.s3.ss1.classes.class1To4.title}</p>
        <Bullets bullets={fr.s3.ss1.classes.class1To4.bullets} />
        <p>{fr.s3.ss1.classes.class1To4.exceptions.title}</p>
        <Bullets bullets={fr.s3.ss1.classes.class1To4.exceptions.bullets} />
      </Collapse.Panel>

      <Collapse.Panel header={fr.s4.title} key="4">
        <p>{fr.s4.p1}</p>
        <p>{fr.s4.p2}</p>
        <p>{fr.s4.p3}</p>
        <p>{fr.s4.p4}</p>
        <p>{fr.s4.tips.title}</p>
        <Bullets bullets={fr.s4.tips.bullets} />
      </Collapse.Panel>

      <Collapse.Panel header={fr.s5.title} key="5">
        <p>{fr.s5.p1}</p>
        <p>{fr.s5.p2}</p>
        <Bullets bullets={fr.s5.bullets} />
      </Collapse.Panel>

      <Collapse.Panel header={fr.s6.title} key="6">
        <p>{fr.s6.p1}</p>
        <p>{fr.s6.memoryIssues.question}</p>
        <Bullets bullets={fr.s6.memoryIssues.bullets} />
        <p>{fr.s6.memoryStrategies.title}</p>
        <Bullets bullets={fr.s6.memoryStrategies.bullets} />
        <p>{fr.s6.brainDamage.question}</p>
        <p>{fr.s6.brainDamage.answer}</p>
      </Collapse.Panel>

      <Collapse.Panel header={fr.s7.title} key="7">
        <p>{fr.s7.p1}</p>
        <p>{fr.s7.p2}</p>
        <p>{fr.s7.bestSport.p1}</p>
        <Bullets bullets={fr.s7.bestSport.bullets} />
        <p>{fr.s7.bestSport.p2}</p>
        <p>{fr.s7.notRecommendedSports.p1}</p>
        <Bullets bullets={fr.s7.notRecommendedSports.bullets} />
        <p>{fr.s7.notRecommendedSports.p2}</p>
      </Collapse.Panel>

      <Collapse.Panel header={fr.s8.title} key="8">
        <p>{fr.s8.p1}</p>
      </Collapse.Panel>

      <Collapse.Panel header={fr.s9.title} key="9">
        <p>{fr.s9.p1}</p>
      </Collapse.Panel>

      <Collapse.Panel header={fr.s10.title} key="10">
        <p>{fr.s10.p1}</p>
        <p>{fr.s10.p2}</p>
      </Collapse.Panel>

      <Collapse.Panel header={fr.s11.title} key="11">
        <p>{fr.s11.p1}</p>
        <p>{fr.s11.p2}</p>
        <p>{fr.s11.p3}</p>
        <Typography.Title level={3}>{fr.s11.tips.title}</Typography.Title>
        <Bullets bullets={fr.s11.tips.bullets} />
      </Collapse.Panel>
    </Collapse>
  );
}

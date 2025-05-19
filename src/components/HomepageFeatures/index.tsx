import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Protocolo Ligero',
    icon: '🚀',
    description: (
      <>
        MQTT es un protocolo de mensajería ligero diseñado para dispositivos con recursos limitados y redes de bajo ancho de banda.
      </>
    ),
  },
  {
    title: 'Patrón Pub/Sub',
    icon: '🔄',
    description: (
      <>
        Basado en el modelo de publicación-suscripción, permitiendo una comunicación eficiente y desacoplada entre dispositivos IoT.
      </>
    ),
  },
  {
    title: 'Ideal para IoT',
    icon: '🌐',
    description: (
      <>
        Optimizado para entornos con conectividad limitada, alta latencia y requisitos específicos de dispositivos IoT.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>{icon}</div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

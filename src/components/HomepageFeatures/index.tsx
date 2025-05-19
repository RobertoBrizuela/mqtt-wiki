import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Protocolo Ligero',
    description: (
      <>
        MQTT es un protocolo de mensajería ligero diseñado para dispositivos con recursos limitados y redes de bajo ancho de banda.
      </>
    ),
  },
  {
    title: 'Patrón Pub/Sub',
    description: (
      <>
        Basado en el modelo de publicación-suscripción, permitiendo una comunicación eficiente y desacoplada entre dispositivos IoT.
      </>
    ),
  },
  {
    title: 'Ideal para IoT',
    description: (
      <>
        Optimizado para entornos con conectividad limitada, alta latencia y requisitos específicos de dispositivos IoT.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
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

import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Utilización fácil',
    Svg: require('@site/static/img/torre-de-pc.svg').default,
    description: (
      <>
        Gracias a su diseño fundamentalmente sencillo, Ghost permite instalar y usar tu sitio web de manera ágil y veloz.
      </>
    ),
  },
  {
    title: 'Dedícate a lo crucial',
    Svg: require('@site/static/img/desarrollo-web.svg').default,
    description: (
      <>
        Para que puedas concentrarte en la creación de tu documentación, Ghost automatiza las tareas comunes. Simplemente coloca tus documentos en la carpeta docs.
      </>
    ),
  },
  {
    title: 'Basado en tecnología web actual',
    Svg: require('@site/static/img/pagina-web.svg').default,
    description: (
      <>
        Puedes extender o personalizar el diseño de tu sitio web .Ghost permite ampliarse manteniendo la misma cabecera y pie de página.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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

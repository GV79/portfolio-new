import { BADGE_ICONS } from '../../constants';
import Badge from './Badge';
import styles from './badges.module.css';

function Badges({ tags }) {
  return (
    <div className={styles['badge-wrapper']}>
      {tags.map((technology, index) => {
        const graphic = BADGE_ICONS[technology];

        if (graphic == null) return null;

        return graphic.devicon ? (
          <Badge icon={graphic.link} text={technology} key={index} />
        ) : (
          <Badge image={graphic.link} text={technology} key={index} />
        );
      })}
    </div>
  );
}

export default React.memo(Badges);
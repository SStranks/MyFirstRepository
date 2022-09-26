import {
  AsideRoadmap,
  AsideTags,
  Header,
  SuggestionsList,
  UtilityBarSuggestions,
} from '../components';

import styles from './_SuggestionBoard.module.scss';

function SuggestionBoard() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles['grid__sub-grid-1']}>
          <header>
            <Header />
          </header>
          <aside>
            <AsideTags />
          </aside>
          <aside>
            <AsideRoadmap />
          </aside>
        </div>
        <div className={styles['grid__sub-grid-2']}>
          <main>
            <UtilityBarSuggestions />
            <SuggestionsList />
          </main>
        </div>
      </div>
    </div>
  );
}

export default SuggestionBoard;

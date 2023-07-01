/* eslint-disable react/prop-types */
import {
  AsideRoadmap,
  AsideTags,
  Header,
  SuggestionsList,
  UtilityBarSuggestions,
} from '../components';

import styles from './_SuggestionBoard.module.scss';

function SuggestionBoard(props) {
  const { invoices, isLoading } = props;

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles['grid__sub-grid-1']}>
          <header>
            <Header />
          </header>
          <aside className={styles.grid__aside}>
            <AsideTags />
          </aside>
          <aside className={styles.grid__aside}>
            <AsideRoadmap invoices={invoices} />
          </aside>
        </div>
        <div className={styles['grid__sub-grid-2']}>
          <main>
            <UtilityBarSuggestions invoices={invoices} />
            <SuggestionsList invoices={invoices} isLoading={isLoading} />
          </main>
        </div>
      </div>
    </div>
  );
}

export default SuggestionBoard;

import {
  AsideRoadmap,
  AsideTags,
  Header,
  SuggestionsList,
  UtilityBar,
} from '../components';

import styles from './_SuggestionBoard.module.scss';

function SuggestionBoard() {
  return (
    <div className={styles}>
      <header>
        <Header />
      </header>
      <aside>
        <AsideTags />
        <AsideRoadmap />
      </aside>
      <main>
        <UtilityBar />
        <SuggestionsList />
      </main>
    </div>
  );
}

export default SuggestionBoard;

import {
  AsideRoadmap,
  AsideTags,
  SuggestionsList,
  UtilityBar,
} from '../components';

import styles from './_SuggestionBoard.module.scss';

function SuggestionBoard() {
  return (
    <>
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
    </>
  );
}

export default SuggestionBoard;

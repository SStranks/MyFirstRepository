import {
  UtilityBar,
  AsideTags,
  AsideRoadmap,
  SuggestionsList,
} from '../components';

// import styles from './_SuggestionBoard.module.scss';

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

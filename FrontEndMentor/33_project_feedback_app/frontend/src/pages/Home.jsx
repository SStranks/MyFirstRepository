/* eslint-disable react/prop-types */
import SuggestionBoard from '../layouts/SuggestionBoard';

function Home(props) {
  const { requests, isLoading } = props;
  return <SuggestionBoard requests={requests} isLoading={isLoading} />;
}

export default Home;

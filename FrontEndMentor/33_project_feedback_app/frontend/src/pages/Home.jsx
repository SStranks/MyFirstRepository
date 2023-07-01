/* eslint-disable react/prop-types */
import SuggestionBoard from '../layouts/SuggestionBoard';

function Home(props) {
  const { invoices, isLoading } = props;
  return <SuggestionBoard invoices={invoices} isLoading={isLoading} />;
}

export default Home;

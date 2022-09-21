import { QuoterProvider } from "./context/QuoterProvider";
import SafeApp from "./components/SafeApp";

const App = () => (
  <QuoterProvider>
    <SafeApp />
  </QuoterProvider>
);

export default App;

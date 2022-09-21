import { useContext } from "react";
import QuoterContext from "../context/QuoterProvider";

const useQuoter = () => useContext(QuoterContext);

export default useQuoter;

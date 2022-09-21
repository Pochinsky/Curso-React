import useQuoter from "../hooks/useQuoter";

const Error = () => {
  const { error } = useQuoter();
  return (
    <div className="border border-red-400 bg-red-100 text-red-700 text-center py-3">
      <p>{error}</p>
    </div>
  );
};

export default Error;

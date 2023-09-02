const ErrorMessage = ({ error }: { error?: string }) => {
  return <p className="text-red-700 text-xs h-2">{error ?? ""}</p>;
};

export default ErrorMessage;

const ErrorMessage = ({ error }: { error?: string }) => {
  return <p className="text-red-500 text-xm h-4">{error ?? ""}</p>;
};

export default ErrorMessage;

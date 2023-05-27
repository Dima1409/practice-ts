interface ErrorProps {
  error: boolean;
}

const ErrorPage = ({ error }: ErrorProps) => {
  return (
    <>
      <div>network error</div>
      <span>{error}</span>
    </>
  );
};
export default ErrorPage;

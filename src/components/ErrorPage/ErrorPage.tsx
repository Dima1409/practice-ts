interface ErrorProps {
  error: boolean;
}

const ErrorPage = ({ error }: ErrorProps) => {
  return (
    <>
      <div style={{color: 'red'}}>network error</div>
      <span>{error}</span>
    </>
  );
};
export default ErrorPage;

import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1> Page not Found</h1>

      <p>
        Go to <Link to='/'>Homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;

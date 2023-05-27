import { getTrendingMovies } from '../services/api';
import { useState, useEffect } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import Spinner from 'components/Loader/Loader';
// import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const trendingMovies = await getTrendingMovies();
        setTrendingMovies(trendingMovies);
        setLoading(false);
      } catch (error) {
        // toast.error('Sorry, something went wrong.');
      }
    };
    getData();
  }, []);

  return (
    <div>
      {loading && <Spinner />}
      {/* {error && <ToastContainer />} */}
      <MoviesList trendingMovies={trendingMovies} />
    </div>
  );
};
export default Home;

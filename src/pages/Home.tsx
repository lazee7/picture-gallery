import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useAuth from '../contexts/useAuth';
import { Navigate } from 'react-router-dom';
import ImageList from '../components/ImageList';
import Skeleton from '../components/Skeleton';

const Home = () => {
  const [data, setData] = useState<Image[] | null>(null);
  const [query, setQuery] = useState<string>('');
  const { isLoading, setIsLoading, user } = useAuth() as AuthType;
  useEffect(() => {
    setIsLoading(true);
    fetchImages();
  }, []);

  // get movies from pixabay
  const fetchImages = async () => {
    const url = `https://pixabay.com/api/?key=${
      import.meta.env.VITE_API_KEY
    }&q=people+children&image_type=photo&per_page=24`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data.hits);
    } catch (error) {
      toast.error('error fetching images');
      console.log(error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  // redirect unauthenticated users to login page
  if (!user) return <Navigate to={'login'} />;

  // display loading skeleton while images are fetched
  if (isLoading) return <Skeleton />;

  const filteredImages = data
    ? data.filter((image) => image.tags.includes(query.toLocaleLowerCase()))
    : null;

  return (
    <>
      <div className='text-center py-7 px-10'>
        <input
          type='search'
          name='query'
          id='query'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='w-2/3 sl:w-1/2 border py-2 focus:outline-none px-6 rounded-xl bg-form shadow-primary shadow-sm text-white'
          placeholder='search for images by tags'
        />
      </div>
      <ImageList images={filteredImages} setImages={setData} />
    </>
  );
};

export default Home;

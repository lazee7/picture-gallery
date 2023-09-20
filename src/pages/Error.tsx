import Header from '../components/Header';

const Error = () => {
  return (
    <div>
      <Header />
      <div className=' flex flex-col justify-center items-center text-white py-40'>
        <h2 className='text-secondary text-4xl lg:text-9xl font-bold '>404</h2>
        <p className='text-base md:text-lg'>
          Oops! looks like you've made a wrong turn
        </p>
      </div>
    </div>
  );
};

export default Error;

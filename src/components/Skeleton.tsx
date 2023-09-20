const Skeleton = () => {
  const items = Array.from({ length: 18 }, (_, index) => index);
  const tags = Array.from({ length: 3 }, (_, index) => index);

  return (
    <div className='grid md:grid-cols-4 lg:grid-cols-5 gap-2 gap-y-7 animate-pulse px-8 place-items-center lg:gap-x-7 md:gap-x-5 py-7'>
      {items.map((item) => (
        <div
          key={item}
          className='h-60 md:w-44 bg-gray-400 p-3 rounded-lg flex flex-col gap-5 w-full'
        >
          <p className='bg-gray-300 h-52 w-full animate-pulse rounded-md'></p>
          <ul className='flex gap-3'>
            {tags.map((tag) => (
              <li
                key={tag}
                className='h-5 rounded-lg w-16 bg-gray-300 animate-pulse'
              ></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;

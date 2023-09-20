const Footer = () => {
  return (
    <footer className='relative bottom-0 text-white border-t border-btn py-7 flex justify-center items-center gap-2 sl:gap-5 flex-col sl:flex-row'>
      <p>made with ❤ by Lazee.</p>
      <p>
        Images from{' '}
        <a
          href='https://pixabay.com/api/docs/'
          target='_blank'
          referrerPolicy='no-referrer'
          className='text-blue-500 underline'
        >
          Pixabay API
        </a>
      </p>
    </footer>
  );
};

export default Footer;

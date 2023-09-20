import useAuth from '../contexts/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const { user } = useAuth() as AuthType;

  const navigate = useNavigate();

  // logs user out and redirects to login page
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      toast.success('sign out successful!');
      navigate('/login');
    } catch (error) {
      toast.error('error signing out');
    }
  };
  return (
    <header className='sticky bg-gradient-to-tr top-0 from-secondary py-8 px-10 lg:px-20 to-primary via-btn flex  justify-between items-center'>
      <h1 className='text-4xl capitalize text-white font-bold tracking-widest italic'>
        la<span className='text-btn'>za</span>ria
      </h1>
      {user ? (
        <button onClick={handleSignOut} className='auth-btn'>
          logout
        </button>
      ) : (
        <Link to={'/signup'} className={'auth-btn'}>
          sign up
        </Link>
      )}
    </header>
  );
};

export default Header;

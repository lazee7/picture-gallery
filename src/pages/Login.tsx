import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import useAuth from '../contexts/useAuth';
import { auth } from '../firebase';
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
import spinner from '../assets/spinner.svg';
import { useForm } from 'react-hook-form';

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [isSending, setIsSending] = useState(false);

  const { user } = useAuth() as AuthType;

  const handleFormSubmit = async (data: {
    email: string;
    password: string;
  }) => {
    setIsSending(true);
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      if (response.user) {
        toast.success('Success!');
        navigate('/');
      } else {
        toast.error('An error occurred, please try again');
      }
    } catch (error) {
      toast.error('invalid credentials! try again');
      console.log(error);
    } finally {
      setIsSending(false);
    }
  };

  if (user) return <Navigate to={'/'} />;

  return (
    <div className='flex flex-col items-center px-8 py-9'>
      <div className='pb-5 text-gray-300'>
        <h2 className='text-xl py-1'>Welcome!</h2>
        <p className='text-sm'>Log in to see the image gallery</p>
      </div>

      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className='flex flex-col justify-center items-center py-8 gap-7 bg-form px-5 rounded-md w-full md:px-8 lg:px-12 sl:w-2/3 md:w-1/2 lg:w-1/3'
      >
        <div className='w-full '>
          <label htmlFor='email'>
            <input
              type='email'
              placeholder='email'
              {...register('email', {
                required: 'email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'enter a valid email',
                },
              })}
              className={`input ${errors?.email ? 'border-red-500' : ''}`}
              autoComplete='off'
            />
          </label>
          {errors?.email && (
            <p className='text-red-500 text-xs pt-1'>
              {errors?.email?.message}
            </p>
          )}
        </div>
        <div className='w-full'>
          <label htmlFor='password'>
            <input
              type='password'
              placeholder='password'
              id='password'
              {...register('password', {
                required: 'password is required',
              })}
              className={`input ${errors?.password ? 'border-red-500' : ''}`}
              autoComplete='off'
            />
          </label>
          <p className='text-red-500 pt-1 text-xs'>
            {errors?.password?.message}
          </p>
        </div>
        <button
          type='submit'
          className='bg-btn text-white w-1/2 rounded-lg p-2 capitalize disabled:bg-gray-500 btn'
          disabled={isSending}
        >
          login
        </button>
        {isSending ? (
          <div>
            <img src={spinner} alt='' className='animate-spin w-11' />
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default Login;

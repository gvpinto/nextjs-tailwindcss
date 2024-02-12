import FormInput from "@/components/formInput";
import PasswordInput from "@/components/passwordInput";

export default function login() {
  return (
    <div className='mt-40 w-full max-w-lg space-y-4 rounded-md bg-white px-12 py-8 shadow-md'>
      <h1 className='text-center text-3xl font-bold'>Login</h1>
      <form className='flex flex-col gap-8'>
        <div className='flex flex-col gap-6'>
          {/* User ID */}
          <FormInput />
          {/* Password */}
          <PasswordInput />
        </div>
        <div className='grid grid-flow-col grid-cols-3 items-center justify-items-center'>
          <div className='col-start-2 col-end-3 '>
            <button
              type='submit'
              className='inline-flex flex-grow items-center rounded-md bg-blue-600 px-6 py-2 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500'>
              Login
            </button>
          </div>
          <div className='col-start-3 col-end-4 justify-self-end'>
            <a href='#' className='text-sm text-gray-500 hover:text-gray-700'>
              Forgot password?
            </a>
          </div>
        </div>
      </form>
      <p className='pt-4 text-center text-sm text-gray-500'>
        Don&apos;t have an account?{" "}
        <a href='#' className='text-blue-600 hover:text-blue-700'>
          Sign Up
        </a>
      </p>
    </div>
  );
}

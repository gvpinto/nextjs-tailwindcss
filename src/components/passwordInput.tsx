export default function PasswordInput() {
  return (
    <div>
      <label htmlFor='password' className=' mb-2 block text-sm font-medium text-gray-700'>
        Password
      </label>
      <input
        type='password'
        id='password'
        name='password'
        className='block w-full rounded-md border-gray-300 bg-gray-50 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500'
      />
    </div>
  );
}

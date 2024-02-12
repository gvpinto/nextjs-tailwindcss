export default function FormInput() {
  return (
    <div>
      <label htmlFor='email' className='mb-2 block text-sm font-medium leading-6 text-gray-700'>
        Email Address
      </label>
      <input
        type='email'
        id='email'
        name='email'
        className='block w-full rounded-md border-gray-300 bg-gray-50 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500'
      />
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { faker } from "@faker-js/faker";
import imageLoader from "@/lib/loader";

export default function Home() {
  const persons = [
    { name: "Glenn", email: "gvpinto@gmail.com", imageUrl: faker.image.avatar() },
    { name: "Veena", email: "regina@gmail.com", imageUrl: faker.image.avatar() },
  ];
  return (
    <>
      <div className='m-10'>
        <Button className='bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700'>Save changes</Button>
      </div>

      <div className='m-10'>
        <ul role='list' className='divide-y divide-slate-200 p-6'>
          {persons.map((person) => {
            return (
              <li key={person.name} className='flex py-4 first:pt-0 last:pb-0'>
                <Image loader={imageLoader} className='h-10 w-10 rounded-full' src={person.imageUrl} alt='' width={10} height={10} />
                <div className='ml-3 overflow-hidden'>
                  <p className='text-sm font-medium text-slate-900'>{person.name}</p>
                  <p className='truncate text-sm text-slate-500'>{person.email}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className='m-10'>
        <form>
          <label className='block'>
            <span className='block text-sm font-medium text-slate-700'>Username</span>
            {/* <!-- Using form state modifiers, the classNamees can be identical for every input --> */}
            <Input
              type='email'
              placeholder='Email'
              //   value='tbone'
              //   disabled
              required
              className='focus:border-sky 500 mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-500 focus-visible:ring-offset-0 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none'
            />
          </label>
        </form>
      </div>
    </>
  );
}

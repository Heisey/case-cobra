
import * as Lucide from 'lucide-react'

import StandardPage from '@/components/templates/Standard'

export default function Home() {

  const renderListItem = (args: string) => (
    <li className='flex gap-1.5 items-center text-left'>
      <Lucide.Check className='h-5 w-5 shrink-0 text-green-660' />
      {args}
    </li>
  )

  const renderUserImage = (args: string) => <img src={args} alt='user image' className='inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100' />

  const renderStar = () => <Lucide.Star className='h-4 w-4 text-green-600 fill-green-600' />

  return (
    <main className="bg-slate-50">
      <StandardPage className='pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52'>
        <div className='col-span-2 px-6 lg:px-0 lg:pt-4'>
          <div className='relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start'>
            <div className='absolute w-28 left-0 top-20 hidden lg:block'>
              <img src='/images/snake-1.png' className='w-full' />
            </div>
            <h1 className='relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg: text-7xl'>Your image on as <span className='bg-green-600 px-2 text-white'>Custom</span>Phone Case</h1>
            <p className='mt-8 text-lg lg:pr-10 max-w-prose text-center lf:text-left text-balance md:text-wrap'>Capture your favorite memories with your own, <span className='font-semibold'>one-of-one</span> phone case. Case Cobra allows you to protect your memories, not just your phone case.</p>

            <ul className='mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start'>
              <div className='space-y-2'>
                {renderListItem('High Quality, durable mateial')}
                {renderListItem('5 year print gurantee')}
                {renderListItem('Modern iPhone models supported')}
              </div>
            </ul>

            <div className='mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5'>
              <div className='flex -space-x-4'>
                {/* <img src='/images/user-1.png' alt='user image' className='inline-block h-10 w-10 rounded full ring-2 ring-slate-100' /> */}
                {renderUserImage('/images/user-1.png')}
                {renderUserImage('/images/user-2.png')}
                {renderUserImage('/images/user-3.png')}
                {renderUserImage('/images/user-4.jpg')}
                {renderUserImage('/images/user-5.jpg')}
              </div>

              <div className='flex flex-col justify-between items-center sm:items-start'>
                <div className='flex gap-0.5'>
                  {renderStar()}
                  {renderStar()}
                  {renderStar()}
                  {renderStar()}
                  {renderStar()}
                </div>
                <p>
                  <span className='font-semibold'>1,250</span> happy customers
                </p>
              </div>
            </div>
          </div>
        </div>


        <div
      </StandardPage>
    </main>
  );
}

import MainLayout from '@/layouts/MainLayout';
import { Suspense } from 'react';
import Loading from './loading';
import HouseList from '@/components/HouseList';

export default async function Home() {
  
  return (
    <MainLayout>
      <section className="p-8 flex flex-col h-full justify-center items-center">
        <h1 className="text-lg sm:text-2xl lg:text-3xl mb-2 font-bold font-theme">Wizard World ⚡</h1>
        <Suspense fallback={<Loading />}>
          <HouseList/>
        </Suspense>
      </section>
    </MainLayout>
  );
}


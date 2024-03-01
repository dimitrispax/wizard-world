import MainLayout from '@/layouts/MainLayout';
import { fetcher } from '@/app/lib/data';
import {House} from '@/types/index'


export default async function Home() {
  
  const fetchedData = await fetcher()
  
  return (
    <MainLayout>
      <section className="p-8 flex flex-col h-full justify-center items-center">
        <h1 className="text-3xl font-bold font-theme">Wizard World ⚡</h1>
         {fetchedData.map((house: House) => <p className="text-lg font-theme" key={house.id}>{house.name} </p>)}
      </section>
    </MainLayout>
  );
}


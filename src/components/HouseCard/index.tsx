'use client'

import { FC } from 'react';
import type { House } from '@/types';
import { getHouseColours } from '@/app/lib/utils';

interface HouseCardProps {
  house: House;
};

const HouseCard: FC<HouseCardProps> = ({house}) => {

  const colours = getHouseColours(house);
  
  return (
    <div className='p-2 w-3/4 sm:p-2 sm:w-1/2 lg:p-4 lg:w-1/3 xl:w-1/4 mb-3 flex flex-col flex-wrap border border-slate-200 rounded-lg shadow-md' key={house.id}>
      <div className='mb-2 flex justify-between items-center'>
        <h1 className='text-sm lg:text-lg font-bold font-theme'>{house.name}</h1>
        <p className='text-xs lg:text-sm font-theme'>{house.animal}</p>
      </div>
      <div>
      <div className={`${colours} p-1 sm:p-2 rounded-lg`}></div>
      </div>  
      <div className='flex'>
      <p className='mt-2 text-xs lg:text-sm font-theme'>Founder: <span className='text-xs lg:text-sm font-bold font-theme'>{house.founder}</span></p>
      </div>
    </div>
  );
};

export default HouseCard;

import { FC } from 'react';
import type { House } from '@/types';
import { getHouses } from '@/app/lib/actions/houses';
import HouseCard from '../HouseCard';


const HouseList: FC = async () => {

  const houseListData = await getHouses();

  return (
    <>
      {houseListData.map((house: House) => {
        return (
          <HouseCard key={house.id} house={house} />
        );
      })}
    </>
  );
};

export default HouseList;

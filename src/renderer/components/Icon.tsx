import React from 'react';
import { FiCloudRain, FiCloud, FiSun } from 'react-icons/fi';
import { BsSnow, BsCloudFog } from 'react-icons/bs';
import { WiDust } from 'react-icons/wi';
import { GiSandstorm } from 'react-icons/gi';
import { IoThunderstormOutline } from 'react-icons/io5';

interface Prop {
  id: number;
}
const Icon: React.FC<Prop> = ({ id }) => {
  if (id >= 200 && id <= 232) return <IoThunderstormOutline color="white" />;

  if (id >= 500 && id <= 531) return <FiCloudRain color="white" />;

  if (id >= 600 && id <= 622) return <BsSnow color="white" />;

  if (id === 731 || id === 761) return <WiDust color="white" />;

  if (id === 741) return <BsCloudFog color="white" />;

  if (id === 751) return <GiSandstorm color="white" />;

  if (id === 800) return <FiSun color="#F9D71C " />;
  return <FiCloud color="white" />;
};

export default Icon;

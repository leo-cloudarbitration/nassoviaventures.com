import Image from 'next/image';

import matheusClemente from '@public/assets/founders/matheus-clemente.png';
import fernandoForneas from '@public/assets/founders/fernando-forneas.png';
import { ArrowRight } from '@phosphor-icons/react';

function Founders() {
  const foundersImage = [
    {
      image: fernandoForneas,
      name: 'Fernando Fórneas',
      role: 'CEO',
    },

    {
      image: matheusClemente,
      name: 'Matheus Clemente',
      role: 'COO',
    },
  ];
  return (
    <div className="flex relative gap-6 mt-8 flex-wrap">
      {/* Removido: cards dos fundadores */}
    </div>
  );
}

export { Founders };

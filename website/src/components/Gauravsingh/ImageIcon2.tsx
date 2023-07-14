import { memo, SVGProps } from 'react';

const ImageIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_6_56)'>
      <path
        d='M12 16C12 13.791 13.791 12 16 12C18.209 12 20 13.791 20 16C20 18.209 18.209 20 16 20C13.791 20 12 18.209 12 16Z'
        fill='#E5DADA'
      />
      <path
        d='M21.5 3.5H10.5C6.634 3.5 3.5 6.634 3.5 10.5V21.5C3.5 25.366 6.634 28.5 10.5 28.5H21.5C25.366 28.5 28.5 25.366 28.5 21.5V10.5C28.5 6.634 25.366 3.5 21.5 3.5ZM16 22C12.686 22 10 19.314 10 16C10 12.686 12.686 10 16 10C19.314 10 22 12.686 22 16C22 19.314 19.314 22 16 22ZM22.5 11C21.672 11 21 10.328 21 9.5C21 8.672 21.672 8 22.5 8C23.328 8 24 8.672 24 9.5C24 10.328 23.328 11 22.5 11Z'
        fill='#E5DADA'
      />
    </g>
    <defs>
      <clipPath id='clip0_6_56'>
        <rect width={32} height={32} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(ImageIcon2);
export { Memo as ImageIcon2 };

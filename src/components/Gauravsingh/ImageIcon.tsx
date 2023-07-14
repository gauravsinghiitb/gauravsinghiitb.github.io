import { memo, SVGProps } from 'react';

const ImageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_6_53)'>
      <path
        d='M30.713 9.712L26.938 13.475C26.188 22.212 18.813 29 10 29C8.188 29 6.688 28.712 5.55 28.15C4.638 27.687 4.263 27.2 4.163 27.05C3.995 26.795 3.953 26.478 4.047 26.189C4.142 25.899 4.364 25.668 4.65 25.562C4.675 25.55 7.625 24.425 9.538 22.262C8.351 21.418 7.309 20.388 6.45 19.212C4.738 16.887 2.925 12.85 4.013 6.825C4.082 6.46 4.346 6.163 4.7 6.05C5.055 5.934 5.446 6.025 5.713 6.287C5.75 6.337 9.913 10.437 15 11.762V11C15.01 9.399 15.656 7.867 16.795 6.742C17.934 5.617 19.474 4.99 21.075 5C23.192 5.03 25.137 6.169 26.2 8H30C30.404 7.999 30.769 8.24 30.925 8.612C31.072 8.989 30.989 9.417 30.713 9.712Z'
        fill='#E5DADA'
      />
    </g>
    <defs>
      <clipPath id='clip0_6_53'>
        <rect width={32} height={32} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(ImageIcon);
export { Memo as ImageIcon };

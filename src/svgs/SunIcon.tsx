import React, { FC } from 'react';
import { SvgIconProps } from '../contants';

const SunIcon: FC<SvgIconProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 512 512"
      width="25px"
      height="25px"
      className={className}
    >
      <path
        d="M508.699 263.116a9.321 9.321 0 000-14.231l-49.448-41.858a9.308 9.308 0 01-2.747-10.264l21.901-60.956a9.316 9.316 0 00-.699-7.822 9.317 9.317 0 00-6.424-4.513l-63.759-11.453a9.331 9.331 0 01-7.533-7.533l-11.445-63.767a9.323 9.323 0 00-4.513-6.424 9.285 9.285 0 00-7.822-.707l-60.964 21.909a9.324 9.324 0 01-10.272-2.747L263.116 3.31A9.291 9.291 0 00256 0a9.294 9.294 0 00-7.116 3.309l-41.858 49.44a9.355 9.355 0 01-10.272 2.762l-60.956-21.908a9.342 9.342 0 00-7.823.691 9.357 9.357 0 00-4.513 6.424l-11.452 63.767a9.332 9.332 0 01-7.533 7.533l-63.76 11.436a9.365 9.365 0 00-6.424 4.514 9.313 9.313 0 00-.699 7.822l21.909 60.973a9.355 9.355 0 01-2.755 10.28L3.3 248.885A9.32 9.32 0 000 256a9.298 9.298 0 003.3 7.116l49.448 41.858a9.338 9.338 0 012.747 10.28L33.594 376.21a9.316 9.316 0 00.699 7.822 9.36 9.36 0 006.424 4.513l63.76 11.436a9.333 9.333 0 017.533 7.534l11.444 63.783a9.359 9.359 0 004.513 6.425 9.348 9.348 0 007.822.691l60.964-21.909a9.322 9.322 0 0110.272 2.747l41.858 49.456a9.33 9.33 0 007.116 3.292 9.327 9.327 0 007.115-3.292l41.858-49.456a9.322 9.322 0 0110.272-2.747l60.956 21.909a9.292 9.292 0 007.822-.707 9.324 9.324 0 004.514-6.424l11.452-63.767a9.332 9.332 0 017.533-7.534l63.759-11.436a9.317 9.317 0 006.424-4.513 9.313 9.313 0 00.699-7.822l-21.901-60.956a9.34 9.34 0 012.747-10.28l49.45-41.859zM256 425.135c-93.41 0-169.135-75.725-169.135-169.135S162.59 86.865 256 86.865 425.136 162.59 425.136 256 349.41 425.135 256 425.135z"
        fill="#4b4b4b"
      />
    </svg>
  );
};

export default SunIcon;

import React from 'react';
import Image from 'next/image';

interface AvatarProps {
  alt: string;
  avatarThumb: string;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ alt, avatarThumb, size = 64 }) => (
  <div className="rounded-full w-max sm:mr-2 flex items-center overflow-hidden border border-gray-200">
    <Image width={size} height={size} alt={alt} src={avatarThumb} />
  </div>
);

export default Avatar;

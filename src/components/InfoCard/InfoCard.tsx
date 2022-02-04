import React from 'react';

interface InfoCardProps {
  label: string;
  value: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ label, value }) => {
  return (
    <div className="px-4 py-2 bg-gray-200 dark:bg-gray-500 rounded-xl text-center transition-colors duration-300">
      <h3 className="mb-0.5 truncate">{label}</h3>
      <p className="font-bold truncate">{value}</p>
    </div>
  );
};

export default InfoCard;

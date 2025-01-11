import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [isActive, setIsActive] = useState(true);
  return (
    <div
      onClick={() => {
        setIsActive(!isActive);
        onClick();
      }}
    >
      {isActive === true ? <FaHeart size='40' /> : <FaRegHeart size='40' />}
    </div>
  );
};

export default Like;

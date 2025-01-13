import { useState } from 'react';
import Button from '../Button';

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {expanded ? children : children.slice(0, maxChars) + ' ...'}
      <Button color='secondary' onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Show Less' : 'Show More'}
      </Button>
    </>
  );
};

export default ExpandableText;

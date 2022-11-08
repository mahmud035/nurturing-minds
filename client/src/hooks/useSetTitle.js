import { useEffect } from 'react';

const useSetTitle = (title) => {
  useEffect(() => {
    document.title = `Nurturing Minds - ${title}`;
  }, [title]);
};

export default useSetTitle;

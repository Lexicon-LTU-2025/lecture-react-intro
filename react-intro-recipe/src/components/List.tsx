import type { ReactElement, ReactNode } from 'react';

interface IListProps {
  children: ReactNode;
  className: string;
  type: 'ol' | 'ul';
}

export const List = ({ children, className, type }: IListProps): ReactElement => {
  if (type === 'ol') {
    // Early return
    return <ol className={className}>{children}</ol>;
  }

  return <ul className={className}>{children}</ul>;
};

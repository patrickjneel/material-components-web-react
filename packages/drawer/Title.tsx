import * as React from 'react';
import * as classnames from 'classnames';

export interface DrawerTitleProps {
  tag?: string,
  className?: string
};

const DrawerTitle: React.SFC<DrawerTitleProps> = ({
  tag: Tag = 'h3', children, className = '', ...otherProps // eslint-disable-line react/prop-types
}) => {
  return (
    <Tag className={classnames('mdc-drawer__title', className)} {...otherProps}>
      {children}
    </Tag>
  );
};

export default DrawerTitle;
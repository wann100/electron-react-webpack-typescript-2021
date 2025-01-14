import React, { Fragment } from 'react';
import { SvgIcon, SvgIconProps } from '../../common/components';

export default function PrinterPosTwoTone(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <Fragment>
      <path d="M18 10H6A2 2 0 0 0 4 12V19H20V12A2 2 0 0 0 18 10M18 14H14V12H18M17 9H7V4H17Z" />
      </Fragment>
    </SvgIcon>
  );
}

import * as React from 'react';
import { StandardProps } from '..';
import { Padding, Size } from '../Table';

export { Padding, Size };

/**
 * `<TableCell>` will be rendered as an `<th>`or `<td>` depending
 * on the context it is used in. Where context literally is the
 * React `context`.
 *
 * Since it is not decided via prop, we have create loose typings
 * here.
 */
export interface TableCellProps
  extends StandardProps<TableCellBaseProps, TableCellClassKey, 'align'> {
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  component?: React.ElementType<TableCellBaseProps>;
  padding?: Padding;
  size?: Size;
  sortDirection?: SortDirection;
  variant?: 'head' | 'body' | 'footer';
}

export type TableCellBaseProps = React.ThHTMLAttributes<HTMLTableHeaderCellElement> &
  React.TdHTMLAttributes<HTMLTableDataCellElement>;

export type SortDirection = 'asc' | 'desc' | false;

export type TableCellClassKey =
  | 'root'
  | 'head'
  | 'body'
  | 'footer'
  | 'alignLeft'
  | 'alignCenter'
  | 'alignRight'
  | 'alignJustify'
  | 'sizeSmall'
  | 'paddingCheckbox'
  | 'paddingNone'
  | 'stickyHeader';

/**
 * The component renders a `<th>` element when the parent context is a header
 * or otherwise a `<td>` element.
 * Demos:
 *
 * - [Tables](https://material-ui.com/components/tables/)
 *
 * API:
 *
 * - [TableCell API](https://material-ui.com/api/table-cell/)
 */
declare const TableCell: React.ComponentType<TableCellProps>;

export default TableCell;

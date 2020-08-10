import React from 'react';
import PropTypes from 'prop-types';
import { dataHooks } from './constants';
import styles from './TableListItem.st.css';
import Checkbox from '../Checkbox';
import Box from '../Box';
import DragHandle from 'wix-ui-icons-common/system/DragAndDropLarge';
import DragHandleDisabled from 'wix-ui-icons-common/system/DragAndDropLockedLarge';

export const VERTICAL_PADDING = {
  small: 'small',
  medium: 'medium',
};

const ALIGN = {
  left: 'left',
  center: 'center',
  right: 'right',
};

const getWidthStyle = options =>
  options.reduce(
    (acc, { width }) =>
      `${acc} ${typeof width === 'number' ? width + 'px' : width || '1fr'}`,
    '',
  );

/** TableListItem */
const TableListItem = ({
  options,
  verticalPadding,
  checkbox,
  checkboxDisabled,
  checked,
  onCheckboxChange,
  draggable,
  dragDisabled,
  showDivider,
  onClick,
  className,
  dataHook,
}) => {
  const DragHandleIcon = dragDisabled ? DragHandleDisabled : DragHandle;
  return (
    <div
      onClick={onClick}
      {...styles(
        'root',
        {
          draggable: draggable && !dragDisabled,
          checked: checkbox && checked,
          showDivider,
          clickable: !!onClick,
          ...{ verticalPadding },
        },
        { className },
      )}
      data-hook={dataHook}
    >
      <Box>
        {draggable && (
          <div
            {...styles('dragHandle', {
              disabled: dragDisabled,
            })}
            data-hook={dataHooks.tableListItemDragHandle}
          >
            <DragHandleIcon />
          </div>
        )}
        {checkbox && (
          <div
            className={styles.checkbox}
            data-hook={dataHooks.tableListItemCheckboxContainer}
            onClick={onCheckboxChange}
          >
            <Checkbox
              checked={checked}
              disabled={checkboxDisabled}
              dataHook={dataHooks.tableListItemCheckbox}
            />
          </div>
        )}
        <div
          className={styles.optionsContainer}
          style={{
            gridTemplateColumns: getWidthStyle(options),
          }}
          dataHook={dataHooks.tableListItemOptionsContainer}
        >
          {options.map(({ value, align }, index) => (
            <div
              {...styles('align', { position: ALIGN[align] || ALIGN.left })}
              key={index}
              data-hook={dataHooks.tableListItemValue}
            >
              {value}
            </div>
          ))}
        </div>
      </Box>
    </div>
  );
};

TableListItem.displayName = 'TableListItem';

TableListItem.propTypes = {
  dataHook: PropTypes.string,
  className: PropTypes.string,

  /**
   width supports px/%/fr
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.node.isRequired,
      width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      align: PropTypes.oneOf(['left', 'center', 'right']),
    }),
  ).isRequired,

  /**
    Extra space on top and bottom of list item
   */
  verticalPadding: PropTypes.oneOf(['medium', 'small']),

  /**
    Show checkbox
   */
  checkbox: PropTypes.bool,

  /**
    Disable checkbox
   */
  checkboxDisabled: PropTypes.bool,

  /**
    State of the checkbox
   */
  checked: PropTypes.bool,

  /**
    Called when checkbox is clicked
   */
  onCheckboxChange: PropTypes.func,

  /**
    Show drag handle
   */
  draggable: PropTypes.bool,

  /**
    Show disabled drag handle
   */
  dragDisabled: PropTypes.bool,

  /**
    Show divider on the bottom of the list item
   */
  showDivider: PropTypes.bool,

  /**
    Called when the item is clicked
   */
  onClick: PropTypes.func,
};

TableListItem.defaultProps = {
  onCheckboxChange: () => {},
  verticalPadding: 'medium',
  checkbox: false,
  draggable: false,
  showDivider: false,
};

export default TableListItem;

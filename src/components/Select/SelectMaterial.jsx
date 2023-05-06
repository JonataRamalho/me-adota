import { useContext, useState } from 'react';
import { MenuItemCustom, SelectCustom } from './styles';
import { ThemeContext } from 'styled-components';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const status = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

export default function MultipleSelectPlaceholder() {
  const theme = useContext(ThemeContext);

  const [healthStatus, setHealthStatus] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setHealthStatus(
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  return (
    <SelectCustom
      multiple
      displayEmpty
      value={healthStatus}
      onChange={handleChange}
      renderValue={(selected) => {
        if (selected.length === 0) {
          return <em style={{ color: theme.colors.tertiary }}>Estado do animal</em>;
        }

        return selected.join(', ');
      }}
      MenuProps={MenuProps}
    >
      <MenuItemCustom disabled value="">
        <em>Estado do animal</em>
      </MenuItemCustom>
      {status.map((item) => (
        <MenuItemCustom
          key={item}
          value={item}
        >
          {item}
        </MenuItemCustom>
      ))}
    </SelectCustom>
  );
}
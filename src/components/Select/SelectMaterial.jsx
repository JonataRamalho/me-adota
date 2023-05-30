import { useContext, useState } from "react";
import { MenuItemCustom, SelectCustom } from "./styles";
import { ThemeContext } from "styled-components";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

export default function MultipleSelectPlaceholder({
  width,
  height,
  isMultiple,
  title,
  isDisabled,
  status,
  valueStatus,
  handleChange,
}) {
  const theme = useContext(ThemeContext);

  return (
    <SelectCustom
      disabled={isDisabled}
      multiple={isMultiple}
      displayEmpty
      value={valueStatus}
      onChange={(e) => handleChange(e, title.type)}
      renderValue={(selected) => {
        if (selected.length === 0) {
          return (
            <em style={{ color: theme.colors.tertiary }}>{title.title}</em>
          );
        }

        return selected.join(", ");
      }}
      MenuProps={MenuProps}
      $width={width}
      $height={height}
    >
      <MenuItemCustom disabled value="">
        <em>{title.title}</em>
      </MenuItemCustom>
      {status.map((item) => (
        <MenuItemCustom key={item} value={item}>
          {item}
        </MenuItemCustom>
      ))}
    </SelectCustom>
  );
}

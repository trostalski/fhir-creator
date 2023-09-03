export const reactSelectStyles = {
  control: (base: any) => ({
    ...base,
    minHeight: 24,
    borderRadius: 2,
    borderColor: "#9ca3af",
  }),
  valueContainer: (base: any) => ({
    ...base,
    height: 24,
    minHeight: 24,
    fontSize: 12,
    // center text
    // center text vertically
    paddingTop: 0,
    paddingBottom: 0,
  }),
  indicatorsContainer: (base: any) => ({
    ...base,
    height: 24,
    minHeight: 24,
  }),
  indicatorSeparator: (base: any) => ({
    ...base,
  }),
  dropdownIndicator: (base: any) => ({
    ...base,
    // decrease size
    "& svg": {
      height: 16,
      width: 16,
    },
  }),
  menu: (base: any) => ({
    ...base,
    zIndex: 100,
  }),
  menuList: (base: any) => ({
    ...base,
    maxHeight: 200,
  }),
  option: (base: any) => ({
    ...base,
    fontSize: 12,
  }),
};

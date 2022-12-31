export enum navDirection {
  ROW = "row",
  COLUMN = "col",
}

interface INavProps {
  navbarItem: Array<String|React.ReactElement>;
  direction: navDirection;
  customClassName?: string | undefined;
}

const Navbar = ({ navbarItem, direction, customClassName }: INavProps) => {
  return (
    <ul className={`flex flex-${direction} align-center gap-7 ${customClassName}`}>
      {navbarItem.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default Navbar;

export enum navDirection {
  ROW = "row",
  COLUMN = "col",
}

interface INavProps {
  navbarItem: Array<String|React.ReactElement>;
  direction: navDirection;
}

const Navbar = ({ navbarItem, direction }: INavProps) => {
  return (
    <ul className={`flex flex-${direction} align-center gap-7`}>
      {navbarItem.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default Navbar;

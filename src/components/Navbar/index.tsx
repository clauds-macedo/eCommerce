export enum navDirection {
  ROW = "row",
  COLUMN = "col",
}

interface INavProps {
  navbarLabels: Array<String>;
  direction: navDirection;
}

const Navbar = ({ navbarLabels, direction }: INavProps) => {
    console.log(navbarLabels, direction)
  return (
    <ul className={`flex flex-${direction} align-center gap-7`}>
      {navbarLabels.map((label, index) => (
        <li key={index}>{label}</li>
      ))}
    </ul>
  );
};

export default Navbar;

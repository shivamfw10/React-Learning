type TabButtonProps = {
  children: string;
  onSelect: () => void;
  isSelected?: boolean;
}

const TabButton = ({ children, onSelect, isSelected }: TabButtonProps) => {
  return (
    <li><button className={isSelected ? 'active':undefined} onClick={onSelect}>{children}</button></li>
  );
}
export default TabButton;
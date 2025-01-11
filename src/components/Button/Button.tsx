import styles from './Button.module.css';

interface Props {
  children: string;
  color?: 'primary' | 'secondary' | 'danger';
  onClick: () => void;
}
const Button = ({ children, onClick, color = 'primary' }: Props) => {
  return (
    // CSS module button
    <button
      className={[styles.btn, styles['btn-' + color]].join(' ')}
      onClick={onClick}
    >
      {children}
    </button>

    // bootstrap button
    // <button className={'btn btn-' + color} onClick={onClick}>
    //   {children}
    // </button>
  );
};

export default Button;

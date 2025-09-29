import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  showText?: boolean;
  textClassName?: string;
}

export default function Logo({
  className = "h-8 w-auto",
  showText = false,
  textClassName = "text-2xl font-bold text-primary-950 tracking-tight"
}: LogoProps) {
  return (
    <Link to="/" className="flex items-center space-x-3">
      <img
        src="/logo.png"
        alt="CAFMN Logo"
        className={className}
      />
      {showText && (
        <span className={textClassName}>
          CAFMN
        </span>
      )}
    </Link>
  );
}
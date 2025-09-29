import { ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  width?: string;
  height?: string;
  className?: string;
  text?: string;
}

export default function ImagePlaceholder({
  width = 'w-full',
  height = 'h-48',
  className = '',
  text = 'Cabinet Image'
}: ImagePlaceholderProps) {
  return (
    <div className={`${width} ${height} ${className} bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center border border-neutral-200 rounded-lg`}>
      <div className="text-center">
        <ImageIcon className="h-12 w-12 text-neutral-400 mx-auto mb-2" />
        <p className="text-neutral-500 text-sm font-medium">{text}</p>
      </div>
    </div>
  );
}
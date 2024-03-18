import Image from "next/image";

type CarouselCardProps = {
  title: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  classNameItem?: string;
  classNameDetails?: string;
  onClick?: () => void;
}

export const CarouselCard = ({ title, src, alt, width, height, classNameItem, classNameDetails, onClick }: CarouselCardProps) => {
  return (
    <div className={classNameItem} onClick={onClick}>
      <div className={classNameDetails}>
        <p>{title}</p>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={true}
        />
      </div>
    </div>
  );
};

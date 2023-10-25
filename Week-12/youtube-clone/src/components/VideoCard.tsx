import { images } from "../../public/thumbnail";
import Image from "next/image";

export function VideoCard() {
  return (
    <div>
      <Image src={images.image1} alt="image 1" />
    </div>
  );
}

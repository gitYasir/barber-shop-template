import pics from "./galleryData";
import Image from "next/image";

function Gallery() {
  return (
    <div>
      {pics.map((pic) => {
        return <Image src={pic} alt={pic} height={200} width={200} key={pic} />;
      })}
    </div>
  );
}

export default Gallery;

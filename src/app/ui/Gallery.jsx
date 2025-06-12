import Div from "./Div";
import Image from "next/image";
import Spacing from "./Spacing";

export default function Gallery({ gallery }) {
  return (
    <>
      <Spacing lg="90" md="40" />
      <Div className="cs-gallery">
        {gallery.map((src, index) => (
          <Div className="cs-gallery_item" key={index}>
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={636}
              height={400}
              className="cs-radius_15 w-100"
            />
            <Spacing lg="25" md="25" />
          </Div>
        ))}
      </Div>
    </>
  );
} 
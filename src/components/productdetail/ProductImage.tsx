import Image from "next/image";

const ProductImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className=" w-full h-full ">
    <div className=" flex justify-center rounded-lg overflow-hidden">
      <a href="#sample">
        <Image
          height={1800}
          width={1200}
          src={src}
          className="w-auto h-auto rounded-lg"
          alt={alt}
        />
      </a>
    </div>
  </div>
);

export default ProductImage;
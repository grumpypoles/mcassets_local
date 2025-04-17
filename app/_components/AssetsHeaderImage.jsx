import Image from "next/image";

function AssetsHeaderImage({ eqData }) {
  if (!eqData || eqData.length === 0) {
    return null; // Avoid rendering the component if no data is available
  }

  const imageUrl = eqData[0]?.card_image
    ? `/uploads/images/${eqData[0].card_image}`
    : `/uploads/images/AssetImageMissing.jpg`;

  
  return (
    <section>
      <div className="m-auto container-xl">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={imageUrl}
            alt={eqData[0]?.card_description?.trim() || "Asset Image"}
            className="w-[40%] h-auto rounded-t-xl"
            width={400}
            height={300}
            sizes="50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default AssetsHeaderImage;

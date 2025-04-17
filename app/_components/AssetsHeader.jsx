const AssetHeader = ({ eqData = [] }) => {
  if (!eqData.length) {
    return null; // Return nothing if eqData is empty
  }

  const { selcode, card_description, technical_maker_name, card_model } = eqData[0] || {};

  return (
    <div className="w-full px-5 py-3 text-2xl font-bold rounded-sm shadow-sm bg-primary-200 text-primary-800 disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400">
      <h1>
        {selcode} {card_description}
        {technical_maker_name && ` Maker: ${technical_maker_name}`}
        {card_model && ` Model: ${card_model}`}
      </h1>
    </div>
  );
};

export default AssetHeader;

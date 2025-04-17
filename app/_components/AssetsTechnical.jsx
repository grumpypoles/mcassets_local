import { KeyIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/solid";

const AssetsTechnical = ({ eqData }) => {
  if (!eqData || eqData.length === 0) {
    return <div className="p-4 text-center">No technical data available.</div>;
  }

  const {
    technical_instructions = "0000 No Instructions.pdf",
    technical_category = "Unknown",
    technical_location = "Unknown",
    technical_serial_number = "N/A",
    status = "Unknown",
    technical_maker_web = "",
  } = eqData[0] || {};

  const pdf_urls = `/uploads/instructions/${technical_instructions}`;

  return (
    <div className="flex flex-col items-center justify-top text-primary-800 bg-primary-200">
      <span className="flex flex-row items-center w-full p-4 mb-4 text-2xl font-bold gap-x-2 bg-primary-400">
        <WrenchScrewdriverIcon className="w-10 h-10" /> Technical Data
      </span>

      <div>
        <ul>
          <li>
            <span className="flex flex-row items-center w-full text-lg font-medium gap-x-2">
              <KeyIcon className="w-6 h-6" /> Category: {technical_category}
            </span>
          </li>
          <li>
            <span className="flex flex-row items-center w-full text-lg font-medium gap-x-2">
              <KeyIcon className="w-6 h-6" /> Location: {technical_location}
            </span>
          </li>
          <li>
            <span className="flex flex-row items-center w-full text-lg font-medium gap-x-2">
              <KeyIcon className="w-6 h-6" /> Serial Number: {technical_serial_number}
            </span>
          </li>
          <li>
            <span className="flex flex-row items-center w-full text-lg font-medium gap-x-2">
              <KeyIcon className="w-6 h-6" /> Status: {status}
            </span>
          </li>
          {technical_maker_web && (
            <li>
              <a
                href={technical_maker_web}
                className="flex flex-row items-center w-full text-xl font-medium gap-x-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <KeyIcon className="w-6 h-6" />
                Maker WEB: <span style={{ textDecoration: 'underline' }}>{technical_maker_web}</span>
              </a>
            </li>
          )}
          {technical_instructions && (
            <li>
              <a
                href={pdf_urls}
                className="flex flex-row items-center w-full text-xl font-medium gap-x-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <KeyIcon className="w-6 h-6" />
                Instructions: <span style={{ textDecoration: 'underline' }}>{technical_instructions}</span>
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AssetsTechnical;

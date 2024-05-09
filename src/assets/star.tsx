const Star = ({ size }: { size: number }) => {
  return (
    <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_9967_1717)">
        <mask id="mask0_9967_1717" mask-type="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="26">
          <path
            d="M25.0002 0.777832L0.111328 0.777832L0.111328 25.6667H25.0002V0.777832Z"
            fill="white"
            fillOpacity="1"
          />
        </mask>
        <g mask="url(#mask0_9967_1717)">
          <path
            d="M12.5558 0.777832C12.9783 7.46792 18.3101 12.7998 25.0002 13.2223C18.3101 13.6448 12.9783 18.9766 12.5558 25.6667C12.1333 18.9766 6.80141 13.6448 0.111328 13.2223C6.80141 12.7998 12.1333 7.46792 12.5558 0.777832Z"
            fill="#FF7E36"
            fillOpacity="1"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_9967_1717">
          <rect
            width="24.8889"
            height="24.8889"
            fill="white"
            fillOpacity="1"
            transform="translate(0.111328 0.777832)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Star;

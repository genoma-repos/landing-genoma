import svgPathsClosed from '../../../assets/icons/ContainerPriceClosed/svg-wsf2upobez';
import svgPathsOpen from '../../../assets/icons/ContainerPriceOpen/svg-5q14jniilq';

type CloseIconButtonProps = {
  onClose: () => void
};

export function CloseIconButton({ onClose }: CloseIconButtonProps) {
  return (
    <div className="close-button-wrapper">
      <button
        type="button"
        className="close-icon-container"
        data-name="Icons"
        onClick={onClose}
        aria-label="Fechar modal"
      >
        <div className="close-icon" data-name="heroicons-outline/x-mark">
          <div className="close-icon-vector" data-name="Vector">
            <div className="close-icon-svg-wrapper">
              <svg fill="none" viewBox="0 0 13.8357 13.5">
                <path d={svgPathsOpen.p3edfec80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </button>
      <div className="spacer" />
    </div>
  );
}

export function SaleInfoIcon() {
  return (
    <div className="sale-info-icon" data-name="Icon">
      <svg fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPathsClosed.p33f8a400} id="Vector" stroke="var(--stroke-0, #CC8E00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPathsClosed.p37cb8680} id="Vector_2" stroke="var(--stroke-0, #CC8E00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPathsClosed.pf3a8600} id="Vector_3" stroke="var(--stroke-0, #CC8E00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPathsClosed.p1103640} id="Vector_4" stroke="var(--stroke-0, #CC8E00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

export function ArrowIcon() {
  return (
    <div className="arrow-icon" data-name="Icons">
      <div className="arrow-icon-inner" data-name="heroicons-outline/arrow-right">
        <div className="arrow-vector" data-name="Vector">
          <div className="arrow-svg-wrapper">
            <svg fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 16.5">
              <path d={svgPathsOpen.p1e8ea100} id="Vector" stroke="var(--stroke-0, #01988C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

type ServiceIconProps = {
  clipId: string
};

export function ServiceIcon({ clipId }: ServiceIconProps) {
  return (
    <div className="service-icon" data-name="Icon">
      <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath={`url(#${clipId})`} id="Icon">
          <path d={svgPathsOpen.p11535600} id="Vector" stroke="var(--stroke-0, #01AB9D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPathsOpen.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #01AB9D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id={clipId}>
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export function AnalystIcon() {
  return (
    <div className="analyst-icon" data-name="Icon">
      <svg fill="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_3602)" id="Icon">
          <path d={svgPathsOpen.p13f48e00} id="Vector" stroke="var(--stroke-0, #01988C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33306" />
          <path d={svgPathsOpen.p6e62c00} id="Vector_2" stroke="var(--stroke-0, #01988C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33306" />
          <path d={svgPathsOpen.p2ea28c80} id="Vector_3" stroke="var(--stroke-0, #01988C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33306" />
        </g>
        <defs>
          <clipPath id="clip0_1_3602">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export function ItemCertificatesIcon() {
  return (
    <div className="item-icon" data-name="Icon">
      <svg fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPathsOpen.p2e7d1f80} id="Vector" stroke="var(--stroke-0, #01988C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPathsOpen.p39e2f880} id="Vector_2" stroke="var(--stroke-0, #01988C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66634 6H5.33301" id="Vector_3" stroke="var(--stroke-0, #01988C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6663 8.66669H5.33301" id="Vector_4" stroke="var(--stroke-0, #01988C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6663 11.3333H5.33301" id="Vector_5" stroke="var(--stroke-0, #01988C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

export function ItemDnaIcon() {
  return (
    <div className="item-icon" data-name="Icon">
      <svg fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPathsOpen.p39559880} id="Vector" stroke="var(--stroke-0, #01988C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPathsOpen.p3427f480} id="Vector_2" stroke="var(--stroke-0, #01988C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPathsOpen.p21527a40} id="Vector_3" stroke="var(--stroke-0, #01988C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPathsOpen.p30e07e80} id="Vector_4" stroke="var(--stroke-0, #01988C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

export function DiscountIcon() {
  return (
    <div className="discount-icon" data-name="Icon">
      <svg fill="none" preserveAspectRatio="none" viewBox="0 0 15.9967 15.9967">
        <g clipPath="url(#clip0_1_3774)" id="Icon">
          <path d={svgPathsOpen.pb246e00} id="Vector" stroke="var(--stroke-0, #6B9539)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33306" />
          <path d={svgPathsOpen.p759f600} fill="var(--fill-0, #6B9539)" id="Vector_2" stroke="var(--stroke-0, #6B9539)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33306" />
        </g>
        <defs>
          <clipPath id="clip0_1_3774">
            <rect fill="white" height="15.9967" width="15.9967" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export function AlertIcon() {
  return (
    <div className="alert-icon" data-name="Icons">
      <svg fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path clipRule="evenodd" d={svgPathsOpen.p34da8c80} fill="var(--fill-0, #E33838)" fillRule="evenodd" id="Subtract" />
      </svg>
    </div>
  );
}

export function ChevronIcon() {
  return (
    <div className="chevron-icon" data-name="Icons">
      <div className="chevron-inner" data-name="heroicons-mini/chevron-down">
        <div className="chevron-vector" data-name="Vector (Stroke)">
          <svg fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
            <path clipRule="evenodd" d={svgPathsClosed.p2bf3180} fill="var(--fill-0, #5D696F)" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function WarningIcon() {
  return (
    <div className="warning-icon">
      <svg fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
        <path d={svgPathsOpen.p27002400} id="Vector" stroke="var(--stroke-0, #FF9B4C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    </div>
  );
}


export default function encodeMarkerSVG(label: string) {
    
    const tagSvgRaw = (capacity: string) => `
        <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="75.62"
        height="107.13"
        viewBox="110.78, 51.04, 75.62, 107.13"
        stroke-linejoin="round"
        stroke-linecap="round"
        fill="none"
        fill-rule="evenodd"
        >
            <g stroke-width="2">
                <path fill="#fcd535" stroke="#333"
                    d="M117.15,93.98L117.17,94.15L117.70,96.96L118.42,99.36L119.64,102.12L142.16,149.02L142.86,150.03L143.79,150.91L145.04,151.65L146.40,152.07L147.79,152.17L149.58,152.17L151.02,152.02L152.40,151.54L153.60,150.75L154.28,150.07L155.00,149.05L177.75,101.69L178.89,99.01L179.57,96.64L180.11,93.47L180.40,90.36L180.39,87.29L180.04,83.90L179.33,80.58L178.28,77.37L176.90,74.31L175.22,71.41L173.18,68.65L170.95,66.21L168.48,64.01L165.81,62.09L162.97,60.47L160.00,59.15L158.42,58.59L155.29,57.75L152.14,57.23L148.97,57.04L145.81,57.16L142.85,57.56L139.74,58.29L136.53,59.41L133.46,60.86L130.58,62.62L127.91,64.67L125.48,66.98L123.32,69.51L121.44,72.25L119.89,75.09L118.62,78.13L117.68,81.26L117.06,84.46L116.78,87.67L116.82,90.89L117.15,93.98"
                />
                <path fill="#006747"
                    d="M124.97,93.98L125.34,95.70L126.55,98.94L128.21,101.97L130.28,104.74L132.73,107.19L135.49,109.26L138.53,110.91L141.77,112.12L145.14,112.86L148.59,113.10L152.04,112.86L155.42,112.12L158.66,110.91L161.69,109.26L164.46,107.19L166.90,104.74L168.98,101.97L170.63,98.94L171.84,95.70L172.57,92.32L172.82,88.87L172.57,85.43L171.84,82.05L170.63,78.81L168.98,75.78L166.90,73.01L164.46,70.56L161.69,68.49L158.66,66.83L155.42,65.63L152.04,64.89L148.59,64.65L145.14,64.89L141.77,65.63L138.53,66.83L135.49,68.49L132.73,70.56L130.28,73.01L128.21,75.78L126.55,78.81L125.34,82.05L124.61,85.43L124.36,88.87L124.61,92.32L124.97,93.98"
                />
            </g>
            <text x="149" y="90"
                    text-anchor="middle" fill="#FFF"
                    font-size="12px" font-family="sans-serif" font-weight="bold">
                    ${capacity}
            </text>
        </svg>`;

    let rawSvgString = tagSvgRaw(label);
    const symbols = /[\r\n%#()<>?\[\\\]^`{|}]/g;
  
    rawSvgString = rawSvgString
      .replace(/'/g, '"')
      .replace(/>\s+</g, '><')
      .replace(/\s{2,}/g, ' ');
  
    return (
      'data:image/svg+xml;utf-8,' +
      rawSvgString.replace(symbols, encodeURIComponent)
    );
}
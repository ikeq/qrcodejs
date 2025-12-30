interface QRCodeOptions {
  /** QRCode link data */
  text?: string;
  /** Width of QRCode, default: 256 */
  width?: number;
  /** Height of QRCode, default: 256 */
  height?: number;
  /** Dark color, default: "#000000" */
  colorDark?: string;
  /** Light color, default: "#ffffff" */
  colorLight?: string;
  /** Correct level [L|M|Q|H], default: QRCode.CorrectLevel.H */
  correctLevel?: QRCodeCorrectLevel;
  /** Use SVG renderer */
  useSVG?: boolean;
  /** Type number */
  typeNumber?: number;
}

interface QRCodeCorrectLevel {
  L: number;
  M: number;
  Q: number;
  H: number;
}

/**
 * QRCode for JavaScript
 *
 * @example
 * new QRCode(document.getElementById("test"), "http://jindo.dev.naver.com/collie");
 *
 * @example
 * var oQRCode = new QRCode("test", {
 *    text : "http://naver.com",
 *    width : 128,
 *    height : 128
 * });
 *
 * oQRCode.clear(); // Clear the QRCode.
 * oQRCode.makeCode("http://map.naver.com"); // Re-create the QRCode.
 */
declare class QRCode {
  static CorrectLevel: QRCodeCorrectLevel;

  /**
   * Create a QRCode
   * @param el target element or 'id' attribute of element
   * @param vOption options or text string
   */
  constructor(el: HTMLElement | string, vOption?: QRCodeOptions | string);

  /**
   * Make the QRCode
   * @param sText link data
   */
  makeCode(sText: string): void;

  /**
   * Clear the QRCode
   */
  clear(): void;
}

export default QRCode;

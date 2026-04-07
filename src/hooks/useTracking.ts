import { track } from '@vercel/analytics/react';
import { CV_DOWNLOAD_FILENAME, CV_PDF_PATH } from '../constants/cv';

/**
 * Records a CV download in Vercel Web Analytics, then triggers the same browser download as a plain `download` link.
 */
export function trackCvDownload(pagePath: string): void {
  track('CV Download', { page: pagePath });

  const a = document.createElement('a');
  a.href = encodeURI(CV_PDF_PATH);
  a.download = CV_DOWNLOAD_FILENAME;
  a.rel = 'noopener';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

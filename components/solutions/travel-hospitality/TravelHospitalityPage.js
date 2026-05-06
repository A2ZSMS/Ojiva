/**
 * Industry page wrapper for /solutions/travel-hospitality.
 *
 * Pulls industry data from ./data.js and renders through the shared
 * IndustryPageLayout. Add industry-specific sections here when one industry
 * needs custom content the others don't.
 */

import IndustryPageLayout from '../shared/IndustryPageLayout';
import industryData from './data';

export default function TravelHospitalityPage() {
  return <IndustryPageLayout industry={industryData} />;
}

/**
 * BulkUpdateRequest automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {Record} from "./Record";
export interface BulkUpdateRequest {
    performUpsert?: Array<string>
    returnFieldsByFieldId?: boolean
    typecast?: boolean
    records?: Array<Record>
}

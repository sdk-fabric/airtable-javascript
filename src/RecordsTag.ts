/**
 * RecordsTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {Record} from "./Record";
import {RecordCollection} from "./RecordCollection";

export class RecordsTag extends TagAbstract {
    /**
     * List records in a table. Note that table names and table ids can be used interchangeably. We recommend using table IDs so you don't need to modify your API request when your table name changes.
     *
     * @returns {Promise<RecordCollection>}
     * @throws {ClientException}
     */
    public async getAll(baseId: string, tableIdOrName: string, timeZone?: string, userLocale?: string, pageSize?: number, maxRecords?: number, offset?: string, view?: string, sort?: string, filterByFormula?: string, cellFormat?: string, fields?: string, returnFieldsByFieldId?: boolean, recordMetadata?: string): Promise<RecordCollection> {
        const url = this.parser.url('/v0/:baseId/:tableIdOrName', {
            'baseId': baseId,
            'tableIdOrName': tableIdOrName,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
                'timeZone': timeZone,
                'userLocale': userLocale,
                'pageSize': pageSize,
                'maxRecords': maxRecords,
                'offset': offset,
                'view': view,
                'sort': sort,
                'filterByFormula': filterByFormula,
                'cellFormat': cellFormat,
                'fields': fields,
                'returnFieldsByFieldId': returnFieldsByFieldId,
                'recordMetadata': recordMetadata,
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<RecordCollection>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * Retrieve a single record. Any "empty" fields (e.g. "", [], or false) in the record will not be returned.
     *
     * @returns {Promise<Record>}
     * @throws {ClientException}
     */
    public async get(baseId: string, tableIdOrName: string, recordId: string): Promise<Record> {
        const url = this.parser.url('/v0/:baseId/:tableIdOrName/:recordId', {
            'baseId': baseId,
            'tableIdOrName': tableIdOrName,
            'recordId': recordId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<Record>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * Updates a single record. Table names and table ids can be used interchangeably. We recommend using table IDs so you don't need to modify your API request when your table name changes.
     *
     * @returns {Promise<Record>}
     * @throws {ClientException}
     */
    public async replace(baseId: string, tableIdOrName: string, recordId: string, payload: Record): Promise<Record> {
        const url = this.parser.url('/v0/:baseId/:tableIdOrName/:recordId', {
            'baseId': baseId,
            'tableIdOrName': tableIdOrName,
            'recordId': recordId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'PUT',
            params: this.parser.query({
            }, [
            ]),
            data: payload
        };

        try {
            const response = await this.httpClient.request<Record>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * Updates a single record. Table names and table ids can be used interchangeably. We recommend using table IDs so you don't need to modify your API request when your table name changes.
     *
     * @returns {Promise<Record>}
     * @throws {ClientException}
     */
    public async update(baseId: string, tableIdOrName: string, recordId: string, payload: Record): Promise<Record> {
        const url = this.parser.url('/v0/:baseId/:tableIdOrName/:recordId', {
            'baseId': baseId,
            'tableIdOrName': tableIdOrName,
            'recordId': recordId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'PATCH',
            params: this.parser.query({
            }, [
            ]),
            data: payload
        };

        try {
            const response = await this.httpClient.request<Record>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }


}

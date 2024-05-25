/**
 * TablesTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {Table} from "./Table";

export class TablesTag extends TagAbstract {
    /**
     * Creates a new table and returns the schema for the newly created table.
     *
     * @returns {Promise<Table>}
     * @throws {ClientException}
     */
    public async create(baseId: string, payload: Table): Promise<Table> {
        const url = this.parser.url('/v0/meta/bases/:baseId/tables', {
            'baseId': baseId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'POST',
            params: this.parser.query({
            }, [
            ]),
            data: payload
        };

        try {
            const response = await this.httpClient.request<Table>(params);
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
     * @returns {Promise<Table>}
     * @throws {ClientException}
     */
    public async update(baseId: string, tableIdOrName: string, payload: Table): Promise<Table> {
        const url = this.parser.url('/v0/meta/bases/:baseId/tables/:tableIdOrName', {
            'baseId': baseId,
            'tableIdOrName': tableIdOrName,
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
            const response = await this.httpClient.request<Table>(params);
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
/**
 * FieldsTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {ErrorException} from "./ErrorException";
import {Field} from "./Field";

export class FieldsTag extends TagAbstract {
    /**
     * Creates a new column and returns the schema for the newly created column.
     *
     * @returns {Promise<Field>}
     * @throws {ErrorException}
     * @throws {ClientException}
     */
    public async create(baseId: string, tableId: string, payload: Field): Promise<Field> {
        const url = this.parser.url('/v0/meta/bases/:baseId/tables/:tableId/fields', {
            'baseId': baseId,
            'tableId': tableId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            params: this.parser.query({
            }, [
            ]),
            data: payload
        };

        try {
            const response = await this.httpClient.request<Field>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                const statusCode = error.response.status;

                if (statusCode === 400) {
                    throw new ErrorException(error.response.data);
                }

                if (statusCode === 403) {
                    throw new ErrorException(error.response.data);
                }

                if (statusCode === 404) {
                    throw new ErrorException(error.response.data);
                }

                if (statusCode === 500) {
                    throw new ErrorException(error.response.data);
                }

                throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * Updates the name and/or description of a field. At least one of name or description must be specified.
     *
     * @returns {Promise<Field>}
     * @throws {ErrorException}
     * @throws {ClientException}
     */
    public async update(baseId: string, tableId: string, columnId: string, payload: Field): Promise<Field> {
        const url = this.parser.url('/v0/meta/bases/:baseId/tables/:tableId/fields/:columnId', {
            'baseId': baseId,
            'tableId': tableId,
            'columnId': columnId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            params: this.parser.query({
            }, [
            ]),
            data: payload
        };

        try {
            const response = await this.httpClient.request<Field>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                const statusCode = error.response.status;

                if (statusCode === 400) {
                    throw new ErrorException(error.response.data);
                }

                if (statusCode === 403) {
                    throw new ErrorException(error.response.data);
                }

                if (statusCode === 404) {
                    throw new ErrorException(error.response.data);
                }

                if (statusCode === 500) {
                    throw new ErrorException(error.response.data);
                }

                throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }


}

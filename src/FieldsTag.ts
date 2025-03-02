/**
 * FieldsTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {TagAbstract, HttpRequest} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {Error} from "./Error";
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

        let request: HttpRequest = {
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

        const response = await this.httpClient.request(request);
        if (response.ok) {
            return await response.json() as Field;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new ErrorException(await response.json() as Error);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
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

        let request: HttpRequest = {
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

        const response = await this.httpClient.request(request);
        if (response.ok) {
            return await response.json() as Field;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new ErrorException(await response.json() as Error);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }



}

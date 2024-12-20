/**
 * CommentsTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {Comment} from "./Comment";
import {CommentCollection} from "./CommentCollection";
import {DeleteResponse} from "./DeleteResponse";
import {ErrorException} from "./ErrorException";

export class CommentsTag extends TagAbstract {
    /**
     * Returns a list of comments for the record from newest to oldest.
     *
     * @returns {Promise<CommentCollection>}
     * @throws {ErrorException}
     * @throws {ClientException}
     */
    public async getAll(baseId: string, tableIdOrName: string, recordId: string): Promise<CommentCollection> {
        const url = this.parser.url('/v0/:baseId/:tableIdOrName/:recordId/comments', {
            'baseId': baseId,
            'tableIdOrName': tableIdOrName,
            'recordId': recordId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            headers: {
            },
            params: this.parser.query({
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<CommentCollection>(params);
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
     * Creates a comment on a record. User mentioned is supported.
     *
     * @returns {Promise<Comment>}
     * @throws {ErrorException}
     * @throws {ClientException}
     */
    public async create(baseId: string, tableIdOrName: string, recordId: string, payload: Comment): Promise<Comment> {
        const url = this.parser.url('/v0/:baseId/:tableIdOrName/:recordId/comments', {
            'baseId': baseId,
            'tableIdOrName': tableIdOrName,
            'recordId': recordId,
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
            const response = await this.httpClient.request<Comment>(params);
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
     * Updates a comment on a record. API users can only update comments they have created. User mentioned is supported.
     *
     * @returns {Promise<Comment>}
     * @throws {ErrorException}
     * @throws {ClientException}
     */
    public async update(baseId: string, tableIdOrName: string, recordId: string, rowCommentId: string, payload: Comment): Promise<Comment> {
        const url = this.parser.url('/v0/:baseId/:tableIdOrName/:recordId/comments/:rowCommentId', {
            'baseId': baseId,
            'tableIdOrName': tableIdOrName,
            'recordId': recordId,
            'rowCommentId': rowCommentId,
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
            const response = await this.httpClient.request<Comment>(params);
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
     * Deletes a comment from a record. Non-admin API users can only delete comments they have created. Enterprise Admins can delete any comment from a record.
     *
     * @returns {Promise<DeleteResponse>}
     * @throws {ErrorException}
     * @throws {ClientException}
     */
    public async delete(baseId: string, tableIdOrName: string, recordId: string, rowCommentId: string): Promise<DeleteResponse> {
        const url = this.parser.url('/v0/:baseId/:tableIdOrName/:recordId/comments/:rowCommentId', {
            'baseId': baseId,
            'tableIdOrName': tableIdOrName,
            'recordId': recordId,
            'rowCommentId': rowCommentId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'DELETE',
            headers: {
            },
            params: this.parser.query({
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<DeleteResponse>(params);
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

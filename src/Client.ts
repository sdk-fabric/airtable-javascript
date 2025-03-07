/**
 * Client automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {ClientAbstract, CredentialsInterface, TokenStoreInterface, HttpRequest} from "sdkgen-client"
import {HttpBearer} from "sdkgen-client"
import {Anonymous} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {MetaTag} from "./MetaTag";
import {RecordsTag} from "./RecordsTag";
import {FieldsTag} from "./FieldsTag";
import {TablesTag} from "./TablesTag";
import {CommentsTag} from "./CommentsTag";

export class Client extends ClientAbstract {
    public meta(): MetaTag
    {
        return new MetaTag(
            this.httpClient,
            this.parser
        );
    }

    public records(): RecordsTag
    {
        return new RecordsTag(
            this.httpClient,
            this.parser
        );
    }

    public fields(): FieldsTag
    {
        return new FieldsTag(
            this.httpClient,
            this.parser
        );
    }

    public tables(): TablesTag
    {
        return new TablesTag(
            this.httpClient,
            this.parser
        );
    }

    public comments(): CommentsTag
    {
        return new CommentsTag(
            this.httpClient,
            this.parser
        );
    }



    public static build(token: string): Client
    {
        return new Client('https://api.airtable.com/', new HttpBearer(token));
    }

    public static buildAnonymous(): Client
    {
        return new Client('https://api.airtable.com/', new Anonymous());
    }
}

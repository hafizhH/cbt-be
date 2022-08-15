/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/inferschematype" />
declare const _exports: {
    new <DocType = {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>(doc?: DocType, fields?: any, options?: boolean | mongoose.AnyObject): mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    };
    aggregate<R = any>(pipeline?: mongoose.PipelineStage[], options?: import("mongodb").AggregateOptions, callback?: mongoose.Callback<R[]>): mongoose.Aggregate<R[]>;
    aggregate<R_1 = any>(pipeline: mongoose.PipelineStage[], callback?: mongoose.Callback<R_1[]>): mongoose.Aggregate<R_1[]>;
    base: typeof mongoose;
    baseModelName: string;
    bulkWrite(writes: import("mongodb").AnyBulkWriteOperation<import("bson").Document>[], options: import("mongodb").BulkWriteOptions & mongoose.MongooseBulkWriteOptions, callback: mongoose.Callback<import("mongodb").BulkWriteResult>): void;
    bulkWrite(writes: import("mongodb").AnyBulkWriteOperation<import("bson").Document>[], callback: mongoose.Callback<import("mongodb").BulkWriteResult>): void;
    bulkWrite(writes: import("mongodb").AnyBulkWriteOperation<import("bson").Document>[], options?: import("mongodb").BulkWriteOptions & mongoose.MongooseBulkWriteOptions): Promise<import("mongodb").BulkWriteResult>;
    bulkSave(documents: mongoose.Document<any, any, any>[], options?: import("mongodb").BulkWriteOptions): Promise<import("mongodb").BulkWriteResult>;
    collection: mongoose.Collection<import("bson").Document>;
    count(callback?: mongoose.Callback<number>): mongoose.Query<number, mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    count(filter: mongoose.FilterQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, callback?: mongoose.Callback<number>): mongoose.Query<number, mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    countDocuments(filter: mongoose.FilterQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, options?: mongoose.QueryOptions<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, callback?: mongoose.Callback<number>): mongoose.Query<number, mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    countDocuments(callback?: mongoose.Callback<number>): mongoose.Query<number, mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    create<DocContents = mongoose.AnyKeys<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>>(docs: ({
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } | DocContents)[], options?: mongoose.SaveOptions): Promise<(mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    })[]>;
    create<DocContents_1 = mongoose.AnyKeys<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>>(docs: ({
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } | DocContents_1)[], callback: mongoose.Callback<(mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    })[]>): void;
    create<DocContents_2 = mongoose.AnyKeys<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>>(doc: {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } | DocContents_2): Promise<mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }>;
    create<DocContents_3 = mongoose.AnyKeys<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>>(...docs: ({
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } | DocContents_3)[]): Promise<(mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    })[]>;
    create<DocContents_4 = mongoose.AnyKeys<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>>(doc: {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } | DocContents_4, callback: mongoose.Callback<mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }>): void;
    createCollection<T extends import("bson").Document>(options: import("mongodb").CreateCollectionOptions & Pick<mongoose.SchemaOptions<"type", unknown, {}, {}, {}, {}>, "expires">, callback: mongoose.Callback<import("mongodb").Collection<T>>): void;
    createCollection<T_1 extends import("bson").Document>(callback: mongoose.Callback<import("mongodb").Collection<T_1>>): void;
    createCollection<T_2 extends import("bson").Document>(options?: import("mongodb").CreateCollectionOptions & Pick<mongoose.SchemaOptions<"type", unknown, {}, {}, {}, {}>, "expires">): Promise<import("mongodb").Collection<T_2>>;
    db: mongoose.Connection;
    deleteMany(filter?: mongoose.FilterQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, options?: mongoose.QueryOptions<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, callback?: mongoose.CallbackWithoutResult): mongoose.Query<import("mongodb").DeleteResult, mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    deleteMany(filter: mongoose.FilterQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, callback: mongoose.CallbackWithoutResult): mongoose.Query<import("mongodb").DeleteResult, mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    deleteMany(callback: mongoose.CallbackWithoutResult): mongoose.Query<import("mongodb").DeleteResult, mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    deleteOne(filter?: mongoose.FilterQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, options?: mongoose.QueryOptions<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, callback?: mongoose.CallbackWithoutResult): mongoose.Query<import("mongodb").DeleteResult, mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    deleteOne(filter: mongoose.FilterQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, callback: mongoose.CallbackWithoutResult): mongoose.Query<import("mongodb").DeleteResult, mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    deleteOne(callback: mongoose.CallbackWithoutResult): mongoose.Query<import("mongodb").DeleteResult, mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    events: NodeJS.EventEmitter;
    findById<ResultDoc = mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(id: any, projection?: mongoose.ProjectionType<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, options?: mongoose.QueryOptions<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, callback?: mongoose.Callback<ResultDoc>): mongoose.Query<ResultDoc, ResultDoc, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    findById<ResultDoc_1 = mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(id: any, projection?: mongoose.ProjectionType<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, callback?: mongoose.Callback<ResultDoc_1>): mongoose.Query<ResultDoc_1, ResultDoc_1, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    findOne<ResultDoc_2 = mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter?: mongoose.FilterQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, projection?: mongoose.ProjectionType<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, options?: mongoose.QueryOptions<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, callback?: mongoose.Callback<ResultDoc_2>): mongoose.Query<ResultDoc_2, ResultDoc_2, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    findOne<ResultDoc_3 = mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter?: mongoose.FilterQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, projection?: mongoose.ProjectionType<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, callback?: mongoose.Callback<ResultDoc_3>): mongoose.Query<ResultDoc_3, ResultDoc_3, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    findOne<ResultDoc_4 = mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter?: mongoose.FilterQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, callback?: mongoose.Callback<ResultDoc_4>): mongoose.Query<ResultDoc_4, ResultDoc_4, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    hydrate(obj: any): mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    };
    init(callback?: mongoose.CallbackWithoutResult): Promise<mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }>;
    insertMany<DocContents_5 = {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>(docs: ({
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } | DocContents_5)[], options: mongoose.InsertManyOptions & {
        lean: true;
    }, callback: mongoose.Callback<mongoose.MergeType<mongoose.MergeType<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }, DocContents_5>, {
        _id: mongoose.Types.ObjectId;
    }>[]>): void;
    insertMany<DocContents_6 = {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>(docs: ({
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } | DocContents_6)[], options: mongoose.InsertManyOptions & {
        rawResult: true;
    }, callback: mongoose.Callback<import("mongodb").InsertManyResult<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>>): void;
    insertMany<DocContents_7 = {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>(docs: ({
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } | DocContents_7)[], callback: mongoose.Callback<mongoose.HydratedDocument<mongoose.MergeType<mongoose.MergeType<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }, DocContents_7>, {
        _id: mongoose.Types.ObjectId;
    }>, {}, {}>[]>): void;
    insertMany<DocContents_8 = {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>(doc: DocContents_8, options: mongoose.InsertManyOptions & {
        lean: true;
    }, callback: mongoose.Callback<mongoose.MergeType<mongoose.MergeType<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }, DocContents_8>, {
        _id: mongoose.Types.ObjectId;
    }>[]>): void;
    insertMany<DocContents_9 = {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>(doc: DocContents_9, options: mongoose.InsertManyOptions & {
        rawResult: true;
    }, callback: mongoose.Callback<import("mongodb").InsertManyResult<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>>): void;
    insertMany<DocContents_10 = {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>(doc: DocContents_10, options: mongoose.InsertManyOptions & {
        lean?: false;
    }, callback: mongoose.Callback<mongoose.HydratedDocument<mongoose.MergeType<mongoose.MergeType<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }, DocContents_10>, {
        _id: mongoose.Types.ObjectId;
    }>, {}, {}>[]>): void;
    insertMany<DocContents_11 = {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>(doc: DocContents_11, callback: mongoose.Callback<mongoose.HydratedDocument<mongoose.MergeType<mongoose.MergeType<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }, DocContents_11>, {
        _id: mongoose.Types.ObjectId;
    }>, {}, {}>[]>): void;
    insertMany<DocContents_12 = {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>(docs: ({
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } | DocContents_12)[], options: mongoose.InsertManyOptions & {
        lean: true;
    }): Promise<mongoose.MergeType<mongoose.MergeType<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }, DocContents_12>, {
        _id: mongoose.Types.ObjectId;
    }>[]>;
    insertMany<DocContents_13 = {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>(docs: ({
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } | DocContents_13)[], options: mongoose.InsertManyOptions & {
        rawResult: true;
    }): Promise<import("mongodb").InsertManyResult<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>>;
    insertMany<DocContents_14 = {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>(docs: ({
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } | DocContents_14)[]): Promise<mongoose.HydratedDocument<mongoose.MergeType<mongoose.MergeType<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }, DocContents_14>, {
        _id: mongoose.Types.ObjectId;
    }>, {}, {}>[]>;
    insertMany<DocContents_15 = {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>(doc: DocContents_15, options: mongoose.InsertManyOptions & {
        lean: true;
    }): Promise<mongoose.MergeType<mongoose.MergeType<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }, DocContents_15>, {
        _id: mongoose.Types.ObjectId;
    }>[]>;
    insertMany<DocContents_16 = {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>(doc: DocContents_16, options: mongoose.InsertManyOptions & {
        rawResult: true;
    }): Promise<import("mongodb").InsertManyResult<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>>;
    insertMany<DocContents_17 = {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>(doc: DocContents_17, options: mongoose.InsertManyOptions): Promise<mongoose.HydratedDocument<mongoose.MergeType<mongoose.MergeType<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }, DocContents_17>, {
        _id: mongoose.Types.ObjectId;
    }>, {}, {}>[]>;
    insertMany<DocContents_18 = {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>(doc: DocContents_18): Promise<mongoose.HydratedDocument<mongoose.MergeType<mongoose.MergeType<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }, DocContents_18>, {
        _id: mongoose.Types.ObjectId;
    }>, {}, {}>[]>;
    modelName: string;
    populate(docs: any[], options: string | mongoose.PopulateOptions | mongoose.PopulateOptions[], callback?: mongoose.Callback<(mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    })[]>): Promise<(mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    })[]>;
    populate(doc: any, options: string | mongoose.PopulateOptions | mongoose.PopulateOptions[], callback?: mongoose.Callback<mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }>): Promise<mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }>;
    validate(callback?: mongoose.CallbackWithoutResult): Promise<void>;
    validate(optional: any, callback?: mongoose.CallbackWithoutResult): Promise<void>;
    validate(optional: any, pathsToValidate: mongoose.PathsToValidate, callback?: mongoose.CallbackWithoutResult): Promise<void>;
    watch<ResultType extends import("bson").Document = any>(pipeline?: Record<string, unknown>[], options?: import("mongodb").ChangeStreamOptions): import("mongodb").ChangeStream<ResultType, import("mongodb").ChangeStreamDocument<ResultType>>;
    $where(argument: string | Function): mongoose.Query<(mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    })[], mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    discriminators: {
        [name: string]: mongoose.Model<any, {}, {}, {}, any>;
    };
    translateAliases(raw: any): any;
    distinct<ReturnType_1 = any>(field: string, filter?: mongoose.FilterQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, callback?: mongoose.Callback<number>): mongoose.Query<ReturnType_1[], mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    estimatedDocumentCount(options?: mongoose.QueryOptions<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, callback?: mongoose.Callback<number>): mongoose.Query<number, mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    exists(filter: mongoose.FilterQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, callback: mongoose.Callback<Pick<mongoose.Document<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }, any, any>, "_id">>): mongoose.Query<Pick<mongoose.Document<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }, any, any>, "_id">, mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    exists(filter: mongoose.FilterQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>): mongoose.Query<Pick<mongoose.Document<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }, any, any>, "_id">, mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    find<ResultDoc_5 = mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter: mongoose.FilterQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, projection?: mongoose.ProjectionType<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, options?: mongoose.QueryOptions<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, callback?: mongoose.Callback<ResultDoc_5[]>): mongoose.Query<ResultDoc_5[], ResultDoc_5, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    find<ResultDoc_6 = mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter: mongoose.FilterQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, projection?: mongoose.ProjectionType<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, callback?: mongoose.Callback<ResultDoc_6[]>): mongoose.Query<ResultDoc_6[], ResultDoc_6, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    find<ResultDoc_7 = mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter: mongoose.FilterQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, callback?: mongoose.Callback<ResultDoc_7[]>): mongoose.Query<ResultDoc_7[], ResultDoc_7, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    find<ResultDoc_8 = mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(callback?: mongoose.Callback<ResultDoc_8[]>): mongoose.Query<ResultDoc_8[], ResultDoc_8, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    findByIdAndDelete<ResultDoc_9 = mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(id?: any, options?: mongoose.QueryOptions<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, callback?: (err: NativeError, doc: ResultDoc_9, res: any) => void): mongoose.Query<ResultDoc_9, ResultDoc_9, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    findByIdAndRemove<ResultDoc_10 = mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(id?: any, options?: mongoose.QueryOptions<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, callback?: (err: NativeError, doc: ResultDoc_10, res: any) => void): mongoose.Query<ResultDoc_10, ResultDoc_10, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    findByIdAndUpdate<ResultDoc_11 = mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(id: any, update: mongoose.UpdateQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, options: mongoose.QueryOptions<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        rawResult: true;
    }, callback?: (err: NativeError, doc: any, res: any) => void): mongoose.Query<mongoose.ModifyResult<ResultDoc_11>, ResultDoc_11, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    findByIdAndUpdate<ResultDoc_12 = mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(id: any, update: mongoose.UpdateQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, options: mongoose.QueryOptions<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        upsert: true;
    } & mongoose.ReturnsNewDoc, callback?: (err: NativeError, doc: ResultDoc_12, res: any) => void): mongoose.Query<ResultDoc_12, ResultDoc_12, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    findByIdAndUpdate<ResultDoc_13 = mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(id?: any, update?: mongoose.UpdateQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, options?: mongoose.QueryOptions<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, callback?: (err: NativeError, doc: ResultDoc_13, res: any) => void): mongoose.Query<ResultDoc_13, ResultDoc_13, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    findByIdAndUpdate<ResultDoc_14 = mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(id: any, update: mongoose.UpdateQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, callback: (err: NativeError, doc: ResultDoc_14, res: any) => void): mongoose.Query<ResultDoc_14, ResultDoc_14, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    findOneAndDelete<ResultDoc_15 = mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter?: mongoose.FilterQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, options?: mongoose.QueryOptions<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, callback?: (err: NativeError, doc: ResultDoc_15, res: any) => void): mongoose.Query<ResultDoc_15, ResultDoc_15, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    findOneAndRemove<ResultDoc_16 = mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter?: mongoose.FilterQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, options?: mongoose.QueryOptions<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, callback?: (err: NativeError, doc: ResultDoc_16, res: any) => void): mongoose.Query<ResultDoc_16, ResultDoc_16, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    findOneAndReplace<ResultDoc_17 = mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter: mongoose.FilterQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, replacement: mongoose.AnyObject | {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }, options: mongoose.QueryOptions<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        rawResult: true;
    }, callback?: (err: NativeError, doc: any, res: any) => void): mongoose.Query<mongoose.ModifyResult<ResultDoc_17>, ResultDoc_17, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    findOneAndReplace<ResultDoc_18 = mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter: mongoose.FilterQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, replacement: mongoose.AnyObject | {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }, options: mongoose.QueryOptions<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        upsert: true;
    } & mongoose.ReturnsNewDoc, callback?: (err: NativeError, doc: ResultDoc_18, res: any) => void): mongoose.Query<ResultDoc_18, ResultDoc_18, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    findOneAndReplace<ResultDoc_19 = mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter?: mongoose.FilterQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, replacement?: mongoose.AnyObject | {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }, options?: mongoose.QueryOptions<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, callback?: (err: NativeError, doc: ResultDoc_19, res: any) => void): mongoose.Query<ResultDoc_19, ResultDoc_19, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    findOneAndUpdate<ResultDoc_20 = mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter: mongoose.FilterQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, update: mongoose.UpdateQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, options: mongoose.QueryOptions<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        rawResult: true;
    }, callback?: (err: NativeError, doc: any, res: any) => void): mongoose.Query<mongoose.ModifyResult<ResultDoc_20>, ResultDoc_20, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    findOneAndUpdate<ResultDoc_21 = mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter: mongoose.FilterQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, update: mongoose.UpdateQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, options: mongoose.QueryOptions<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        upsert: true;
    } & mongoose.ReturnsNewDoc, callback?: (err: NativeError, doc: ResultDoc_21, res: any) => void): mongoose.Query<ResultDoc_21, ResultDoc_21, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    findOneAndUpdate<ResultDoc_22 = mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter?: mongoose.FilterQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, update?: mongoose.UpdateQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, options?: mongoose.QueryOptions<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, callback?: (err: NativeError, doc: {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }, res: any) => void): mongoose.Query<ResultDoc_22, ResultDoc_22, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    geoSearch<ResultDoc_23 = mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter?: mongoose.FilterQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, options?: mongoose.GeoSearchOptions, callback?: mongoose.Callback<ResultDoc_23[]>): mongoose.Query<ResultDoc_23[], ResultDoc_23, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    mapReduce<Key, Value>(o: mongoose.MapReduceOptions<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }, Key, Value>, callback?: mongoose.Callback<any>): Promise<any>;
    remove<ResultDoc_24 = mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter?: any, callback?: mongoose.CallbackWithoutResult): mongoose.Query<any, ResultDoc_24, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    replaceOne<ResultDoc_25 = mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter?: mongoose.FilterQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, replacement?: mongoose.AnyObject | {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }, options?: mongoose.QueryOptions<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, callback?: mongoose.Callback<any>): mongoose.Query<any, ResultDoc_25, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    schema: mongoose.Schema<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }, mongoose.Model<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }, any, any, any, any>, {}, {}, any, {}, "type", {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    update<ResultDoc_26 = mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter?: mongoose.FilterQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, update?: mongoose.UpdateWithAggregationPipeline | mongoose.UpdateQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, options?: mongoose.QueryOptions<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, callback?: mongoose.Callback<any>): mongoose.Query<import("mongodb").UpdateResult, ResultDoc_26, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    updateMany<ResultDoc_27 = mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter?: mongoose.FilterQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, update?: mongoose.UpdateWithAggregationPipeline | mongoose.UpdateQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, options?: mongoose.QueryOptions<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, callback?: mongoose.Callback<any>): mongoose.Query<import("mongodb").UpdateResult, ResultDoc_27, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    updateOne<ResultDoc_28 = mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter?: mongoose.FilterQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, update?: mongoose.UpdateWithAggregationPipeline | mongoose.UpdateQuery<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, options?: mongoose.QueryOptions<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>, callback?: mongoose.Callback<any>): mongoose.Query<import("mongodb").UpdateResult, ResultDoc_28, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    where<ResultDoc_29 = mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(path: string, val?: any): mongoose.Query<ResultDoc_29[], ResultDoc_29, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    where<ResultDoc_30 = mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(obj: object): mongoose.Query<ResultDoc_30[], ResultDoc_30, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    where<ResultDoc_31 = mongoose.Document<unknown, any, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }> & {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(): mongoose.Query<ResultDoc_31[], ResultDoc_31, {}, {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>;
    addListener(eventName: string | symbol, listener: (...args: any[]) => void): mongoose.Model<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>>;
    on(eventName: string | symbol, listener: (...args: any[]) => void): mongoose.Model<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>>;
    once(eventName: string | symbol, listener: (...args: any[]) => void): mongoose.Model<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>>;
    removeListener(eventName: string | symbol, listener: (...args: any[]) => void): mongoose.Model<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>>;
    off(eventName: string | symbol, listener: (...args: any[]) => void): mongoose.Model<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>>;
    removeAllListeners(event?: string | symbol): mongoose.Model<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>>;
    setMaxListeners(n: number): mongoose.Model<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>>;
    getMaxListeners(): number;
    listeners(eventName: string | symbol): Function[];
    rawListeners(eventName: string | symbol): Function[];
    emit(eventName: string | symbol, ...args: any[]): boolean;
    listenerCount(eventName: string | symbol): number;
    prependListener(eventName: string | symbol, listener: (...args: any[]) => void): mongoose.Model<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>>;
    prependOnceListener(eventName: string | symbol, listener: (...args: any[]) => void): mongoose.Model<{
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
        googleId: string;
        email: string;
        name?: string;
        photoUrl?: string;
        province?: string;
        regency?: string;
        school?: string;
        token?: string;
        isAdmin?: boolean;
    }>>;
    eventNames(): (string | symbol)[];
    discriminator<D>(name: string | number, schema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
        [x: string]: any;
    }>, value?: string | number | mongoose.Schema.Types.ObjectId): mongoose.Model<D, {}, {}, {}, any>;
    discriminator<T_3, U>(name: string | number, schema: mongoose.Schema<T_3, U, {}, {}, any, {}, "type", mongoose.ObtainDocumentType<any, T_3, "type">>, value?: string | number | mongoose.Schema.Types.ObjectId): U;
    createIndexes(options: import("mongodb").CreateIndexesOptions, callback: mongoose.CallbackWithoutResult): void;
    createIndexes(callback: mongoose.CallbackWithoutResult): void;
    createIndexes(options?: import("mongodb").CreateIndexesOptions): Promise<void>;
    diffIndexes(options: Record<string, unknown>, callback: mongoose.Callback<mongoose.IndexesDiff>): void;
    diffIndexes(callback: mongoose.Callback<mongoose.IndexesDiff>): void;
    diffIndexes(options?: Record<string, unknown>): Promise<mongoose.IndexesDiff>;
    ensureIndexes(options: import("mongodb").CreateIndexesOptions, callback: mongoose.CallbackWithoutResult): void;
    ensureIndexes(callback: mongoose.CallbackWithoutResult): void;
    ensureIndexes(options?: import("mongodb").CreateIndexesOptions): Promise<void>;
    listIndexes(callback: mongoose.Callback<any[]>): void;
    listIndexes(): Promise<any[]>;
    syncIndexes(options: mongoose.SyncIndexesOptions, callback: mongoose.Callback<string[]>): void;
    syncIndexes(options?: mongoose.SyncIndexesOptions): Promise<string[]>;
    startSession(options: import("mongodb").ClientSessionOptions, callback: mongoose.Callback<import("mongodb").ClientSession>): void;
    startSession(callback: mongoose.Callback<import("mongodb").ClientSession>): void;
    startSession(options?: import("mongodb").ClientSessionOptions): Promise<import("mongodb").ClientSession>;
};
export = _exports;
import mongoose = require("mongoose");
//# sourceMappingURL=Users.d.ts.map
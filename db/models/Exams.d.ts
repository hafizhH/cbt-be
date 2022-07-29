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
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>(doc?: DocType, fields?: any, options?: boolean | mongoose.AnyObject): mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
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
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    count(filter: mongoose.FilterQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, callback?: mongoose.Callback<number>): mongoose.Query<number, mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    countDocuments(filter: mongoose.FilterQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, options?: mongoose.QueryOptions<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, callback?: mongoose.Callback<number>): mongoose.Query<number, mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    countDocuments(callback?: mongoose.Callback<number>): mongoose.Query<number, mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    create<DocContents = mongoose.AnyKeys<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>>(docs: ({
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } | DocContents)[], options?: mongoose.SaveOptions): Promise<(mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    })[]>;
    create<DocContents_1 = mongoose.AnyKeys<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>>(docs: ({
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } | DocContents_1)[], callback: mongoose.Callback<(mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    })[]>): void;
    create<DocContents_2 = mongoose.AnyKeys<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>>(doc: {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } | DocContents_2): Promise<mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>;
    create<DocContents_3 = mongoose.AnyKeys<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>>(...docs: ({
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } | DocContents_3)[]): Promise<(mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    })[]>;
    create<DocContents_4 = mongoose.AnyKeys<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>>(doc: {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } | DocContents_4, callback: mongoose.Callback<mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>): void;
    createCollection<T extends import("bson").Document>(options: import("mongodb").CreateCollectionOptions & Pick<mongoose.SchemaOptions<"type", unknown, {}, {}, {}, {}>, "expires">, callback: mongoose.Callback<import("mongodb").Collection<T>>): void;
    createCollection<T_1 extends import("bson").Document>(callback: mongoose.Callback<import("mongodb").Collection<T_1>>): void;
    createCollection<T_2 extends import("bson").Document>(options?: import("mongodb").CreateCollectionOptions & Pick<mongoose.SchemaOptions<"type", unknown, {}, {}, {}, {}>, "expires">): Promise<import("mongodb").Collection<T_2>>;
    db: mongoose.Connection;
    deleteMany(filter?: mongoose.FilterQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, options?: mongoose.QueryOptions<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, callback?: mongoose.CallbackWithoutResult): mongoose.Query<import("mongodb").DeleteResult, mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    deleteMany(filter: mongoose.FilterQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, callback: mongoose.CallbackWithoutResult): mongoose.Query<import("mongodb").DeleteResult, mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    deleteMany(callback: mongoose.CallbackWithoutResult): mongoose.Query<import("mongodb").DeleteResult, mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    deleteOne(filter?: mongoose.FilterQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, options?: mongoose.QueryOptions<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, callback?: mongoose.CallbackWithoutResult): mongoose.Query<import("mongodb").DeleteResult, mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    deleteOne(filter: mongoose.FilterQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, callback: mongoose.CallbackWithoutResult): mongoose.Query<import("mongodb").DeleteResult, mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    deleteOne(callback: mongoose.CallbackWithoutResult): mongoose.Query<import("mongodb").DeleteResult, mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    events: NodeJS.EventEmitter;
    findById<ResultDoc = mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(id: any, projection?: mongoose.ProjectionType<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, options?: mongoose.QueryOptions<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, callback?: mongoose.Callback<ResultDoc>): mongoose.Query<ResultDoc, ResultDoc, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    findById<ResultDoc_1 = mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(id: any, projection?: mongoose.ProjectionType<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, callback?: mongoose.Callback<ResultDoc_1>): mongoose.Query<ResultDoc_1, ResultDoc_1, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    findOne<ResultDoc_2 = mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter?: mongoose.FilterQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, projection?: mongoose.ProjectionType<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, options?: mongoose.QueryOptions<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, callback?: mongoose.Callback<ResultDoc_2>): mongoose.Query<ResultDoc_2, ResultDoc_2, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    findOne<ResultDoc_3 = mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter?: mongoose.FilterQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, projection?: mongoose.ProjectionType<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, callback?: mongoose.Callback<ResultDoc_3>): mongoose.Query<ResultDoc_3, ResultDoc_3, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    findOne<ResultDoc_4 = mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter?: mongoose.FilterQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, callback?: mongoose.Callback<ResultDoc_4>): mongoose.Query<ResultDoc_4, ResultDoc_4, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    hydrate(obj: any): mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    };
    init(callback?: mongoose.CallbackWithoutResult): Promise<mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>;
    insertMany<DocContents_5 = {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>(docs: ({
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } | DocContents_5)[], options: mongoose.InsertManyOptions & {
        lean: true;
    }, callback: mongoose.Callback<mongoose.MergeType<mongoose.MergeType<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }, DocContents_5>, {
        _id: mongoose.Types.ObjectId;
    }>[]>): void;
    insertMany<DocContents_6 = {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>(docs: ({
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } | DocContents_6)[], options: mongoose.InsertManyOptions & {
        rawResult: true;
    }, callback: mongoose.Callback<import("mongodb").InsertManyResult<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>>): void;
    insertMany<DocContents_7 = {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>(docs: ({
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } | DocContents_7)[], callback: mongoose.Callback<mongoose.HydratedDocument<mongoose.MergeType<mongoose.MergeType<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }, DocContents_7>, {
        _id: mongoose.Types.ObjectId;
    }>, {}, {}>[]>): void;
    insertMany<DocContents_8 = {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>(doc: DocContents_8, options: mongoose.InsertManyOptions & {
        lean: true;
    }, callback: mongoose.Callback<mongoose.MergeType<mongoose.MergeType<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }, DocContents_8>, {
        _id: mongoose.Types.ObjectId;
    }>[]>): void;
    insertMany<DocContents_9 = {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>(doc: DocContents_9, options: mongoose.InsertManyOptions & {
        rawResult: true;
    }, callback: mongoose.Callback<import("mongodb").InsertManyResult<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>>): void;
    insertMany<DocContents_10 = {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>(doc: DocContents_10, options: mongoose.InsertManyOptions & {
        lean?: false;
    }, callback: mongoose.Callback<mongoose.HydratedDocument<mongoose.MergeType<mongoose.MergeType<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }, DocContents_10>, {
        _id: mongoose.Types.ObjectId;
    }>, {}, {}>[]>): void;
    insertMany<DocContents_11 = {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>(doc: DocContents_11, callback: mongoose.Callback<mongoose.HydratedDocument<mongoose.MergeType<mongoose.MergeType<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }, DocContents_11>, {
        _id: mongoose.Types.ObjectId;
    }>, {}, {}>[]>): void;
    insertMany<DocContents_12 = {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>(docs: ({
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } | DocContents_12)[], options: mongoose.InsertManyOptions & {
        lean: true;
    }): Promise<mongoose.MergeType<mongoose.MergeType<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }, DocContents_12>, {
        _id: mongoose.Types.ObjectId;
    }>[]>;
    insertMany<DocContents_13 = {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>(docs: ({
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } | DocContents_13)[], options: mongoose.InsertManyOptions & {
        rawResult: true;
    }): Promise<import("mongodb").InsertManyResult<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>>;
    insertMany<DocContents_14 = {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>(docs: ({
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } | DocContents_14)[]): Promise<mongoose.HydratedDocument<mongoose.MergeType<mongoose.MergeType<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }, DocContents_14>, {
        _id: mongoose.Types.ObjectId;
    }>, {}, {}>[]>;
    insertMany<DocContents_15 = {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>(doc: DocContents_15, options: mongoose.InsertManyOptions & {
        lean: true;
    }): Promise<mongoose.MergeType<mongoose.MergeType<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }, DocContents_15>, {
        _id: mongoose.Types.ObjectId;
    }>[]>;
    insertMany<DocContents_16 = {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>(doc: DocContents_16, options: mongoose.InsertManyOptions & {
        rawResult: true;
    }): Promise<import("mongodb").InsertManyResult<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>>;
    insertMany<DocContents_17 = {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>(doc: DocContents_17, options: mongoose.InsertManyOptions): Promise<mongoose.HydratedDocument<mongoose.MergeType<mongoose.MergeType<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }, DocContents_17>, {
        _id: mongoose.Types.ObjectId;
    }>, {}, {}>[]>;
    insertMany<DocContents_18 = {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>(doc: DocContents_18): Promise<mongoose.HydratedDocument<mongoose.MergeType<mongoose.MergeType<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }, DocContents_18>, {
        _id: mongoose.Types.ObjectId;
    }>, {}, {}>[]>;
    modelName: string;
    populate(docs: any[], options: string | mongoose.PopulateOptions | mongoose.PopulateOptions[], callback?: mongoose.Callback<(mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    })[]>): Promise<(mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    })[]>;
    populate(doc: any, options: string | mongoose.PopulateOptions | mongoose.PopulateOptions[], callback?: mongoose.Callback<mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>): Promise<mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>;
    validate(callback?: mongoose.CallbackWithoutResult): Promise<void>;
    validate(optional: any, callback?: mongoose.CallbackWithoutResult): Promise<void>;
    validate(optional: any, pathsToValidate: mongoose.PathsToValidate, callback?: mongoose.CallbackWithoutResult): Promise<void>;
    watch<ResultType extends import("bson").Document = any>(pipeline?: Record<string, unknown>[], options?: import("mongodb").ChangeStreamOptions): import("mongodb").ChangeStream<ResultType, import("mongodb").ChangeStreamDocument<ResultType>>;
    $where(argument: string | Function): mongoose.Query<(mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    })[], mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    discriminators: {
        [name: string]: mongoose.Model<any, {}, {}, {}, any>;
    };
    translateAliases(raw: any): any;
    distinct<ReturnType_1 = any>(field: string, filter?: mongoose.FilterQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, callback?: mongoose.Callback<number>): mongoose.Query<ReturnType_1[], mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    estimatedDocumentCount(options?: mongoose.QueryOptions<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, callback?: mongoose.Callback<number>): mongoose.Query<number, mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    exists(filter: mongoose.FilterQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, callback: mongoose.Callback<Pick<mongoose.Document<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }, any, any>, "_id">>): mongoose.Query<Pick<mongoose.Document<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }, any, any>, "_id">, mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    exists(filter: mongoose.FilterQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>): mongoose.Query<Pick<mongoose.Document<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }, any, any>, "_id">, mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    find<ResultDoc_5 = mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter: mongoose.FilterQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, projection?: mongoose.ProjectionType<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, options?: mongoose.QueryOptions<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, callback?: mongoose.Callback<ResultDoc_5[]>): mongoose.Query<ResultDoc_5[], ResultDoc_5, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    find<ResultDoc_6 = mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter: mongoose.FilterQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, projection?: mongoose.ProjectionType<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, callback?: mongoose.Callback<ResultDoc_6[]>): mongoose.Query<ResultDoc_6[], ResultDoc_6, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    find<ResultDoc_7 = mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter: mongoose.FilterQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, callback?: mongoose.Callback<ResultDoc_7[]>): mongoose.Query<ResultDoc_7[], ResultDoc_7, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    find<ResultDoc_8 = mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(callback?: mongoose.Callback<ResultDoc_8[]>): mongoose.Query<ResultDoc_8[], ResultDoc_8, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    findByIdAndDelete<ResultDoc_9 = mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(id?: any, options?: mongoose.QueryOptions<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, callback?: (err: NativeError, doc: ResultDoc_9, res: any) => void): mongoose.Query<ResultDoc_9, ResultDoc_9, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    findByIdAndRemove<ResultDoc_10 = mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(id?: any, options?: mongoose.QueryOptions<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, callback?: (err: NativeError, doc: ResultDoc_10, res: any) => void): mongoose.Query<ResultDoc_10, ResultDoc_10, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    findByIdAndUpdate<ResultDoc_11 = mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(id: any, update: mongoose.UpdateQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, options: mongoose.QueryOptions<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        rawResult: true;
    }, callback?: (err: NativeError, doc: any, res: any) => void): mongoose.Query<mongoose.ModifyResult<ResultDoc_11>, ResultDoc_11, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    findByIdAndUpdate<ResultDoc_12 = mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(id: any, update: mongoose.UpdateQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, options: mongoose.QueryOptions<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        upsert: true;
    } & mongoose.ReturnsNewDoc, callback?: (err: NativeError, doc: ResultDoc_12, res: any) => void): mongoose.Query<ResultDoc_12, ResultDoc_12, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    findByIdAndUpdate<ResultDoc_13 = mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(id?: any, update?: mongoose.UpdateQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, options?: mongoose.QueryOptions<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, callback?: (err: NativeError, doc: ResultDoc_13, res: any) => void): mongoose.Query<ResultDoc_13, ResultDoc_13, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    findByIdAndUpdate<ResultDoc_14 = mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(id: any, update: mongoose.UpdateQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, callback: (err: NativeError, doc: ResultDoc_14, res: any) => void): mongoose.Query<ResultDoc_14, ResultDoc_14, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    findOneAndDelete<ResultDoc_15 = mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter?: mongoose.FilterQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, options?: mongoose.QueryOptions<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, callback?: (err: NativeError, doc: ResultDoc_15, res: any) => void): mongoose.Query<ResultDoc_15, ResultDoc_15, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    findOneAndRemove<ResultDoc_16 = mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter?: mongoose.FilterQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, options?: mongoose.QueryOptions<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, callback?: (err: NativeError, doc: ResultDoc_16, res: any) => void): mongoose.Query<ResultDoc_16, ResultDoc_16, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    findOneAndReplace<ResultDoc_17 = mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter: mongoose.FilterQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, replacement: mongoose.AnyObject | {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }, options: mongoose.QueryOptions<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        rawResult: true;
    }, callback?: (err: NativeError, doc: any, res: any) => void): mongoose.Query<mongoose.ModifyResult<ResultDoc_17>, ResultDoc_17, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    findOneAndReplace<ResultDoc_18 = mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter: mongoose.FilterQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, replacement: mongoose.AnyObject | {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }, options: mongoose.QueryOptions<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        upsert: true;
    } & mongoose.ReturnsNewDoc, callback?: (err: NativeError, doc: ResultDoc_18, res: any) => void): mongoose.Query<ResultDoc_18, ResultDoc_18, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    findOneAndReplace<ResultDoc_19 = mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter?: mongoose.FilterQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, replacement?: mongoose.AnyObject | {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }, options?: mongoose.QueryOptions<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, callback?: (err: NativeError, doc: ResultDoc_19, res: any) => void): mongoose.Query<ResultDoc_19, ResultDoc_19, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    findOneAndUpdate<ResultDoc_20 = mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter: mongoose.FilterQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, update: mongoose.UpdateQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, options: mongoose.QueryOptions<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        rawResult: true;
    }, callback?: (err: NativeError, doc: any, res: any) => void): mongoose.Query<mongoose.ModifyResult<ResultDoc_20>, ResultDoc_20, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    findOneAndUpdate<ResultDoc_21 = mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter: mongoose.FilterQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, update: mongoose.UpdateQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, options: mongoose.QueryOptions<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        upsert: true;
    } & mongoose.ReturnsNewDoc, callback?: (err: NativeError, doc: ResultDoc_21, res: any) => void): mongoose.Query<ResultDoc_21, ResultDoc_21, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    findOneAndUpdate<ResultDoc_22 = mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter?: mongoose.FilterQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, update?: mongoose.UpdateQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, options?: mongoose.QueryOptions<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, callback?: (err: NativeError, doc: {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }, res: any) => void): mongoose.Query<ResultDoc_22, ResultDoc_22, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    geoSearch<ResultDoc_23 = mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter?: mongoose.FilterQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, options?: mongoose.GeoSearchOptions, callback?: mongoose.Callback<ResultDoc_23[]>): mongoose.Query<ResultDoc_23[], ResultDoc_23, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    mapReduce<Key, Value>(o: mongoose.MapReduceOptions<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }, Key, Value>, callback?: mongoose.Callback<any>): Promise<any>;
    remove<ResultDoc_24 = mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter?: any, callback?: mongoose.CallbackWithoutResult): mongoose.Query<any, ResultDoc_24, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    replaceOne<ResultDoc_25 = mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter?: mongoose.FilterQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, replacement?: mongoose.AnyObject | {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }, options?: mongoose.QueryOptions<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, callback?: mongoose.Callback<any>): mongoose.Query<any, ResultDoc_25, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    schema: mongoose.Schema<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }, mongoose.Model<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }, any, any, any, any>, {}, {}, any, {}, "type", {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    update<ResultDoc_26 = mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter?: mongoose.FilterQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, update?: mongoose.UpdateWithAggregationPipeline | mongoose.UpdateQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, options?: mongoose.QueryOptions<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, callback?: mongoose.Callback<any>): mongoose.Query<import("mongodb").UpdateResult, ResultDoc_26, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    updateMany<ResultDoc_27 = mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter?: mongoose.FilterQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, update?: mongoose.UpdateWithAggregationPipeline | mongoose.UpdateQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, options?: mongoose.QueryOptions<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, callback?: mongoose.Callback<any>): mongoose.Query<import("mongodb").UpdateResult, ResultDoc_27, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    updateOne<ResultDoc_28 = mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(filter?: mongoose.FilterQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, update?: mongoose.UpdateWithAggregationPipeline | mongoose.UpdateQuery<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, options?: mongoose.QueryOptions<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>, callback?: mongoose.Callback<any>): mongoose.Query<import("mongodb").UpdateResult, ResultDoc_28, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    where<ResultDoc_29 = mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(path: string, val?: any): mongoose.Query<ResultDoc_29[], ResultDoc_29, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    where<ResultDoc_30 = mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(obj: object): mongoose.Query<ResultDoc_30[], ResultDoc_30, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    where<ResultDoc_31 = mongoose.Document<unknown, any, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }> & {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>(): mongoose.Query<ResultDoc_31[], ResultDoc_31, {}, {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>;
    addListener(eventName: string | symbol, listener: (...args: any[]) => void): mongoose.Model<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>>;
    on(eventName: string | symbol, listener: (...args: any[]) => void): mongoose.Model<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>>;
    once(eventName: string | symbol, listener: (...args: any[]) => void): mongoose.Model<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>>;
    removeListener(eventName: string | symbol, listener: (...args: any[]) => void): mongoose.Model<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>>;
    off(eventName: string | symbol, listener: (...args: any[]) => void): mongoose.Model<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>>;
    removeAllListeners(event?: string | symbol): mongoose.Model<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>>;
    setMaxListeners(n: number): mongoose.Model<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>>;
    getMaxListeners(): number;
    listeners(eventName: string | symbol): Function[];
    rawListeners(eventName: string | symbol): Function[];
    emit(eventName: string | symbol, ...args: any[]): boolean;
    listenerCount(eventName: string | symbol): number;
    prependListener(eventName: string | symbol, listener: (...args: any[]) => void): mongoose.Model<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }>>;
    prependOnceListener(eventName: string | symbol, listener: (...args: any[]) => void): mongoose.Model<{
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
    }, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
        description: string;
        title: string;
        subtitle: string;
        open_registration: string;
        close_registration: string;
        start_time: string;
        question_set: any;
        duration?: string;
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
//# sourceMappingURL=Exams.d.ts.map
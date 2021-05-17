import { dbManagerType } from '../types/dbManagerType';

/**
 * Get processed model for a model type.
 * @param dbManager Models collection already processed with respect to the database set-up, with key as model type name.
 * @param modelType The model type.
 * @returns Model of the model type, having been retrieved from the already-processed models collection.
 */
export function getProcessedModel<TModelType extends Function>(dbManager: dbManagerType, modelType: TModelType) {
    // @ts-ignore
    return dbManager[modelType.name] as TModelType;
}
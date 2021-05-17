import { dbModelsType } from '../types/dbModelsType';

/**
 * Get processed model for a model type.
 * @param dbModels Models collection already processed with respect to the database set-up, with key as model type name.
 * @param modelType The model type.
 * @returns Model of the model type, having been retrieved from the already-processed models collection.
 */
export function getProcessedModel<TModelType extends Function>(dbModels: dbModelsType, modelType: TModelType) {
    // @ts-ignore
    return dbModels[modelType.name] as TModelType;
}
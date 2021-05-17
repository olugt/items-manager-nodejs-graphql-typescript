/**
 * Get processed model for a model type.
 * @param dbModels Models collection already processed with respect to the database set-up, with key as model type name.
 * @param modelType The model type.
 * @returns Model of the model type, having been retrieved from the already-processed models collection.
 */
export function getModel<TModelType extends Function>(dbModels: any, modelType: TModelType) {
    return dbModels[modelType.name] as TModelType;
}
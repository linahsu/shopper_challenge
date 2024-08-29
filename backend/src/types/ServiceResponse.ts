export type ServiceResponseMessage = { message: string }

export type ServiceResponseErrorStatus = 'INVALID_VALUE' | 'UNAUTHORIZED' | 'NOT_FOUND' | 'UNPROCESSABLE_ENTITY';

export type ServiceResponseSuccessStatus = 'SUCCESSFUL' | 'CREATED';

export type ServiceResponseError = {
    status: ServiceResponseErrorStatus,
    data: ServiceResponseMessage,
};

export type ServiceResponseSuccessful<T> = {
    status: ServiceResponseSuccessStatus,
    data: T,
};

export type ServiceResponse<T> = ServiceResponseSuccessful<T> | ServiceResponseError;
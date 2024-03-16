import {mockApiResponse} from "../../shared/constants";
import {ApiResponse} from "../../shared/types";

export type TFetchApiResponse = () => Promise<ApiResponse>;
export const fetchApiResponse: TFetchApiResponse = async () => {
    return mockApiResponse;
}
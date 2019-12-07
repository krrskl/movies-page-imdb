import { get } from "lodash";

/**
 * Function for get the attribute of isLoading from state
 * @param {*} state The current state of store
 */
export const isSearchLoading = state => get(state, "search.isLoading");

/**
 * Function for get the attribute of movieResults of search from state
 * @param {*} state The current state of store
 */
export const movieResults = state => get(state, "search.movieResults.Search");

/**
 * Function for get the attribute of result of search by ID from state
 * @param {*} state The current state of store
 */
export const movieResult = state => get(state, "search.movieResult");

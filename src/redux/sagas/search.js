import { put, call, takeLatest } from "redux-saga/effects";
import { apiCall } from "../api";
import {
  SEARCH_MOVIE_START,
  SEARCH_MOVIE_ERROR,
  SEARCH_MOVIE_COMPLETE,
  SEARCH_MOVIE_BY_ID_ERROR,
  SEARCH_MOVIE_BY_ID_COMPLETE,
  SEARCH_MOVIE_BY_ID_START
} from "../../consts/actionTypes";

/**
 * Function for search by name of movie
 * @param {*} query attribute is required for the search 
 */
export function* searchMovie({ payload }) {
  try {
    const results = yield call(
      apiCall,
      `&s=${payload.query}`,
      null,
      null,
      "GET"
    );

    yield put({ type: SEARCH_MOVIE_COMPLETE, results });
  } catch (error) {
    yield put({ type: SEARCH_MOVIE_ERROR, error });
  }
}

/**
 * Function for search movie by ID
 * @param {*} id attribute is required for the search and equivalent to imdbID
 */
export function* searchMovieByID({ payload }) {
  try {
    const result = yield call(apiCall, `&i=${payload.id}`, null, null, "GET");

    yield put({ type: SEARCH_MOVIE_BY_ID_COMPLETE, result });
  } catch (error) {
    yield put({ type: SEARCH_MOVIE_BY_ID_ERROR, error });
  }
}

export default function* search() {
  yield takeLatest(SEARCH_MOVIE_START, searchMovie);
  yield takeLatest(SEARCH_MOVIE_BY_ID_START, searchMovieByID);
}
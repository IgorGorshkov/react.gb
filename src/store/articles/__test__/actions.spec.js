import {
  GET_ARTICLES_REQUEST,
  getArticlesRequest,
  getArticles,
  getArticlesSuccess,
} from "../actions";
// import {GET_ARTICLES_FAILURE} from "../actions";

describe("getArticlesReq", () => {
  it("should return obj with predefined type", function () {
    const expected = {
      type: GET_ARTICLES_REQUEST,
    };

    const received = getArticlesRequest();

    expect(received).toEqual(expected);
  });
});

describe("getArticles", () => {
  it("dispatches getArticleRequest", () => {
    const mockDispatch = jest.fn();
    fetch.mockResponse(JSON.stringify([]));
    getArticles()(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(getArticlesRequest());
  });

  it("dispatches getArticleSuccess with fetch result", async () => {
    const data = [{ name: "test" }];
    fetch.mockResponse(JSON.stringify(data));
    const mockDispatch = jest.fn();

    await getArticles()(mockDispatch);
    expect(mockDispatch).toHaveBeenLastCalledWith(getArticlesSuccess(data)); // right!
    // expect(mockDispatch).toHaveBeenLastCalledWith(getArticlesSuccess({})); // wrong!
  });
  // аналогичным образом можно проверить response не ok либо reject + что dispatch вызван с нужным action типа getArticlesSuccess(data)
});

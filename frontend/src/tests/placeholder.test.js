/* eslint-disable */
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";

import TestRenderer from "react-test-renderer";
import ItemPreview from "../components/ItemPreview";

const mockStore = configureStore([]);

test("Check that ItemPreview will have a placeholder for image", () => {
  const item = {
    title: "title",
    description: "description",
    seller: {
      name: "seller",
    },
    tag_list: ["tag1"],
  };

  const testRenderer = TestRenderer.create(
    <MemoryRouter>
      <Provider store={mockStore({})}>
        <ItemPreview item={item} />
      </Provider>
    </MemoryRouter>
  );

  const imgSrc = testRenderer?.root?.findByProps({
    className: "card-img-top item-img",
  })?.props?.src;

  expect(imgSrc).toBeDefined();
  expect(imgSrc.includes("placeholder")).toBeTruthy();
});

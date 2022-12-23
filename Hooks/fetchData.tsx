import { useState, useEffect } from "react";
import useSwr from "swr";
import * as yup from "yup";

export interface postsType {
  id: number;
  uid: number;
  title: string;
  body: string;
}

interface postArrayType {
  posts: postsType[];
}

const postValidationShema = yup.object().shape({
  posts: yup
    .array()
    .of(
      yup.object().shape({
        id: yup.number().required(),
        userId: yup.number().required(),
        title: yup.string().required(),
        body: yup.string().required(),
        reactions: yup.number().nullable(),
        tags: yup.array().of(yup.string()).nullable(),
      })
    )
    .required(),
});

type Error = { message: string } | null;
const urlPost = "https://dummyjson.com/posts";

const fetcher = async (url: string) => {
  try {
    const response = await fetch(url);
    const json: postArrayType = await response.json();
    await postValidationShema.validate(json, {
      abortEarly: false,
    });

    return json;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

function useData() {
  const { data, error, isLoading } = useSwr(urlPost, fetcher);
  return { data, error, isLoading };
}

export default useData;

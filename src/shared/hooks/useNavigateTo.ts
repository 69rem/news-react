import { setCurrentNews } from "@/entities/news/model/newsSlice.ts";
import type { INews } from "@/entities/news";
import { useAppDispatch } from "@/app/appStore.ts";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

export const useNavigateTo = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return useCallback(
    (news: INews) => {
      dispatch(setCurrentNews(news));
      navigate(`/news/${news.id}`);
    },
    [dispatch, navigate],
  );
};

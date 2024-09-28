import { useMyMutation, useMyQuery, instance } from "@configs/util";
import { useMutation } from "@tanstack/react-query";
import { Api, Placeholder } from "@configs/type";

/** 공지 목록 조회 API */
export const noticeList = () =>
  useMyQuery<Api.Notice.NoticeList>(
    "notice",
    "",
    Placeholder.CommonLayoutPlace
  );

/** 공지 추가 API */
export const noticeAdd = () =>
  useMyMutation<Api.Notice.noticeData, null>("post", "notice", "");

/** 공지 수정 API
 * @param onSuccess 요청 성공시 실행할 함수
 */
export const noticeEdit = (onSuccess: () => void) =>
  useMutation({
    mutationFn: ({
      path,
      items
    }: {
      path: string;
      items: Api.Notice.AddNotice;
    }) => instance.patch(`/notice/${path}`, items),
    onSuccess
  });

/** 공지 삭제 API */
export const noticeDelete = () =>
  useMyMutation<string, null>("delete", "notice", "");

/** 공지 확인 API */
export const noticeCheck = () =>
  useMyMutation<string, null>("post", "notice", "");

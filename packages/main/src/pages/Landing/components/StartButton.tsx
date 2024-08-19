export const StartButton = () => {
  return (
    <button
      className="w-fit px-4 py-3 text-body8 border-2 text-white border-white rounded-sm pointable leading-none"
      onClick={() =>
        window.location.replace(`${process.env.VITE_APP_URL_STUDENT}/login`)
      }
    >
      Repo 시작하기
    </button>
  );
};

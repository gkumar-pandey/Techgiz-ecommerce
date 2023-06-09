import { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `TechGiz | ${title}`;
  }, [title]);
};

export default useDocumentTitle;

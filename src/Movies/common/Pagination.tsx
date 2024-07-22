import _ from "lodash";

interface Props {
  pageSize: number;
  ItemsCount: number;
  onPageChange: (page: number) => void;
  currentPage: number;
}
const Pagination = ({
  onPageChange,
  currentPage,
  pageSize,
  ItemsCount,
}: Props) => {
  const pageCount = Math.ceil(ItemsCount / pageSize);
  // const pages: number[] = _.range(1, pageCount + 1);
  if (pageCount === 1) return null;
  const pages = Array.from(
    { length: pageCount },
    (_: unknown, k: number) => k + 1
  );

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            onClick={() => onPageChange(page)}
            className={`page-item cursor-pointer ${
              page === currentPage ? "active" : ""
            }`}
          >
            <a className="page-link">{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

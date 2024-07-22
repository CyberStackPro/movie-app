// import _ from 'lodash'
// export function paginate(items, currentPage, pageSize) {
//     const startIndex = (currentPage - 1) * pageSize
//     return _(items).slice(startIndex).take(pageSize).value()
// }

export function paginate(items: any, currentPage: number, pageSize: number) {
    const startIndex = (currentPage - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
}
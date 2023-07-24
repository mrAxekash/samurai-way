import * as React from 'react';
import {useState} from 'react';
import style from './Pagination.module.css'

type Props = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    portionSize: number
    onPageChanged: (page: number) => void
};

export const Pagination = (props: Props) => {
    const {totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10} = props
    const[userCount, setUserCount] = useState(1)

    let pagesCount: number = Math.ceil(totalItemsCount / pageSize)

    let pages: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionSize * portionNumber

    return (
        <div className={style.paginator}>
            {portionNumber > 1 && <button className={style.button} onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>}
            {pages.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map((p) => {
                return (
                    <span key={p}
                          className={` ${(currentPage === p ? style.selectedPage : '')} ${style.pageNumber}` }
                          onClick={() => {onPageChanged(p)}}>
                        {p}
                    </span>
                )
            })}
            {portionNumber <= portionCount && <button className={style.button} onClick={()=>setPortionNumber(portionNumber + 1)}>Next</button>}
        </div>
    );
};
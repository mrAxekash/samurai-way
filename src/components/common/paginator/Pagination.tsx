import * as React from 'react';
import style from './Pagination.module.css'

type Props = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
};

export const Pagination = (props: Props) => {
    const {totalUsersCount, pageSize, currentPage, onPageChanged} = props

    let pagesCount: number = Math.ceil(totalUsersCount / pageSize)

    let pages: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map((p) => {
                return (
                    <span key={p} className={currentPage === p ? style.selectedPage : ''} onClick={() => {
                        onPageChanged(p)
                    }}>{p}</span>
                )
            })}
        </div>
    );
};
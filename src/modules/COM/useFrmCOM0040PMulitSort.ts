// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_SortList {
    COL_ID: string;
    COL_SORT: string;
    COL_SEQ: string;
    COL_NM: string;
    COL_INDEX: string;
}

export interface Ids_Sort {
    CD: string;
    DATA: string;
}

export const useFrmCOM0040PMulitSort = () => {
    const [ds_SortList, setds_SortList] = useState<Ids_SortList[]>([]);
    const [ds_Sort, setds_Sort] = useState<Ids_Sort[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_SortList([]);
            setds_Sort([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnCancel_OnClick = () => {
        console.log('btnCancel_OnClick clicked');
    };
    const btnMoveDown_OnClick = () => {
        console.log('btnMoveDown_OnClick clicked');
    };
    const btnMoveUp_OnClick = () => {
        console.log('btnMoveUp_OnClick clicked');
    };
    const btnOK_OnClick = () => {
        console.log('btnOK_OnClick clicked');
    };

    return {
        isLoading,
        ds_SortList,
        ds_Sort,
        btnCancel_OnClick,
        btnMoveDown_OnClick,
        btnMoveUp_OnClick,
        btnOK_OnClick,
    };
};
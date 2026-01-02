// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oDetailCourseList } from './Frmcust6400P02DetailCourseListData';

export const useFrmcust6400P02DetailCourseList = () => {
    const [ds_oDetailCourseList, setds_oDetailCourseList] = useState<Ids_oDetailCourseList[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oDetailCourseList([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnCancel_OnClick = () => {
        console.log('btnCancel_OnClick clicked');
    };
    const btnSelect_OnClick = () => {
        console.log('btnSelect_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oDetailCourseList,
        btnCancel_OnClick,
        btnSelect_OnClick,
        lfn_End,
        lfn_Search,
    };
};
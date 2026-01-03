// @ts-nocheck
import { useState, useEffect } from 'react';
import type { IDS_EXCELLOAD, IDS_PARENT, IDS_CELL } from './FrmCOM2000PExcelLoadingData';

export const useFrmCOM2000PExcelLoading = () => {
    const [DS_EXCELLOAD, setDS_EXCELLOAD] = useState<IDS_EXCELLOAD[]>([]);
    const [DS_PARENT, setDS_PARENT] = useState<IDS_PARENT[]>([]);
    const [DS_CELL, setDS_CELL] = useState<IDS_CELL[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setDS_EXCELLOAD([]);
            setDS_PARENT([]);
            setDS_CELL([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnDel_OnClick = () => {
        console.log('btnDel_OnClick clicked');
    };
    const btnOk_OnClick = () => {
        console.log('btnOk_OnClick clicked');
    };
    const btnSelectFile_OnClick = () => {
        console.log('btnSelectFile_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        DS_EXCELLOAD,
        DS_PARENT,
        DS_CELL,
        btnDel_OnClick,
        btnOk_OnClick,
        btnSelectFile_OnClick,
        lfn_End,
    };
};
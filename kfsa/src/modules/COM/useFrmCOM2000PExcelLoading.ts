// @ts-nocheck
import { useState, useEffect } from 'react';
import type { IDS_EXCELLOAD, IDS_PARENT, IDS_CELL } from './FrmCOM2000PExcelLoadingData';

export const useFrmCOM2000PExcelLoading = () => {
    const [DS_EXCELLOAD, setDS_EXCELLOAD] = useState<IDS_EXCELLOAD[]>([]);
    const [DS_PARENT, setDS_PARENT] = useState<IDS_PARENT[]>([]);
    const [DS_CELL, setDS_CELL] = useState<IDS_CELL[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_grd_excelLoad, setRawVisible_grd_excelLoad] = useState(true);
    const [rawVisible_grd_parent, setRawVisible_grd_parent] = useState(true);
    const [rawVisible_FileDlgExcel, setRawVisible_FileDlgExcel] = useState(true);
    const [rawVisible_btnOk, setRawVisible_btnOk] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_btnDel, setRawVisible_btnDel] = useState(true);
    const [rawVisible_btnSelectFile, setRawVisible_btnSelectFile] = useState(true);
    const isVisible_grd_excelLoad = rawVisible_grd_excelLoad;
    const setIsVisible_grd_excelLoad = setRawVisible_grd_excelLoad;
    const isVisible_grd_parent = rawVisible_grd_parent;
    const setIsVisible_grd_parent = setRawVisible_grd_parent;
    const isVisible_FileDlgExcel = rawVisible_FileDlgExcel;
    const setIsVisible_FileDlgExcel = setRawVisible_FileDlgExcel;
    const isVisible_btnOk = rawVisible_btnOk;
    const setIsVisible_btnOk = setRawVisible_btnOk;
    const isVisible_btnEnd = rawVisible_btnEnd;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_btnDel = rawVisible_btnDel;
    const setIsVisible_btnDel = setRawVisible_btnDel;
    const isVisible_btnSelectFile = rawVisible_btnSelectFile;
    const setIsVisible_btnSelectFile = setRawVisible_btnSelectFile;

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
        isVisible_grd_excelLoad,
        setIsVisible_grd_excelLoad,
        isVisible_grd_parent,
        setIsVisible_grd_parent,
        isVisible_FileDlgExcel,
        setIsVisible_FileDlgExcel,
        isVisible_btnOk,
        setIsVisible_btnOk,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_btnDel,
        setIsVisible_btnDel,
        isVisible_btnSelectFile,
        setIsVisible_btnSelectFile,
        btnDel_OnClick,
        btnOk_OnClick,
        btnSelectFile_OnClick,
        lfn_End,
    };
};
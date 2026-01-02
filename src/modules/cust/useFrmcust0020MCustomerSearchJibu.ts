// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oCourse, Ids_ioChoiceYn, Ids_ioCourseYn, Ids_oJibu, Ids_SearchJogeon, Ids_CustomerList, Ids_oEduStudentGubun, Ids_oEduGubun, Ids_ioCustomerFeeInfo, Ids_oFee, Ids_oAdditionInfo, Ids_ioEducationPassInfo, Ids_oEduSuccessGubun } from './Frmcust0020MCustomerSearchJibuData';

export const useFrmcust0020MCustomerSearchJibu = () => {
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_ioCourseYn, setds_ioCourseYn] = useState<Ids_ioCourseYn[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [ds_CustomerList, setds_CustomerList] = useState<Ids_CustomerList[]>([]);
    const [ds_oEduStudentGubun, setds_oEduStudentGubun] = useState<Ids_oEduStudentGubun[]>([]);
    const [ds_oEduGubun, setds_oEduGubun] = useState<Ids_oEduGubun[]>([]);
    const [ds_ioCustomerFeeInfo, setds_ioCustomerFeeInfo] = useState<Ids_ioCustomerFeeInfo[]>([]);
    const [ds_oFee, setds_oFee] = useState<Ids_oFee[]>([]);
    const [ds_oAdditionInfo, setds_oAdditionInfo] = useState<Ids_oAdditionInfo[]>([]);
    const [ds_ioEducationPassInfo, setds_ioEducationPassInfo] = useState<Ids_ioEducationPassInfo[]>([]);
    const [ds_oEduSuccessGubun, setds_oEduSuccessGubun] = useState<Ids_oEduSuccessGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCourse([]);
            setds_ioChoiceYn([]);
            setds_ioCourseYn([]);
            setds_oJibu([]);
            setds_SearchJogeon([]);
            setds_CustomerList([]);
            setds_oEduStudentGubun([]);
            setds_oEduGubun([]);
            setds_ioCustomerFeeInfo([]);
            setds_oFee([]);
            setds_oAdditionInfo([]);
            setds_ioEducationPassInfo([]);
            setds_oEduSuccessGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnBarCodeSearch_OnClick = () => {
        console.log('btnBarCodeSearch_OnClick clicked');
    };
    const btnExcell_OnClick = () => {
        console.log('btnExcell_OnClick clicked');
    };
    const btnFeeDetailInfo1_OnClick = () => {
        console.log('btnFeeDetailInfo1_OnClick clicked');
    };
    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oCourse,
        ds_ioChoiceYn,
        ds_ioCourseYn,
        ds_oJibu,
        ds_SearchJogeon,
        ds_CustomerList,
        ds_oEduStudentGubun,
        ds_oEduGubun,
        ds_ioCustomerFeeInfo,
        ds_oFee,
        ds_oAdditionInfo,
        ds_ioEducationPassInfo,
        ds_oEduSuccessGubun,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        btnBarCodeSearch_OnClick,
        btnExcell_OnClick,
        btnFeeDetailInfo1_OnClick,
        btnMutilSort_OnClick,
        lfn_End,
        lfn_PrintScreen,
        lfn_Search,
    };
};
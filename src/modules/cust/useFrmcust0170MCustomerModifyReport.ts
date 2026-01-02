// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioYear, Ids_oJibu, Ids_ioChoiceYn, Ids_ioOrder, Ids_ioReport, Ids_ioCourse, Ids_ioCourseYn, Ids_oCustomerModify, Ids_oCustomerModify_A, Ids_oRegion, Ids_oCustomerModifyTotal_A, Ids_ioBusinessType } from './Frmcust0170MCustomerModifyReportData';

export const useFrmcust0170MCustomerModifyReport = () => {
    const [ds_ioYear, setds_ioYear] = useState<Ids_ioYear[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_ioOrder, setds_ioOrder] = useState<Ids_ioOrder[]>([]);
    const [ds_ioReport, setds_ioReport] = useState<Ids_ioReport[]>([]);
    const [ds_ioCourse, setds_ioCourse] = useState<Ids_ioCourse[]>([]);
    const [ds_ioCourseYn, setds_ioCourseYn] = useState<Ids_ioCourseYn[]>([]);
    const [ds_oCustomerModify, setds_oCustomerModify] = useState<Ids_oCustomerModify[]>([]);
    const [ds_oCustomerModify_A, setds_oCustomerModify_A] = useState<Ids_oCustomerModify_A[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_oCustomerModifyTotal_A, setds_oCustomerModifyTotal_A] = useState<Ids_oCustomerModifyTotal_A[]>([]);
    const [ds_ioBusinessType, setds_ioBusinessType] = useState<Ids_ioBusinessType[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioYear([]);
            setds_oJibu([]);
            setds_ioChoiceYn([]);
            setds_ioOrder([]);
            setds_ioReport([]);
            setds_ioCourse([]);
            setds_ioCourseYn([]);
            setds_oCustomerModify([]);
            setds_oCustomerModify_A([]);
            setds_oRegion([]);
            setds_oCustomerModifyTotal_A([]);
            setds_ioBusinessType([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Excel = () => {
        console.log('lfn_Excel clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };

    return {
        isLoading,
        ds_ioYear,
        ds_oJibu,
        ds_ioChoiceYn,
        ds_ioOrder,
        ds_ioReport,
        ds_ioCourse,
        ds_ioCourseYn,
        ds_oCustomerModify,
        ds_oCustomerModify_A,
        ds_oRegion,
        ds_oCustomerModifyTotal_A,
        ds_ioBusinessType,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        lfn_Cancel,
        lfn_End,
        lfn_Excel,
        lfn_Print,
    };
};
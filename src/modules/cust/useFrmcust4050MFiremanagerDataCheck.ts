// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioYear, Ids_ioChoiceYn, Ids_oCourse, Ids_oJibu, Ids_ioMemberGubun_0, Ids_ioCourseYn, Ids_oRegion, Ids_ioAssociationFiremanagerData, Ids_ioFireStationFiremanagerData, Ids_ioGetSysdateSearch, Ids_ioAssociationFireStation, Ids_ioFireStationAssociation, Ids_ioAssociationFireStationBnmaAddrFmnm } from './Frmcust4050MFiremanagerDataCheckData';

export const useFrmcust4050MFiremanagerDataCheck = () => {
    const [ds_ioYear, setds_ioYear] = useState<Ids_ioYear[]>([]);
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ioMemberGubun_0, setds_ioMemberGubun_0] = useState<Ids_ioMemberGubun_0[]>([]);
    const [ds_ioCourseYn, setds_ioCourseYn] = useState<Ids_ioCourseYn[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_ioAssociationFiremanagerData, setds_ioAssociationFiremanagerData] = useState<Ids_ioAssociationFiremanagerData[]>([]);
    const [ds_ioFireStationFiremanagerData, setds_ioFireStationFiremanagerData] = useState<Ids_ioFireStationFiremanagerData[]>([]);
    const [ds_ioGetSysdateSearch, setds_ioGetSysdateSearch] = useState<Ids_ioGetSysdateSearch[]>([]);
    const [ds_ioAssociationFireStation, setds_ioAssociationFireStation] = useState<Ids_ioAssociationFireStation[]>([]);
    const [ds_ioFireStationAssociation, setds_ioFireStationAssociation] = useState<Ids_ioFireStationAssociation[]>([]);
    const [ds_ioAssociationFireStationBnmaAddrFmnm, setds_ioAssociationFireStationBnmaAddrFmnm] = useState<Ids_ioAssociationFireStationBnmaAddrFmnm[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioYear([]);
            setds_ioChoiceYn([]);
            setds_oCourse([]);
            setds_oJibu([]);
            setds_ioMemberGubun_0([]);
            setds_ioCourseYn([]);
            setds_oRegion([]);
            setds_ioAssociationFiremanagerData([]);
            setds_ioFireStationFiremanagerData([]);
            setds_ioGetSysdateSearch([]);
            setds_ioAssociationFireStation([]);
            setds_ioFireStationAssociation([]);
            setds_ioAssociationFireStationBnmaAddrFmnm([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const FireStation_Onclick = () => {
        console.log('FireStation_Onclick clicked');
    };
    const btnFireStationCheck_OnClick = () => {
        console.log('btnFireStationCheck_OnClick clicked');
    };
    const btnResult_OnClick = () => {
        console.log('btnResult_OnClick clicked');
    };
    const lAssociationFiremanagerData = () => {
        console.log('lAssociationFiremanagerData clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_localExcel = () => {
        console.log('lfn_localExcel clicked');
    };

    return {
        isLoading,
        ds_ioYear,
        ds_ioChoiceYn,
        ds_oCourse,
        ds_oJibu,
        ds_ioMemberGubun_0,
        ds_ioCourseYn,
        ds_oRegion,
        ds_ioAssociationFiremanagerData,
        ds_ioFireStationFiremanagerData,
        ds_ioGetSysdateSearch,
        ds_ioAssociationFireStation,
        ds_ioFireStationAssociation,
        ds_ioAssociationFireStationBnmaAddrFmnm,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        FireStation_Onclick,
        btnFireStationCheck_OnClick,
        btnResult_OnClick,
        lAssociationFiremanagerData,
        lfn_End,
        lfn_PrintScreen,
        lfn_localExcel,
    };
};
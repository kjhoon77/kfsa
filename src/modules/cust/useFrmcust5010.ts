// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioTrainingOrder, Ids_oJibu, Ids_oCourse, Ids_ioFireSurvey, Ids_ioCommonCode, Ids_ioFireSurveyAdministratorInfo, Ids_ioFireSurveyRelationInfo, Ids_ioFireSurveyLicenseInfo, Ids_ioFireSurveyDong, Ids_ioFireSurveyFloorStatus, Ids_ioFightFireCompany, Ids_ioFightFireCompanyPossessionHuman, Ids_ioFightFireCompanyFireLicenseInfo, Ids_oCprAt, Ids_ioDanMnfctretcInfo, Ids_ioDanTankInfo, Ids_ioDanStatusSuccession, Ids_ioDanManagerInfo, Ids_ioFireSurveySFloorStatus, Ids_ioFireSurveyFloorE, Ids_ioFireMapping, Ids_oSGubun, Ids_ioFireSurveySubAdministratorInfo, Ids_ioFireSurveyLicenseInfo2 } from './Frmcust5010Data';

export const useFrmcust5010 = () => {
    const [ds_ioTrainingOrder, setds_ioTrainingOrder] = useState<Ids_ioTrainingOrder[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_ioFireSurvey, setds_ioFireSurvey] = useState<Ids_ioFireSurvey[]>([]);
    const [ds_ioCommonCode, setds_ioCommonCode] = useState<Ids_ioCommonCode[]>([]);
    const [ds_ioFireSurveyAdministratorInfo, setds_ioFireSurveyAdministratorInfo] = useState<Ids_ioFireSurveyAdministratorInfo[]>([]);
    const [ds_ioFireSurveyRelationInfo, setds_ioFireSurveyRelationInfo] = useState<Ids_ioFireSurveyRelationInfo[]>([]);
    const [ds_ioFireSurveyLicenseInfo, setds_ioFireSurveyLicenseInfo] = useState<Ids_ioFireSurveyLicenseInfo[]>([]);
    const [ds_ioFireSurveyDong, setds_ioFireSurveyDong] = useState<Ids_ioFireSurveyDong[]>([]);
    const [ds_ioFireSurveyFloorStatus, setds_ioFireSurveyFloorStatus] = useState<Ids_ioFireSurveyFloorStatus[]>([]);
    const [ds_ioFightFireCompany, setds_ioFightFireCompany] = useState<Ids_ioFightFireCompany[]>([]);
    const [ds_ioFightFireCompanyPossessionHuman, setds_ioFightFireCompanyPossessionHuman] = useState<Ids_ioFightFireCompanyPossessionHuman[]>([]);
    const [ds_ioFightFireCompanyFireLicenseInfo, setds_ioFightFireCompanyFireLicenseInfo] = useState<Ids_ioFightFireCompanyFireLicenseInfo[]>([]);
    const [ds_oCprAt, setds_oCprAt] = useState<Ids_oCprAt[]>([]);
    const [ds_ioDanMnfctretcInfo, setds_ioDanMnfctretcInfo] = useState<Ids_ioDanMnfctretcInfo[]>([]);
    const [ds_ioDanTankInfo, setds_ioDanTankInfo] = useState<Ids_ioDanTankInfo[]>([]);
    const [ds_ioDanStatusSuccession, setds_ioDanStatusSuccession] = useState<Ids_ioDanStatusSuccession[]>([]);
    const [ds_ioDanManagerInfo, setds_ioDanManagerInfo] = useState<Ids_ioDanManagerInfo[]>([]);
    const [ds_ioFireSurveySFloorStatus, setds_ioFireSurveySFloorStatus] = useState<Ids_ioFireSurveySFloorStatus[]>([]);
    const [ds_ioFireSurveyFloorE, setds_ioFireSurveyFloorE] = useState<Ids_ioFireSurveyFloorE[]>([]);
    const [ds_ioFireMapping, setds_ioFireMapping] = useState<Ids_ioFireMapping[]>([]);
    const [ds_oSGubun, setds_oSGubun] = useState<Ids_oSGubun[]>([]);
    const [ds_ioFireSurveySubAdministratorInfo, setds_ioFireSurveySubAdministratorInfo] = useState<Ids_ioFireSurveySubAdministratorInfo[]>([]);
    const [ds_ioFireSurveyLicenseInfo2, setds_ioFireSurveyLicenseInfo2] = useState<Ids_ioFireSurveyLicenseInfo2[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [tabValue_tabTab1, setTabValue_tabTab1] = useState(0);
    const [tabValue_tabTab2, setTabValue_tabTab2] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioTrainingOrder([]);
            setds_oJibu([]);
            setds_oCourse([]);
            setds_ioFireSurvey([]);
            setds_ioCommonCode([]);
            setds_ioFireSurveyAdministratorInfo([]);
            setds_ioFireSurveyRelationInfo([]);
            setds_ioFireSurveyLicenseInfo([]);
            setds_ioFireSurveyDong([]);
            setds_ioFireSurveyFloorStatus([]);
            setds_ioFightFireCompany([]);
            setds_ioFightFireCompanyPossessionHuman([]);
            setds_ioFightFireCompanyFireLicenseInfo([]);
            setds_oCprAt([]);
            setds_ioDanMnfctretcInfo([]);
            setds_ioDanTankInfo([]);
            setds_ioDanStatusSuccession([]);
            setds_ioDanManagerInfo([]);
            setds_ioFireSurveySFloorStatus([]);
            setds_ioFireSurveyFloorE([]);
            setds_ioFireMapping([]);
            setds_oSGubun([]);
            setds_ioFireSurveySubAdministratorInfo([]);
            setds_ioFireSurveyLicenseInfo2([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMatchCancel_OnClick = () => {
        console.log('btnMatchCancel_OnClick clicked');
    };
    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_ioTrainingOrder,
        ds_oJibu,
        ds_oCourse,
        ds_ioFireSurvey,
        ds_ioCommonCode,
        ds_ioFireSurveyAdministratorInfo,
        ds_ioFireSurveyRelationInfo,
        ds_ioFireSurveyLicenseInfo,
        ds_ioFireSurveyDong,
        ds_ioFireSurveyFloorStatus,
        ds_ioFightFireCompany,
        ds_ioFightFireCompanyPossessionHuman,
        ds_ioFightFireCompanyFireLicenseInfo,
        ds_oCprAt,
        ds_ioDanMnfctretcInfo,
        ds_ioDanTankInfo,
        ds_ioDanStatusSuccession,
        ds_ioDanManagerInfo,
        ds_ioFireSurveySFloorStatus,
        ds_ioFireSurveyFloorE,
        ds_ioFireMapping,
        ds_oSGubun,
        ds_ioFireSurveySubAdministratorInfo,
        ds_ioFireSurveyLicenseInfo2,
        tabValue_tabTab1,
        setTabValue_tabTab1,
        tabValue_tabTab2,
        setTabValue_tabTab2,
        btnMatchCancel_OnClick,
        btnToExcel_OnClick,
        lfn_End,
    };
};
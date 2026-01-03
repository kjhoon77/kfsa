// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioListDelete, Ids_oProfGubun } from './Frmprofes0001ProfessorpfDeleteData';

export const useFrmprofes0001ProfessorpfDelete = () => {
    const [ds_ioListDelete, setds_ioListDelete] = useState<Ids_ioListDelete[]>([]);
    const [ds_oProfGubun, setds_oProfGubun] = useState<Ids_oProfGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioListDelete([]);
            setds_oProfGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_Delete = () => {
        console.log('lfn_Delete clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ioListDelete,
        ds_oProfGubun,
        lfn_Delete,
        lfn_End,
        lfn_Search,
    };
};
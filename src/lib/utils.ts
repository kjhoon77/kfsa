/**
 * Replaces gfn_IsNull from UTL.js
 */
export const isNull = (value: any): boolean => {
    if (value === null || value === undefined) return true;
    if (typeof value === 'string' && value.trim() === '') return true;
    return false;
};

/**
 * Common alert wrapper (replaces gfn_Alert)
 */
export const showAlert = (message: string) => {
    alert(message);
};

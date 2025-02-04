export function isEmptyData(data: any) {
    return data === undefined || data === null;
}

/**
 * 将两个数据结构合并，直接在src上进行修改
 * @param src 原始数据
 * @param target 合并使用的数据
 * @param coverSrc [boolean = false] 表示是否需要覆盖原始数据结构
 */
export function mergeData(src: Record<any, any>, target: Record<any, any>, coverSrc: boolean = false) {
    Object.entries(target).forEach(([key, val]) => {

        // 直接覆盖原始数据
        if (coverSrc) {
            src[key] = val;
            return;
        }

        const oriData = src[key];
        
        if (isEmptyData(oriData)) {
            src[key] = val;
            return;
        }

        // 合并子数据
        if (typeof oriData === "object" && !Array.isArray(oriData)) {
            mergeData(oriData, val)
        }
    });
}
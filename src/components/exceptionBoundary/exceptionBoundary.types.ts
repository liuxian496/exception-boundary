import { ReactNode } from "react";

export interface ExceptionBoundaryProps {
    /**
     * 设置自定义控件前缀
     */
    prefixCls?: string;
    /**
     * 错误信息
     */
    errorMsg?: string | undefined;
    /**
     * 子组件
     */
    children: ReactNode;
}

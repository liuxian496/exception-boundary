import "./exceptionBoundary.less";

import classnames from "classnames";

import { getPrefixNs } from "cyndi/dist/getPrefixNs";

import { ExceptionBoundaryProps } from "../exceptionBoundary/exceptionBoundary.types";

/**
 * 输出控制台错误信息
 * @param msg 错误信息
 * @returns errorMsg 处理后的错误信息 {string}
 */
function error(msg?: string) {
    const errorMsg = `[litten error]: ${msg}`;
    console.error(errorMsg);

    return errorMsg;
}

function renderBoundary(props: ExceptionBoundaryProps) {
    const { errorMsg } = props;
    return (
        <div className={getExceptionVisualStates(props)}>{error(errorMsg)}</div>
    );
}

function getExceptionVisualStates(props: ExceptionBoundaryProps) {
    const { prefixCls: customizePrefixCls } = props;

    const prefixCls = getPrefixNs("exception", customizePrefixCls, "litten");

    const visualStates = classnames(`${prefixCls}__msg`);

    return visualStates;
}

export function ExceptionBoundary(props: ExceptionBoundaryProps) {
    const { children, errorMsg } = props;

    return (
        <>
            {errorMsg === undefined && children}
            {errorMsg !== undefined && renderBoundary(props)}
        </>
    );
}

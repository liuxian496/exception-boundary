import "litten/dist/assets/button.css";
import { useState } from "react";

import { userEvent, within, expect } from "@storybook/test";
import { ExceptionBoundaryStory } from "../stories/exceptionBoundary.stories";
import { Button } from "litten/dist/button";

import { ExceptionBoundary } from "../components/exceptionBoundary/exceptionBoundary";

const Test = () => {
    const [errorMsg, setErrorMsg] = useState<undefined | string>();

    function handleSetErrorMsgClick() {
        setErrorMsg("you throw an exception.");
    }

    function handleClearErrorMsgClick() {
        setErrorMsg(undefined);
    }

    return (
        <>
            <div>
                <Button onClick={handleSetErrorMsgClick}>Set error msg</Button>
                <Button onClick={handleClearErrorMsgClick}>
                    Clear error msg
                </Button>
            </div>
            <ExceptionBoundary errorMsg={errorMsg}>
                your commponent
            </ExceptionBoundary>
        </>
    );
};

export const DefaultTest: ExceptionBoundaryStory = {
    render: () => <Test />,
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement);

        const setBtu = canvas.getByText("Set error msg");
        const clearBtu = canvas.getByText("Clear error msg");

        await step(
            "Click 'Set error msg' button, then '[litten error]: you throw an exception.' in the document. ",
            async () => {
                await userEvent.click(setBtu);

                await expect(
                    canvas.getByText("[litten error]: you throw an exception.")
                ).toBeInTheDocument();
            }
        );

        await step(
            "Click 'Clear error msg' button, then you can see 'your commponent' in the document. ",
            async () => {
                await userEvent.click(clearBtu);

                await expect(
                    canvas.getByText("your commponent")
                ).toBeInTheDocument();
            }
        );
    },
};

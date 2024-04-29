import { Meta, StoryObj } from "@storybook/react";

import { ExceptionBoundary } from "../components/exceptionBoundary/exceptionBoundary";

import { DefaultTest } from "../test/defaultTest";

export default {
    title: "Example/ExceptionBoundary",
    component: ExceptionBoundary,
} as Meta;

export type ExceptionBoundaryStory = StoryObj;

export const Default = DefaultTest;

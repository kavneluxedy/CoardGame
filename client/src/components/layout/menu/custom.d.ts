import React, { SVGAttributes } from 'react';

declare module "*.svg" {
    const content: any;
    export default content;
}
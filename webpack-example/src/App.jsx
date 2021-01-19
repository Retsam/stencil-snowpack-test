import React from "react";
import { defineCustomElements } from "stencil-example";

defineCustomElements();

export default () => <div>
    <my-component first="Inigo" last="Montoya, you killed my father prepare to die." />
</div>

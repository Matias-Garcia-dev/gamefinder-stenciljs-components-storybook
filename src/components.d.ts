/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ButtonGamefinder {
        "disabled": boolean;
        "icon": string;
        "onClick": () => void;
        "size": string;
        "variant": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLButtonGamefinderElement extends Components.ButtonGamefinder, HTMLStencilElement {
    }
    var HTMLButtonGamefinderElement: {
        prototype: HTMLButtonGamefinderElement;
        new (): HTMLButtonGamefinderElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "button-gamefinder": HTMLButtonGamefinderElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface ButtonGamefinder {
        "disabled"?: boolean;
        "icon"?: string;
        "onClick"?: () => void;
        "size"?: string;
        "variant"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "button-gamefinder": ButtonGamefinder;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "button-gamefinder": LocalJSX.ButtonGamefinder & JSXBase.HTMLAttributes<HTMLButtonGamefinderElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}

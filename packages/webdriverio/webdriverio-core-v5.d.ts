// -------------------- ATTENTION --------------------
// Do not edit this file as it gets auto-generated!
// For edits modify /scripts/templates/*.tpl.d.ts
// Check CONTRIBUTING.md for more details.
// --------------------------------------------------
//
/// <reference types="node"/>
/// <reference types="webdriver"/>

declare namespace WebdriverIO {
    type LocationParam = 'x' | 'y';

    interface LocationReturn {
        x: number,
        y: number
    }

    type SizeParam = 'width' | 'height';

    interface SizeReturn {
        width: number,
        height: number
    }

    interface Cookie {
        name: string,
        value: string,
        domain?: string,
        path?: string,
        expiry?: number,
        sameSite?: boolean,
        isSecure?: boolean,
        isHttpOnly?: boolean
    }

    interface CSSProperty {
        property: string,
        value: any,
        parsed?: {
            // other
            unit?: string,
            // font-family
            value?: any,
            string: string,
            // color
            hex?: string,
            alpha?: number,
            type?: string,
            rgba?: string
        }
    }

    interface MultiRemoteCapabilities {
        [instanceName: string]: {
            capabilities: WebDriver.DesiredCapabilities;
        };
    }

    interface Options {
        runner?: string,
        specs?: string[],
        exclude?: string[],
        suites?: object,
        maxInstances?: number,
        maxInstancesPerCapability?: number,
        capabilities?: WebDriver.DesiredCapabilities[] | MultiRemoteCapabilities,
        outputDir?: string,
        baseUrl?: string,
        bail?: number,
        specFileRetries?: number,
        readonly specFileRetryAttempts?: number,
        waitforTimeout?: number,
        waitforInterval?: number,
        framework?: string,
        mochaOpts?: object,
        jasmineNodeOpts?: object,
        reporters?: (string | object)[],
        services?: (string | object)[],
        execArgv?: string[],
        featureFlags?: {
            specFiltering?: boolean,
        },
    }

    interface RemoteOptions extends WebDriver.Options, Omit<Options, 'capabilities'> { }

    interface MultiRemoteOptions {
        [instanceName: string]: WebDriver.DesiredCapabilities;
    }

    interface Suite {}
    interface Test {}

    interface Results {
        finished: number,
        passed: number,
        failed: number
    }

    interface HookFunctions {
        onPrepare?(
            config: Config,
            capabilities: WebDriver.DesiredCapabilities[]
        ): void;

        onWorkerStart?(
            cid: string,
            caps: WebDriver.DesiredCapabilities,
            specs: string[],
            args: Config,
            execArgv: string[]
        ): void;

        onComplete?(exitCode: number, config: Config, capabilities: WebDriver.DesiredCapabilities, results: Results): void;

        onReload?(oldSessionId: string, newSessionId: string): void;

        before?(
            capabilities: WebDriver.DesiredCapabilities,
            specs: string[]
        ): void;

        beforeCommand?(
            commandName: string,
            args: any[]
        ): void;

        beforeHook?(test: any, context: any, stepData?: any, world?: any): void;

        beforeSession?(
            config: Config,
            capabilities: WebDriver.DesiredCapabilities,
            specs: string[]
        ): void;

        beforeSuite?(suite: Suite): void;
        beforeTest?(test: Test, context: any): void;
        afterHook?(test: any, context: any, result: {
            error?: any,
            result?: any,
            passed: boolean,
            duration: number,
            retries: { limit: number, attempts: number }
        }, stepData?: any, world?: any): void;

        after?(
            result: number,
            capabilities: WebDriver.DesiredCapabilities,
            specs: string[]
        ): void;

        afterCommand?(
            commandName: string,
            args: any[],
            result: any,
            error?: Error
        ): void;

        afterSession?(
            config: Config,
            capabilities: WebDriver.DesiredCapabilities,
            specs: string[]
        ): void;

        afterSuite?(suite: Suite): void;
        afterTest?(test: Test, context: any, result: {
            error?: any,
            result?: any,
            passed: boolean,
            duration: number,
            retries: { limit: number, attempts: number }
        }): void;
    }
    type _HooksArray = {
        [K in keyof Pick<HookFunctions, "onPrepare" | "onWorkerStart" | "onComplete" | "before" | "after" | "beforeSession" | "afterSession">]: HookFunctions[K] | Array<HookFunctions[K]>;
    };
    type _Hooks = Omit<HookFunctions, "onPrepare" | "onWorkerStart" | "onComplete" | "before" | "after" | "beforeSession" | "afterSession">;
    interface Hooks extends _HooksArray, _Hooks { }

    type ActionTypes = 'press' | 'longPress' | 'tap' | 'moveTo' | 'wait' | 'release';
    interface TouchAction {
        action: ActionTypes,
        x?: number,
        y?: number,
        element?: Element,
        ms?: number
    }
    type TouchActions = string | TouchAction | TouchAction[];

    type WaitForOptions = {
        timeout?: number,
        interval?: number,
        timeoutMsg?: string,
        reverse?: boolean,
    }

    type ReactSelectorOptions = {
        props?: object,
        state?: any[] | number | string | object | boolean
    }

    type MoveToOptions = {
        xOffset?: number,
        yOffset?: number
    }

    type DragAndDropOptions = {
        duration?: number
    }

    type NewWindowOptions = {
        windowName?: string,
        windowFeatures?: string
    }

    type ClickOptions = {
        button?: number | string,
        x?: number,
        y?: number
    }

    type WaitUntilOptions = {
        timeout?: number,
        timeoutMsg?: string,
        interval?: number
    }

    interface Element {
        selector: string;
        elementId: string;

        /**
         * w3c
         */
        "element-6066-11e4-a52e-4f735466cecf"?: string;

        /**
         * jsonwp
         */
        ELEMENT?: string;

        /**
         * index in array of elements
         * only applicable if the element found with `$$` command
         */
        index?: number;

        /**
         * WebdriverIO.Element or WebdriverIO.BrowserObject
         */
        parent: Element | WebdriverIO.BrowserObject;

        /**
         * add command to `element` scope
         */
        addCommand(
            name: string,
            func: Function
        ): void;
        
        /**
         * The `$$` command is a short way to call the [`findElements`](/docs/api/webdriver.html#findelements) command in order
         * to fetch multiple elements on the page similar to the `$$` command from the browser scope. The difference when calling
         * it from an element scope is that the driver will look within the children of that element.
         */
        $$(
            selector: string | Function
        ): ElementArray;

        /**
         * The `$` command is a short way to call the [`findElement`](/docs/api/webdriver.html#findelement) command in order
         * to fetch a single element on the page similar to the `$` command from the browser scope. The difference when calling
         * it from an element scope is that the driver will look within the children of that element. You can also pass in an object as selector
         * where the object contains a property `element-6066-11e4-a52e-4f735466cecf` with the value of a reference
         * to an element. The command will then transform the reference to an extended WebdriverIO element.
         */
        $(
            selector: string | Function
        ): Element;

        /**
         * Add a value to an object found by given selector. You can also use unicode
         * characters like Left arrow or Back space. WebdriverIO will take care of
         * translating them into unicode characters. You’ll find all supported characters
         * [here](https://w3c.github.io/webdriver/webdriver-spec.html#keyboard-actions).
         * To do that, the value has to correspond to a key from the table.
         */
        addValue(
            value: string | number | boolean | object | any[]
        ): void;

        /**
         * Clear a `<textarea>` or text `<input>` element’s value. Make sure you can interact with the
         * element before using this command. You can't clear an input element that is disabled or in
         * readonly mode.
         */
        clearValue(): void;

        /**
         * Click on an element.
         */
        click(
            options?: ClickOptions
        ): void;

        /**
         * The `customs$$` allows you to use a custom strategy declared by using `browser.addLocatorStrategy`
         */
        custom$$(
            strategyName: string,
            strategyArguments: any
        ): ElementArray;

        /**
         * The `custom$` allows you to use a custom strategy declared by using `browser.addLocatorStrategy`
         */
        custom$(
            strategyName: string,
            strategyArguments: any
        ): Element;

        /**
         * Double-click on an element.
         */
        doubleClick(): void;

        /**
         * Drag an item to a destination element.
         */
        dragAndDrop(
            target: Element,
            options?: DragAndDropOptions
        ): void;

        /**
         * Get an attribute from a DOM-element based on the attribute name.
         */
        getAttribute(
            attributeName: string
        ): string;

        /**
         * Get a css property from a DOM-element selected by given selector.
         */
        getCSSProperty(
            cssProperty: string
        ): CSSProperty;

        /**
         * Get source code of specified DOM element by selector.
         */
        getHTML(
            includeSelectorTag?: boolean
        ): string;

        /**
         * Determine an element’s location on the page.
         */
        getLocation(
            prop: LocationParam
        ): number;

        /**
         * Determine an element’s location on the page.
         */
        getLocation(): LocationReturn;

        /**
         * The Get Element Property command will return the result of getting a property of an element.
         */
        getProperty(
            property: string
        ): object | string | boolean | number;

        /**
         * Get the width and height for an DOM-element.
         */
        getSize(
            prop: SizeParam
        ): number;

        /**
         * Get the width and height for an DOM-element.
         */
        getSize(): SizeReturn;

        /**
         * Get tag name of a DOM-element.
         */
        getTagName(): string;

        /**
         * Get the text content from a DOM-element. Make sure the element
         * you want to request the text from [is interactable](http://www.w3.org/TR/webdriver/#interactable)
         * otherwise you will get an empty string as return value. If the element is disabled or not
         * visible and you still want to receive the text content use [getHTML](https://webdriver.io/docs/api/element/getHTML.html)
         * as a workaround.
         */
        getText(): string;

        /**
         * Get the value of a `<textarea>`, `<select>` or text `<input>` found by given selector.
         * If multiple elements are found via the given selector, an array of values is returned instead.
         * For input with checkbox or radio type use isSelected.
         */
        getValue(): string;

        /**
         * Return true if the selected DOM-element:
         * - exists;
         * - is visible;
         * - is within viewport (if not try scroll to it);
         * - its center is not overlapped with another element;
         * - is not disabled.
         */
        isClickable(): boolean;

        /**
         * Return true if the selected DOM-element is displayed.
         */
        isDisplayed(): boolean;

        /**
         * Return true if the selected DOM-element found by given selector is partially visible and within the viewport.
         */
        isDisplayedInViewport(): boolean;

        /**
         * Return true or false if the selected DOM-element is enabled.
         */
        isEnabled(): boolean;

        /**
         * Return true if the selected element matches with the provided one.
         */
        isEqual(
            el: Element
        ): boolean;

        /**
         * Returns true if element exists in the DOM
         */
        isExisting(): boolean;

        /**
         * Return true or false if the selected DOM-element currently has focus. If the selector matches
         * multiple elements, it will return true if one of the elements has focus.
         */
        isFocused(): boolean;

        /**
         * Will return true or false whether or not an `<option>` or `<input>` element of type
         * checkbox or radio is currently selected.
         */
        isSelected(): boolean;

        /**
         * Move the mouse by an offset of the specified element. If no element is specified,
         * the move is relative to the current mouse cursor. If an element is provided but
         * no offset, the mouse will be moved to the center of the element. If the element
         * is not visible, it will be scrolled into view.
         */
        moveTo(
            options?: MoveToOptions
        ): void;

        /**
         * The `react$$` command is a useful command to query multiple React Components
         * by their actual name and filter them by props and state.
         */
        react$$(
            selector: string,
            options?: ReactSelectorOptions
        ): ElementArray;

        /**
         * The `react$` command is a useful command to query React Components by their
         * actual name and filter them by props and state.
         */
        react$(
            selector: string,
            options?: ReactSelectorOptions
        ): Element;

        /**
         * Save a screenshot of an element to a PNG file on your OS.
         */
        saveScreenshot(
            filename: string
        ): Buffer;

        /**
         * Scroll element into viewport ([MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)).
         */
        scrollIntoView(
            scrollIntoViewOptions?: object | boolean
        ): void;

        /**
         * Select option with a specific value.
         */
        selectByAttribute(
            attribute: string,
            value: string
        ): void;

        /**
         * Select option with a specific index.
         */
        selectByIndex(
            index: number
        ): void;

        /**
         * Select option with displayed text matching the argument.
         */
        selectByVisibleText(
            text: string
        ): void;

        /**
         * Send a sequence of key strokes to an element (clears value before). If the element
         * doesn't need to be cleared first then use addValue. You can also use
         * unicode characters like Left arrow or Back space. WebdriverIO will take care of
         * translating them into unicode characters. You’ll find all supported characters
         * [here](https://w3c.github.io/webdriver/webdriver-spec.html#keyboard-actions).
         * To do that, the value has to correspond to a key from the table.
         */
        setValue(
            value: string | number | boolean | object | any[]
        ): void;

        /**
         * Access elements inside a given element's shadowRoot
         */
        shadow$$(
            selector: string | Function
        ): ElementArray;

        /**
         * Access an element inside a given element's shadowRoot
         */
        shadow$(
            selector: string | Function
        ): Element;

        /**
         * [appium] The Touch Action API provides the basis of all gestures that can be automated in Appium.
         */
        touchAction(
            action: TouchActions
        ): void;

        /**
         * Wait for an element for the provided amount of
         * milliseconds to be clickable or not clickable.
         */
        waitForClickable(
            options?: WaitForOptions
        ): boolean;

        /**
         * Wait for an element for the provided amount of
         * milliseconds to be displayed or not displayed.
         */
        waitForDisplayed(
            options?: WaitForOptions
        ): boolean;

        /**
         * Wait for an element (selected by css selector) for the provided amount of
         * milliseconds to be (dis/en)abled. If multiple elements get queried by given
         * selector, it returns true if at least one element is (dis/en)abled.
         */
        waitForEnabled(
            options?: WaitForOptions
        ): boolean;

        /**
         * Wait for an element for the provided amount of
         * milliseconds to be present within the DOM. Returns true if the selector
         * matches at least one element that exists in the DOM, otherwise throws an
         * error. If the reverse flag is true, the command will instead return true
         * if the selector does not match any elements.
         */
        waitForExist(
            options?: WaitForOptions
        ): boolean;

        /**
         * This wait command is your universal weapon if you want to wait on something. It expects a condition
         * and waits until that condition is fulfilled with a truthy value. If you use the WDIO testrunner the
         * commands within the condition are getting executed synchronously like in your test.
         */
        waitUntil(
            condition: Function,
            options?: WaitUntilOptions
        ): boolean;
    }

    interface ElementArray extends Array<Element> {
        selector: string | Function;
        parent: Element | WebdriverIO.BrowserObject;
        foundWith: string;
        props: any[];
    }

    interface Timeouts {
        implicit?: number,
        pageLoad?: number,
        script?: number
    }

    interface Browser {
        config: Config;
        options: RemoteOptions;

        /**
         * add command to `browser` or `element` scope
         */
        addCommand(
            name: string,
            func: Function,
            attachToElement?: boolean
        ): void;

        /**
         * overwrite `browser` or `element` command
         */
        overwriteCommand(
            name: string,
            func: (origCommand: Function, ...args: any[]) => any,
            attachToElement?: boolean
        ): void;

        /**
         * create custom selector
         */
        addLocatorStrategy(
            name: string,
            func: (elementFetchingMethod: (selector: string) => any) => void
        ): void
        
        /**
         * The `$$` command is a short way to call the [`findElements`](/docs/api/webdriver.html#findelements) command in order
         * to fetch multiple elements on the page. It returns an array with element results that will have an
         * extended prototype to call action commands without passing in a selector. However if you still pass
         * in a selector it will look for that element first and call the action on that element.
         */
        $$(
            selector: string | Function
        ): ElementArray;

        /**
         * The `$` command is a short way to call the [`findElement`](/docs/api/webdriver.html#findelement) command in order
         * to fetch a single element on the page. It returns an object that with an extended prototype to call
         * action commands without passing in a selector. However if you still pass in a selector it will look
         * for that element first and call the action on that element. You can also pass in an object as selector
         * where the object contains a property `element-6066-11e4-a52e-4f735466cecf` with the value of a reference
         * to an element. The command will then transform the reference to an extended WebdriverIO element.
         */
        $(
            selector: string | Function | object
        ): Element;

        /**
         * The `customs$$` allows you to use a custom strategy declared by using `browser.addLocatorStrategy`
         */
        custom$$(
            strategyName: string,
            strategyArguments: any
        ): ElementArray;

        /**
         * The `custom$` allows you to use a custom strategy declared by using `browser.addLocatorStrategy`
         */
        custom$(
            strategyName: string,
            strategyArguments: any
        ): Element;

        /**
         * This command helps you to debug your integration tests. It stops the running browser and gives
         * you time to jump into it and check the state of your application (e.g. using dev tools).
         * Your terminal transforms into a [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop)
         * interface that will allow you to try out certain commands, find elements and test actions on
         * them.
         */
        debug(): void;

        /**
         * Delete cookies visible to the current page. By providing a cookie name it just removes the single cookie or more when multiple names are passed.
         */
        deleteCookies(
            names?: string[]
        ): void;

        /**
         * Retrieve a [cookie](https://w3c.github.io/webdriver/webdriver-spec.html#cookies)
         * visible to the current page. You can query a specific cookie by providing the cookie name or
         * retrieve all.
         */
        getCookies(
            names?: string[]
        ): Cookie[];

        /**
         * Returns browser window size (and position for drivers with W3C support).
         */
        getWindowSize(): WebDriver.RectReturn;

        /**
         * Send a sequence of key strokes to the active element. You can also use characters like
         * "Left arrow" or "Back space". WebdriverIO will take care of translating them into unicode
         * characters. You’ll find all supported characters [here](https://w3c.github.io/webdriver/webdriver-spec.html#keyboard-actions).
         * To do that, the value has to correspond to a key from the table.
         */
        keys(
            value: string | string[]
        ): void;

        /**
         * Open new window in browser. This command is the equivalent function to `window.open()`. This command does not
         * work in mobile environments.
         */
        newWindow(
            url: string,
            options?: NewWindowOptions
        ): string;

        /**
         * Pauses execution for a specific amount of time. It is recommended to not use this command to wait for an
         * element to show up. In order to avoid flaky test results it is better to use commands like
         * [`waitForExist`](/docs/api/element/waitForExist.html) or other waitFor* commands.
         */
        pause(
            milliseconds: number
        ): void;

        /**
         * The `react$$` command is a useful command to query multiple React Components
         * by their actual name and filter them by props and state.
         */
        react$$(
            selector: string,
            options?: ReactSelectorOptions
        ): ElementArray;

        /**
         * The `react$` command is a useful command to query React Components by their
         * actual name and filter them by props and state.
         */
        react$(
            selector: string,
            options?: ReactSelectorOptions
        ): Element;

        /**
         * Creates a new Selenium session with your current capabilities. This is useful if you
         * test highly stateful application where you need to clean the browser session between
         * the tests in your spec file to avoid creating hundreds of single test files with WDIO.
         * Be careful though, this command affects your test time tremendously since spawning
         * new Selenium sessions is very time consuming especially when using cloud services.
         */
        reloadSession(): void;

        /**
         * Appium only. Save a video started by startRecordingScreen command to file.
         * See [Appium docs](http://appium.io/docs/en/commands/device/recording-screen/start-recording-screen/)
         */
        saveRecordingScreen(
            filepath: string
        ): Buffer;

        /**
         * Save a screenshot of the current browsing context to a PNG file on your OS. Be aware that
         * some browser drivers take screenshots of the whole document (e.g. Geckodriver with Firefox)
         * and others only of the current viewport (e.g. Chromedriver with Chrome).
         */
        saveScreenshot(
            filepath: string
        ): Buffer;

        /**
         * Sets one or more [cookies](https://w3c.github.io/webdriver/#cookies) for the current page. Make sure you are
         * on the page that should receive the cookie. You can't set a cookie for an arbitrary page without
         * being on that page.
         */
        setCookies(
            cookie: Cookie[]
        ): void;

        /**
         * Sets the timeouts (implicit, pageLoad, script) associated with the current session.
         */
        setTimeout(
            timeouts: Timeouts
        ): void;

        /**
         * Resizes browser window outer size according to provided width and height.
         */
        setWindowSize(
            width: number,
            height: number
        ): null | object;

        /**
         * Switch focus to a particular tab / window.
         */
        switchWindow(
            urlOrTitleToMatch: string | RegExp
        ): void;

        /**
         * [appium] The Touch Action API provides the basis of all gestures that can be automated in Appium.
         */
        touchAction(
            action: TouchActions
        ): void;

        /**
         * Uploads a file to the Selenium Standalone server or other browser driver
         * (e.g. Chromedriver) by using the [`file`](/api/protocol/file.html) command.
         * _Note:_ that this command is only supported if you use a Selenium Hub or
         * Chromedriver directly.
         */
        uploadFile(
            localPath: string
        ): string;

        /**
         * Protocol binding to load the URL of the browser. If a baseUrl is
         * specified in the config, it will be prepended to the url parameter using
         * node's url.resolve() method.
         */
        url(
            url?: string
        ): void;

        /**
         * This wait command is your universal weapon if you want to wait on something. It expects a condition
         * and waits until that condition is fulfilled with a truthy value. If you use the WDIO testrunner the
         * commands within the condition are getting executed synchronously like in your test.
         */
        waitUntil(
            condition: Function,
            options?: WaitUntilOptions
        ): boolean;
    }

    interface Config extends Options, Omit<WebDriver.Options, "capabilities">, Hooks {}
}

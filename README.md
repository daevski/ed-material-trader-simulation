# Material Trader Simulation for Elite Dangerous

This tool is a mock of the in-game material trader UI. Development is still in the Alpha phase (not all features are finished). Feedback is welcome, new releases coming soon!

## Usage

Since this app is still in development, you can try it out here:
[https://prototype.daev.co/edmts/][daevco-development-url]

## Development

This app has been created using [React.js][reactjs-org]. (And with an amazing [slim start version][slim-react-starter], too!)

Run a local web server which will open the application in your default browser:

```plaintext
npm run dev
```

To debug the react.js code you can create a launch.json file for VS Code. When you hit F5, it should open the app in Chrome and breakpoints can be set in VS Code to debug it there.

```plaintext
{
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "pwa-chrome",
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "url": "http://localhost:8080",
            "webRoot": "${workspaceFolder}",
            "sourceMapPathOverrides": {
                "/build/*": "${workspaceRoot}/src/*"
            }
        }
    ]
}
```

## Build

> Note: The app version needs to be updated manually in `snowpack.config.js` before building!

Create a local `./build` directory that contains "production" code. You may copy this folder and host it with apache as is.

```plaintext
npx snowpack build
```

## License

[GNU GPLv3][license]

<!-- Link References -->
[license]: https://github.com/daevski/ed-material-trader-simulation/blob/main/LICENSE
[reactjs-org]: https://reactjs.org
[slim-react-starter]: https://github.com/nafeu/slim-react-starter
[daevco-development-url]: https://prototype.daev.co/edmts/
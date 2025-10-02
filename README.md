# MaterialLoginAutomation

Automatización de **login** y **registro** usando WebdriverIO, Appium y Cucumber.

## Estructura del proyecto
MaterialLoginAutomation/
│
├── features/
│   ├── login.feature
│   ├── register.feature
│   ├── page-object/
│   │   ├── LoginPage.js
│   │   └── RegisterPage.js
│   └── step-object/
│       ├── loginSteps.js
│       └── registerSteps.js
├── package.json
├── wdio.conf.js
├── .github/workflows/ci.yml
└── README.md

## Requisitos

- Node.js
- Appium
- WebdriverIO
- Cucumber
- Git
- Dispositivo Android
- GitHub Actions (para pipeline)

## Comando de ejecución
npx wdio run wdio.conf.js

export default {
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    "testEnvironment": "jsdom",
    "moduleNameMapper": {
      "^.+\\.svg$": "jest-svg-transformer",
      "^.+\\.(css|less|scss)$": "identity-obj-proxy"
    }
}
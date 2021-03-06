module.exports = {
  "root": true,
  "extends": "airbnb",
  "plugins": [],
  "rules": {
    "func-names": "off",
    "global-require": "off", // Interfers with optional and eventual circular references

    // doesn't work in node v4 :(
    "strict": "off",
    "prefer-rest-params": "off",
    "react/require-extension": "off",
    "import/no-extraneous-dependencies": "off"
  },
  "env": {
    "mocha": true,
    "jest": true
  }
};

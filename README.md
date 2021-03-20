# Meteor in a monorepo with Yarn workspaces

This is an example setup of [Meteor](https://www.meteor.com) apps in a [Yarn](https://yarnpkg.com/) [Workspaces](https://classic.yarnpkg.com/en/docs/workspaces) environment.

The Meteor apps are scaffolded with `meteor create --minimal` and use Svelte with the help of [zodern:melte](https://github.com/zodern/melte).

I wanted to include Svelte in this example, since it's notorius for being accidentally bundled in multiple different versions and causing all kinds of trouble when the compiled version and included runtime don't match.

## The relevant steps to make it work

1. Create `package.json` in the root of your monorepo
2. Add all packages and Meteor apps to workspace
  ```
  "workspaces": [
    "packages/**",
    "app1",
    "app2"
  ],
  ```
3. Define a "never hoist anything" `nohoist` -rule in `package.json` of all Meteor apps in the monorepo
  ```
  "workspaces": {
    "nohoist": [
      "**"
    ]
  },
  ```
4. Run `yarn install` in the root of your monorepo
5. That's it!

## Contributing

If you encounter problems or have ideas for improvement, I'm all ears.

## How to run the example monorepo

1. Clone
2. Make sure you have `yarn` installed
3. Run `yarn install` in monorepo root
4. `cd app1 && meteor` or `cd app2 && meteor`

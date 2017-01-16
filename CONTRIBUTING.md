# Contributing

## Issues

Please report issues in the [issue tracker](https://github.com/coopdigital/coop-frontend-toolkit/issues). When reporting an issue, provide as much information about the issue as possible, particularly:

- **Overview of the issue**
- **Steps to reproduce**, if any
- **Browser and platform versions** the issue appears on
- **Proposed fix** if any, with a link to the related Pull Request

## Submitting a contribution

Any contribution to this repository should be done through a Pull Request (PR).

To create a Pull Request, first you need to isolate your work into a new branch:

```
git checkout -b new-branch
```

Once you have committed all your code to this branch, you can then push this branch to the repository:

```
git push -u origin new-branch
```

You can then open a Pull Request for the branch on this repository. Provide information about why the Pull Request is necessary (possibly referencing an issue listed in the issue tracker), list a summary of the changes introduced and any other information that may be relevant.

If necessary, CC the relevant users by adding `cc @username` at the end of the overview.

## Working with the Design Manual locally

The [Co-op Design Manual](https://github.com/coopdigital/design-manual) uses this repository as an NPM dependency (you may also have other local projects using this package, maybe as a Bower dependency). In order to preview changes made to this repository directly within the local project you are working on, you first need to link the Toolkit NPM package locally.

First, if you haven't already done so, clone this repository:

```
git clone git@github.com:coopdigital/coop-frontend-toolkit.git
```

Once this is done, you need to make a local link of this package available to other local projects on your machine. In the toolkit workspace, create a local NPM link for the package:

```
cd coop-frontend-toolkit
npm link
```

This will make the `coop-frontend-toolkit` NPM package available locally. Once this is done, navigate to the local project directory, then link the dependency to the local one you have just created:

```
cd other-project-using-toolkit
npm link coop-frontend-toolkit
```

From now on, this local project will use the local version of the NPM package rather than the one hosted on Github: any changes made to the local Toolkit will now be available immediately in the other project, allowing you to preview changes instantly.

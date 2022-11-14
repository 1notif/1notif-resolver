1notif resolver
===============

About
-------
1notif resolver is a simple name system resolver for the serverless functions deployed on EXM. We plan to use `1notif resolver` to create a name system for `1notif protocol` channels.

Build
-----
```
npm run build
```

```
npm run start
```
The compiled Typescript code exist in `./dist` folder.

Resolver Function
----------------

- id: `tTFGILOi4rhI8TlT1qt4tE04e2HXAivPIdqqRzGVoDE`
- source code: https://github.com/1notif/1notif-resolver/tree/main/resolver

Register Name
-------------

The resolver accepts any alphanumeric string between 1 & 30 characters. The name can contain hyphens, but it can't start or end with it.

```
exm function:write tTFGILOi4rhI8TlT1qt4tE04e2HXAivPIdqqRzGVoDE --input '{ "function_id": "$the_exm_function_id", "label": "example" }' --token "MY_EXM_TOKEN"
```

To resolve your registered label, use it as subdomain of 1notif.net like [ark.1notif.net](http://ark.1notif.net)

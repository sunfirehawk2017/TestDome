# Permission Enum
https://www.testdome.com/questions/typescript/permission-enum/47551

Extend the _Permission_ enum so that it has the following fields:

* Read, which should have a value of 1
* Write, which should have a value of 2
* Execute, which should have a value of 4

Extend the _getPermissionList_ function so that it accepts a combination of several _Permission_ enums and returns an array of strings which are the names of the _Permissions_.

For example, executing:

> getPermissionList(Permission.Read | Permission.Write);

should return [ 'Read', 'Write' ] in any order.

```TypeScript
function getPermissionList(permission: Permission): string[] {
    return [];
}

enum Permission {
}

//console.log(getPermissionList(Permission.Read | Permission.Write));
```

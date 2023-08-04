function getPermissionList(permission: Permission): string[] {
  let result = [];
  while (permission) {
    const bit = permission & (~permission + 1);
    result.push(Permission[bit]);
    permission ^= bit;
  }
  return result;
}

enum Permission {
  Read = 1,
  Write = 2,
  Execute = 4
}

//console.log(getPermissionList(Permission.Read | Permission.Write));

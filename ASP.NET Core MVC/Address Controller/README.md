# Address Controller

Consider the following view, provided here and below, which is placed in Views/Address/Create.cshtml:

```ASP.NET
@model Address

<!DOCTYPE html>
<html>
<head>
  <title>Create a new address</title>
</head>
<body>
  <form method="post" action="/user/address/save">
    <label asp-for="Street">Street:</label>
    <input type="text" asp-for="Street" />
    <label asp-for="City">City:</label>
    <input type="text" asp-for="City" />
    <input type="submit" value="Submit" />
  </form>
</body>
</html>
```
Add actions to the _AddressController_ so that:
* On requests to "user/address/create", the view above should be returned.
* On submitting the form from the view above, AddressController should add the Address that was submitted into the AddressController.addresses field and then redirect to the "user/address/create" URL.

Actions should use attribute routing.
